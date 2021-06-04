import React, {useEffect, useRef} from "react";
import {useCountUp} from "react-countup";
import {useIsVisible} from "react-is-visible";
import CodeEditor from "react-simple-code-editor";
import {highlight} from "prismjs/components/prism-core";
import bash from "prismjs/components/prism-bash";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

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
    const $hasBeenStarted = useRef<boolean>(false);
    const {
        countUp,
        reset,
        start,
    } = useCountUp({
        end: code.length,
        duration: 2,
        decimals: 0,
        easingFn: easeInQuad,
    });
    const codeIndex = $hasBeenStarted.current ? parseInt(countUp.toString(), 10) : code.length;
    const currentCode = code.substring(0, codeIndex);

    const $wrapper = useRef<HTMLDivElement>();
    const isVisible = useIsVisible($wrapper);

    useEffect(() => {
        if (isVisible && !$hasBeenStarted.current) {
            $hasBeenStarted.current = true;
            start();
        }
    }, [isVisible, start]);

    return (
        <div ref={$wrapper} className={styles.wrapper}>
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
        </div>
    );
};

Editor.defaultProps = {
    path: "~",
};

export default Editor;
