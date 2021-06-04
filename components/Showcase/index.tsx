import {useEffect, useRef, useState} from "react";
import {useElementSize} from "hooks";
import Header from "components/Header";
import Title from "components/Title";
import AreaTitle from "components/AreaTitle";
import SecondaryInformation from "components/SecondaryInformation";

import styles from "./Showcase.module.css";

const Showcase = () => {
    const $header = useRef<HTMLDivElement>();
    const $title = useRef<HTMLDivElement>();
    const $description = useRef<HTMLParagraphElement>();

    // 888: Default for 1080p monitor
    const [availableHeight, setAvailableHeight] = useState<number>(828);

    const [, headerHeight = 0] = useElementSize($header.current);
    const [, titleHeight = 0] = useElementSize($title.current);
    const [, paragraphHeight = 0] = useElementSize($description.current);

    useEffect(() => {
        setAvailableHeight(window.innerHeight - headerHeight - titleHeight - paragraphHeight);
    }, [headerHeight, titleHeight, paragraphHeight]);

    return (
        <>
            <div ref={$header} className={styles.headerWrapper}>
                <Header />
            </div>
            <div
                className={styles.titleWrapper}
                style={{
                    height: availableHeight,
                }}
            >
                <Title />
                <div ref={$description}>
                    <SecondaryInformation>
                        Combine the best framework with the best language to provide the best websites with the best user & developer experiences.
                    </SecondaryInformation>
                </div>
            </div>
            <div ref={$title}>
                <AreaTitle
                    secondHeader
                    title="Why Next.js + Typescript"
                />
            </div>
        </>
    );
};

export default Showcase;
