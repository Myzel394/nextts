import DownloadsThisWeekBox from "components/ReportStripe/DownloadsThisWeekBox";
import DefinitionsAvailableBox from "components/ReportStripe/DefinitionsAvailableBox";
import LikePercentageBox from "components/ReportStripe/LikePercentageBox";

import styles from "./ReportStripe.module.css";


export interface ReportStripeProps {
    downloadsThisWeek: number;
    typesAvailable: number;
    likePercentage: number;
}

const ReportStripe = ({
    downloadsThisWeek,
    likePercentage,
    typesAvailable,
}: ReportStripeProps) => {
    return (
        <div className={styles.wrapper}>
            <DownloadsThisWeekBox className={styles.element} value={downloadsThisWeek} />
            <DefinitionsAvailableBox className={styles.element} value={typesAvailable} />
            <LikePercentageBox className={styles.element} value={likePercentage} />
        </div>
    );
};

export default ReportStripe;
