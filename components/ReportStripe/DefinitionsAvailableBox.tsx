import React, {useRef} from "react";
import {useVisibleCountUp} from "hooks";
import millify from "millify";

import ReportBox from "./ReportBox";

export interface DefinitionsAvailableBoxProps {
    value: number;
    className: string;
}

const DefinitionsAvailableBox = ({
    value,
    className,
}: DefinitionsAvailableBoxProps) => {
    const $wrapper = useRef<HTMLDivElement>();
    const {
        countUp: text,
    } = useVisibleCountUp({
        end: value,
        duration: 2,
        formattingFn: value => millify(value),
        ref: $wrapper,
    });

    return (
        <div ref={$wrapper} className={className}>
            <ReportBox
                title={text as string}
                description="Definitions available"
            />
        </div>
    );
};

export default DefinitionsAvailableBox;
