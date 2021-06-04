import styles from "./ReportBox.module.css";

export interface ReportBoxProps {
    title: string;
    description: string;
}

const ReportBox = ({
    description,
    title,
}: ReportBoxProps) => {
    return (
        <article className={styles.wrapper}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
        </article>
    );
};

export default ReportBox;
