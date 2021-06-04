import {IconType} from "react-icons";
import ButtonLink from "components/ButtonLink";

import styles from "./ExplanationBox.module.css";

export interface ExplanationBoxProps {
    title: string;
    description: string;
    link: string;
    linkTitle: string;
    icon: IconType;

    isExternal?: boolean;
}

const ExplanationBox = ({
    title,
    link,
    linkTitle,
    description,
    isExternal,
    icon: Icon,
}: ExplanationBoxProps) => {
    return (
        <article className={styles.wrapper}>
            {/* eslint-disable-next-line @shopify/jsx-prefer-fragment-wrappers */}
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className={styles.linkWrapper}>
                <ButtonLink
                    isExternal={isExternal}
                    endIcon={<Icon />}
                    href={link}
                >
                    {linkTitle}
                </ButtonLink>
            </div>
        </article>
    );
};

export default ExplanationBox;