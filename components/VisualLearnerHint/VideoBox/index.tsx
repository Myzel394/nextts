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
    const style = {
        boxShadow: `0 .2em 5em ${tinycolor(color).setAlpha(0.5).toString()}`,
    } as any;

    return (
        <>
            <figure className={styles.wrapper}>
                <div style={style}>
                    <a href={videoLink} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={thumbnailUrl}
                            alt={channelName}
                            width="100%"
                            height="60em"
                            layout="responsive"
                            objectFit="cover"
                        />
                    </a>
                </div>
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
