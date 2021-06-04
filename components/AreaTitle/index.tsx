import styles from "./AreaTitle.module.css";

export interface AreaTitleProps {
    title: string;

    secondHeader?: boolean;
}

const AreaTitle = ({
    title,
    secondHeader,
}: AreaTitleProps) => {
    if (secondHeader) {
        return (
            <h2 className={styles.container}>
                {title}
            </h2>
        );
    }

    return (
        <h1 className={styles.container}>
            {title}
        </h1>
    );
};

export default AreaTitle;
