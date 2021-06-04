import clsx from "clsx";
import ReportBox from "components/ReportStripe/ReportBox";
import millify from "millify";

import styles from "./ReportStripe.module.css";


export interface ReportStripeProps {
    downloadsThisWeek: number;
    typesAvailable: number;
    likePercentage: number;
}

const percentify = (value: number): string => `${parseInt(value.toString(), 10)}%`;

const ReportStripe = ({
    downloadsThisWeek,
    likePercentage,
    typesAvailable,
}: ReportStripeProps) => {
    return (
        <div className={styles.wrapper}>
            <ul className={clsx("flexBoxList", "flexBoxListBreak", styles.list)}>
                <ReportBox
                    value={downloadsThisWeek}
                    description="Downloads last week"
                    formattingFn={millify}
                />
                <ReportBox
                    value={typesAvailable}
                    description="Definitions available"
                    formattingFn={millify}
                />
                <ReportBox
                    value={likePercentage}
                    description="People love Typescript"
                    formattingFn={percentify}
                />
            </ul>
        </div>
    );
};

export default ReportStripe;
