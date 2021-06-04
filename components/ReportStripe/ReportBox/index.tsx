import SecondaryInformation from "components/SecondaryInformation";
import {useRef} from "react";
import {useVisibleCountUp, UseVisibleCountUpProps} from "hooks";
import clsx from "clsx";

import styles from "./ReportBox.module.css";

export interface ReportBoxProps {
    value: number;
    description: string;

    formattingFn: UseVisibleCountUpProps["formattingFn"];
}

const ReportBox = ({
    description,
    formattingFn,
    value,
}: ReportBoxProps) => {
    const $wrapper = useRef<HTMLLIElement>();
    const {
        countUp: title,
    } = useVisibleCountUp({
        end: value,
        duration: 2,
        ref: $wrapper,
        formattingFn,
    });

    return (
        <li ref={$wrapper} className={clsx("flexBoxElement", styles.wrapper)}>
            <h1 className={styles.title}>{title}</h1>
            <SecondaryInformation className={styles.description}>
                {description}
            </SecondaryInformation>
        </li>
    );
};

export default ReportBox;
