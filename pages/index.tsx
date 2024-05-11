import {GetStaticPropsResult} from "next";
import inSeconds from "in-seconds";
import {Showcase, WhyArea, InstallationArea, ReportStripe, ReportStripeProps} from "components";
import {getPackageDownloads, getTypescriptTypesAmount} from "utils";
import VisualLearnerHint from "components/VisualLearnerHint";

export type HomeProps = ReportStripeProps;

export default function Home({
    typesAvailable,
    likePercentage,
    downloadsThisWeek,
}: HomeProps) {
    return (
        <>
            <Showcase />
            <WhyArea />
            <InstallationArea />
            <ReportStripe
                likePercentage={likePercentage}
                typesAvailable={typesAvailable}
                downloadsThisWeek={downloadsThisWeek}
            />
            <VisualLearnerHint />
        </>
    );
}


export const getStaticProps = async (): Promise<GetStaticPropsResult<HomeProps>> => {
    const [downloadsThisWeek, typesAvailable] = await (() => {
        if (process.env.NODE_ENV !== "production") {
            return Promise.allSettled([
                100,
                100
            ]);
        }

        return Promise.allSettled([
            getPackageDownloads("typescript"), getTypescriptTypesAmount(),
        ]);
    })();

    if (downloadsThisWeek.status === "rejected" || typesAvailable.status === "rejected") {
        throw new Error(`Error while fetching data. downloadsThisWeek: ${downloadsThisWeek.status}, typesAvailable: ${typesAvailable.status}`);
    }

    return {
        props: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            downloadsThisWeek: downloadsThisWeek.value,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            typesAvailable: typesAvailable.value,
            // According to latest Stackoverflow survey: https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages
            likePercentage: 67,
        },
        revalidate: inSeconds.days(1),
    };
};
