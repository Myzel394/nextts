import React, {useRef} from "react";
import {useVisibleCountUp} from "hooks";

import ReportBox from "./ReportBox";

export interface LikePercentageBoxProps {
    value: number;
}

const LikePercentageBox = ({
    value,
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
        <div ref={$wrapper}>
            <ReportBox
                title={text as string}
                description="People love Typescript"
            />
        </div>
    );
};

export default LikePercentageBox;
