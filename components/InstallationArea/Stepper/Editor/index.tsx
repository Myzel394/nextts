import React, {useRef} from "react";
import CodeEditor from "react-simple-code-editor";
import {highlight} from "prismjs/components/prism-core";
import bash from "prismjs/components/prism-bash";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import {useVisibleCountUp} from "hooks";

import Bar from "./Bar";
import styles from "./Editor.module.css";

export interface EditorProps {
    code: string;
}

// eslint-disable-next-line id-length
const easeInQuad = (t: number, b: number, c: number, d: number): number => {
    // eslint-disable-next-line no-param-reassign
    return c * (t /= d) * t + b;
};

const Editor = ({
    code,
}: EditorProps) => {
    const $wrapper = useRef<HTMLDivElement>();
    const {
        countUp,
        start,
        reset,
        hasBeenStarted,
    } = useVisibleCountUp({
        ref: $wrapper,
        end: code.length,
    });
    const codeIndex = hasBeenStarted ? parseInt(countUp.toString(), 10) : code.length;
    const currentCode = code.substring(0, codeIndex);

    return (
        <article ref={$wrapper} className={styles.wrapper}>
            <Bar
                onClick={() => {
                    reset();
                    start();
                }}
            />
            <CodeEditor
                disabled
                highlight={(code) => highlight(code, bash)}
                padding={10}
                style={{
                    fontFamily: "\"Fira code\", \"Fira Mono\", monospace",
                    fontSize: 12,
                }}
                value={currentCode}
                onValueChange={() => null}
            />
        </article>
    );
};

Editor.defaultProps = {
    path: "~",
};

export default Editor;
