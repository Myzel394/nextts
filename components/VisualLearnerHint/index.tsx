import AreaTitle from "components/AreaTitle";
import SecondaryInformation from "components/SecondaryInformation";
import VideoBox from "components/VisualLearnerHint/VideoBox";
import clsx from "clsx";

import styles from "./VisualLearnerHint.module.css";

const VisualLearnerHint = () => {
    return (
        <>
            <AreaTitle title="Want to learn more about Typescript?" />
            <SecondaryInformation className={styles.description}>
                Check out these awesome videos to learn Typescript now :)
            </SecondaryInformation>
            <ul className={clsx("flexBoxList", "flexBoxListBreak")}>
                <li className={clsx("flexBoxElement", styles.element)}>
                    <VideoBox
                        color="#FDF854"
                        thumbnailUrl="/assets/images/mosh.jpg"
                        channelName="Programming with Mosh"
                        videoLink="https://invidious.exonip.de/watch?v=NjN00cM18Z4"
                    />
                </li>
                <li className={clsx("flexBoxElement", styles.element)}>
                    <VideoBox
                        color="#4684DB"
                        thumbnailUrl="/assets/images/fireship.jpg"
                        channelName="Fireship.io"
                        videoLink="https://invidious.exonip.de/watch?v=ahCwqrYpIuM"
                    />
                </li>
                <li className={clsx("flexBoxElement", styles.element)}>
                    <VideoBox
                        color="#101C42"
                        thumbnailUrl="/assets/images/freecodecamp.jpg"
                        channelName="freeCodeCamp.org"
                        videoLink="https://invidious.exonip.de/watch?v=gp5H0Vw39yw"
                    />
                </li>
            </ul>
        </>
    );
};

export default VisualLearnerHint;
