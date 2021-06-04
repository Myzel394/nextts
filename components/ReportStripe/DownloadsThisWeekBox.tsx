import React, {useRef} from "react";
import {useVisibleCountUp} from "hooks";
import millify from "millify";

import ReportBox from "./ReportBox";

export interface DownloadsThisWeekBoxProps {
    value: number;
}

const DownloadsThisWeekBox = ({
    value,
}: DownloadsThisWeekBoxProps) => {
    const $wrapper = useRef<HTMLDivElement>();
    const {
        countUp: text,
    } = useVisibleCountUp({
        end: value,
        duration: 1,
        formattingFn: value => millify(value),
        ref: $wrapper,
    });

    return (
        <div ref={$wrapper}>
            <ReportBox
                title={text as string}
                description="Downloads last week"
            />
        </div>
    );
};

export default DownloadsThisWeekBox;
