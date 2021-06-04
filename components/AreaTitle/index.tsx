import styles from "./AreaTitle.module.css";

export interface AreaTitleProps {
    title: string;
}

const AreaTitle = ({
    title,
}: AreaTitleProps) => {
    return (
        <h2 className={styles.container}>
            {title}
        </h2>
    );
};

export default AreaTitle;
