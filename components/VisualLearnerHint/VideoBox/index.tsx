import SecondaryInformation from "components/SecondaryInformation";
import tinycolor from "tinycolor2";
import Image from "next/image";

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
    return (
        <>
            <figure className={styles.wrapper}>
                <a href={videoLink} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={thumbnailUrl}
                        alt={channelName}
                        width={1280}
                        height={720}
                        style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "20em",
                            boxShadow: `0 .2em 5em ${tinycolor(color).setAlpha(0.5).toString()}`,
                        }}
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
