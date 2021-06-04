import clsx from "clsx";
import {DetailedHTMLProps, HTMLAttributes} from "react";

import styles from "./SecondaryInformation.module.css";

export interface SecondaryInformationProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}

const SecondaryInformation = ({
    children,
    className,
    ...other
}: SecondaryInformationProps) => {
    return (
        <p {...other} className={clsx(styles.text, className)}>
            {children}
        </p>
    );
};

export default SecondaryInformation;
