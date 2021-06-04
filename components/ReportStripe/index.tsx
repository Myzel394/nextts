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
            <DownloadsThisWeekBox value={downloadsThisWeek} />
            <DefinitionsAvailableBox value={typesAvailable} />
            <LikePercentageBox value={likePercentage} />
        </div>
    );
};

export default ReportStripe;
