import {
    SiAtom, SiEclipseide,
    SiIntellijidea,
    SiReplDotIt,
    SiSublimetext,
    SiVim,
    SiVisualstudiocode,
    SiWebstorm,
} from "react-icons/si";
import {DiNetbeans} from "react-icons/di";

import styles from "./CrossPlatform.module.css";

const ICONS = [
    SiVisualstudiocode,
    SiWebstorm,
    DiNetbeans,
    SiAtom,
    SiVim,
    SiIntellijidea,
    SiReplDotIt,
    SiSublimetext,
    SiEclipseide,
];

const CrossPlatform = () => {
    return (
        <>
            <h2 className={styles.title}>
                Supported by 9+ cross-platform IDE&apos;s
            </h2>
            <div className={styles.icons}>
                {ICONS.map(Icon =>
                    <div key={Icon.toString()} className={styles.icon} >
                        <Icon size="1.8rem" />
                    </div>)}
            </div>
        </>
    );
};

export default CrossPlatform;
