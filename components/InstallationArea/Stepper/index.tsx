import React, {ReactNode} from "react";
import Image from "next/image";
import clsx from "clsx";

import Editor from "./Editor";
import styles from "./Stepper.module.css";

export interface StepperProps {
    step: number;
    title: string;
    description: string;

    code?: string;
    children?: ReactNode;
}

const Stepper = ({
    step,
    description,
    title,
    children,
    code,
}: StepperProps) => {
    const svgPath = `/assets/svgs/steppers/${step}.svg`;

    return (
        <article className={styles.wrapper}>
            <Image src={svgPath} width="auto" height={120} />
            <h1 className={styles.title}>{title}</h1>
            <div className={clsx(styles.explanationWrapper, !code && styles.singleText)}>
                {code && (
                    <div className={styles.explanationContainer}>
                        <Editor code={code} />
                    </div>
                )}
                <div className={styles.explanationContainer}>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
            {children}
        </article>
    );
};

export default Stepper;
