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

const ICONS = {
    "Visual Studio Code": SiVisualstudiocode,
    Webstorm: SiWebstorm,
    Netbeans: DiNetbeans,
    Atom: SiAtom,
    Vim: SiVim,
    "IntelliJ IDEA": SiIntellijidea,
    "Repl.it": SiReplDotIt,
    "Sublime Text": SiSublimetext,
    Eclipse: SiEclipseide,
};

const CrossPlatform = () => {
    return (
        <>
            <h2 className={styles.title}>
                Supported by 9+ cross-platform IDE&apos;s
            </h2>
            <div className={styles.icons}>
                {Object.entries(ICONS).map(([name, Icon]) =>
                    <div key={name} className={styles.icon} title={`Support for ${name} included`}>
                        <Icon size="1.8rem" />
                        <div className={styles.tooltip}>
                            <div className={styles.arrowWrapper}>
                                <div className={styles.arrow} />
                                <div className={styles.arrowBackground} />
                            </div>
                            <span>{name}</span>
                        </div>
                    </div>)}
            </div>
        </>
    );
};

export default CrossPlatform;
