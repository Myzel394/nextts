import AreaTitle from "components/AreaTitle";
import SecondaryInformation from "components/SecondaryInformation";
import VideoBox from "components/VisualLearnerHint/VideoBox";
import clsx from "clsx";

import styles from "./VisualLearnerHint.module.css";

const VisualLearnerHint = () => {
    return (
        <section id="tutorials">
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
                        videoLink="https://www.youtube.com/watch?v=d56mG7DezGs"
                    />
                </li>
                <li className={clsx("flexBoxElement", styles.element)}>
                    <VideoBox
                        color="#4684DB"
                        thumbnailUrl="/assets/images/fireship.jpg"
                        channelName="Fireship.io"
                        videoLink="https://odysee.com/@fireship:6/typescript-the-basics:6?r=HGbpybB1xhXtncacm15KsW7bHhfRHfum"
                    />
                </li>
                <li className={clsx("flexBoxElement", styles.element)}>
                    <VideoBox
                        color="#101C42"
                        thumbnailUrl="/assets/images/freecodecamp.jpg"
                        channelName="freeCodeCamp.org"
                        videoLink="https://www.youtube.com/watch?v=gp5H0Vw39yw"
                    />
                </li>
            </ul>
        </section>
    );
};

export default VisualLearnerHint;
