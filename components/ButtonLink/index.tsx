import {ReactNode} from "react";
import tinycolor from "tinycolor2";
import clsx from "clsx";
import getCSSVariable from "utils/getCSSVariable";

import styles from "./ButtonLink.module.css";

export interface ButtonLinkProps {
    children: ReactNode;
    href: string;
    size: "normal" | "large" | "small";

    color?: string;
    isExternal?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}

const SIZE_CLASS_MAP: Record<ButtonLinkProps["size"], string> = {
    normal: styles.sizeNormal,
    large: styles.sizeLarge,
    small: styles.sizeSmall,
};

const BACKGROUND_ALPHA = 0.08;

const ButtonLink = ({
    children,
    endIcon,
    isExternal,
    startIcon,
    href,
    size,
    color: givenColor,
}: ButtonLinkProps) => {
    const defaultColor = getCSSVariable("--text-link", "#1b7beb");
    const color = givenColor ?? defaultColor;

    const style = {
        color,
        "--background-color": tinycolor(color).setAlpha(BACKGROUND_ALPHA).toString(),
    };

    const sizeClass = SIZE_CLASS_MAP[size];

    return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
            style={style}
            className={clsx(styles.wrapper, sizeClass)}
            href={href}
            rel={isExternal ? "noopener noreferrer" : undefined}
            target={isExternal ? "_blank" : undefined}
        >
            {startIcon && (
                <div className={clsx(styles.startIcon, styles.icon)}>
                    {startIcon}
                </div>
            )}
            {children}
            {endIcon && (
                <div className={clsx(styles.endIcon, styles.icon)}>
                    {endIcon}
                </div>
            )}
        </a>
    );
};

ButtonLink.defaultProps = {
    size: "normal",
};

export default ButtonLink;
