import ButtonLink from "components/ButtonLink";
import getCSSVariable from "utils/getCSSVariable";

import styles from "./Header.module.css";

const Header = () => {
    const color = getCSSVariable("--text-secondary", "#ccc");

    return (
        <header className={styles.wrapper}>
            <div className={styles.anchors}>
                <ButtonLink
                    color={color}
                    href="#why"
                >
                    Why
                </ButtonLink>
                <ButtonLink
                    color={color}
                    href="#installation"
                >
                    Installation
                </ButtonLink>
                <ButtonLink
                    color={color}
                    href="#tutorials"
                >
                    Tutorials
                </ButtonLink>
            </div>
            <div className={styles.divider} />
            <ButtonLink
                isExternal
                color={getCSSVariable("--text-primary", "#fff")}
                href="https://nextjs.org"
            >
                    Next.js
            </ButtonLink>
        </header>
    );
};

export default Header;
