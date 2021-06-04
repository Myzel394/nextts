import Showcase from "components/Showcase";
import WhyArea from "components/WhyArea";
import InstallationArea from "components/InstallationArea";
import ReportStripe, {ReportStripeProps} from "components/ReportStripe";
import {GetStaticPropsContext, GetStaticPropsResult} from "next";
import inSeconds from "in-seconds";
import {getPackageDownloads, getTypescriptTypesAmount} from "utils";

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
        </>
    );
}


export const getStaticProps = async (
    context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<HomeProps>> => {
    const [downloadsThisWeek, typesAvailable] = await Promise.allSettled([
        getPackageDownloads("typescript"), getTypescriptTypesAmount(),
    ]);
    if (downloadsThisWeek.status === "rejected" || typesAvailable.status === "rejected") {
        throw new Error(`Error while fetching data. downloadsThisWeek: ${downloadsThisWeek.status}, typesAvailable: ${typesAvailable.status}`);
    }

    return {
        props: {
            downloadsThisWeek: downloadsThisWeek.value,
            typesAvailable: typesAvailable.value,
            // According to latest Stackoverflow survey: https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages
            likePercentage: 67,
        },
        revalidate: inSeconds.hours(1),
    };
};
