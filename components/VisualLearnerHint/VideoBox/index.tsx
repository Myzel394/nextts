import SecondaryInformation from "components/SecondaryInformation";
import {CSSProperties} from "react";
import tinycolor from "tinycolor2";

import styles from "./VideoBox.module.css";

export interface VideoBoxProps {
    thumbnailUrl: string;
    channelName: string;
    videoLink: string;
    color: string;
}

const VideoBox = ({
    channelName,
    thumbnailUrl,
    videoLink,
    color,
}: VideoBoxProps) => {
    const style = {
        boxShadow: `0 .2em 5em ${tinycolor(color).setAlpha(0.5).toString()}`,
    } as CSSProperties;

    return (
        <>
            <figure className={styles.wrapper}>
                <a href={videoLink} target="_blank" rel="noopener noreferrer">
                    <img
                        src={thumbnailUrl}
                        alt={channelName}
                        width="100%"
                        height="100%"
                        style={style}
                    />
                </a>
                <figcaption>
                    <SecondaryInformation>
                        {channelName}
                    </SecondaryInformation>
                </figcaption>
            </figure>
        </>
    );
};

export default VideoBox;
