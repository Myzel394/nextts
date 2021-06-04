import clsx from "clsx";
import React from "react";

import styles from "./Bar.module.css";

export interface BarProps {
    onClick: () => any;
}

const Bar = ({
    onClick,
}: BarProps) => {
    return (
        <div className={styles.wrapper}>
            <button
                type="submit"
                aria-label="Replay"
                className={styles.buttonsWrapper}
                onClick={onClick}
            >
                <span className={clsx(styles.button, styles.close)} />
                <span className={clsx(styles.button, styles.minimize)} />
                <span className={clsx(styles.button, styles.open)} />
            </button>
            <h6 className={styles.title}>
                Bash
            </h6>
            <div />
        </div>
    );
};

export default Bar;
