import ExplanationBox from "components/WhyArea/ExplanationBox";
import {MdArrowDownward} from "react-icons/md";
import {FaLongArrowAltRight} from "react-icons/fa";
import clsx from "clsx";

import styles from "./WhyArea.module.css";

const WhyArea = () => {
    return (
        <section id="why">
            <ul className={clsx("flexBoxList", styles.wrapper)}>
                <li className={clsx("flexBoxElement", styles.box)}>
                    <ExplanationBox
                        title="Better DX"
                        description="Don’t make programming a pain in the ass. Everyone loves clean code and an easy-to-maintain codebase."
                        link="#installation"
                        linkTitle="Installation"
                        icon={MdArrowDownward}
                    />
                </li>
                <li className={clsx("flexBoxElement", styles.box)}>
                    <ExplanationBox
                        title="Avoid Errors"
                        description="Spot dumb errors in development, instead of in production mode."
                        link="#installation"
                        linkTitle="Installation"
                        icon={MdArrowDownward}
                    />
                </li>
                <li className={clsx("flexBoxElement", styles.box)}>
                    <ExplanationBox
                        title="Be modern"
                        description="Use new Javascript features with Typescript. Don’t worry about compatibility. That’s Typescript’s job."
                        link="#installation"
                        linkTitle="Installation"
                        icon={MdArrowDownward}
                    />
                </li>
                <li className={clsx("flexBoxElement", styles.box)}>
                    <ExplanationBox
                        title="Use your IDE"
                        description="Help your IDE understand your code better, so it can help you writing better code."
                        link="#installation"
                        linkTitle="Installation"
                        icon={MdArrowDownward}
                    />
                </li>
                <li className={clsx("flexBoxElement", styles.box)}>
                    <ExplanationBox
                        isExternal
                        title="Fully supported"
                        description="Next.js fully supports Typescript. It’s just a few commands away."
                        link="https://nextjs.org/learn/excel/typescript"
                        linkTitle="Documentation"
                        icon={FaLongArrowAltRight}
                    />
                </li>
                <li className={clsx("flexBoxElement", styles.box)}>
                    <ExplanationBox
                        isExternal
                        title="Next.js Features"
                        description="Use all features Next.js provides. SEO, Image Optimization, Fast Refresh, Zero Config, and more!"
                        link="https://nextjs.org/#features"
                        linkTitle="Documentation"
                        icon={FaLongArrowAltRight}
                    />
                </li>
            </ul>
        </section>
    );
};

export default WhyArea;
