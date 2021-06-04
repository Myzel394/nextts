import clsx from "clsx";
import {useState} from "react";

import styles from "./Title.module.css";

const Title = () => {
    const [title, setTitle] = useState<string>("Next");

    return (
        <>
            <h4 className={clsx(styles.font, styles.secondary)}>Build</h4>
            <h3
                className={clsx(styles.font, styles.primary)}
            >
                <span
                    onMouseEnter={() => setTitle("Next.js")}
                    onMouseLeave={() => setTitle("Next")}
                >
                    {title}
                </span>{" "}
                Level
            </h3>
            <h4 className={clsx(styles.font, styles.secondary)}>Websites</h4>
        </>
    );
};

export default Title;
