import React, {useRef} from "react";
import {useVisibleCountUp} from "hooks";

import ReportBox from "./ReportBox";

export interface LikePercentageBoxProps {
    value: number;
    className: string;
}

const LikePercentageBox = ({
    value,
    className,
}: LikePercentageBoxProps) => {
    const $wrapper = useRef<HTMLDivElement>();
    const {
        countUp: text,
    } = useVisibleCountUp({
        end: value,
        duration: 3,
        formattingFn: value => `${parseInt(value.toString(), 10)}%`,
        ref: $wrapper,
    });

    return (
        <div ref={$wrapper} className={className}>
            <ReportBox
                title={text as string}
                description="People love Typescript"
            />
        </div>
    );
};

export default LikePercentageBox;
