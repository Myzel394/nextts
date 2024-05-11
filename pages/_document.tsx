import Document, {Html, Head, Main, NextScript} from "next/document";


export default class CustomDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>
                        How to add TypeScript to your Next.js project - nextts.org
                    </title>
                    <meta name="description" content="Learn how to add TypeScript to your Next.js projects." />
                    <link rel="canonical" href="https://www.nextts.org" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="keyword" content="typescript, nextts.org, javascript, tutorial, explanation" />

                    <meta property="og:title" content="Next.ts - Build Next Level Websites" />
                    <meta property="og:description" content="Learn how to add TypeScript to your Next.js projects." />

                    <meta property="og:image" content="https://www.nextts.org/assets/images/show.png" />
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="674" />
                    <meta property="og:image:alt" content="Screenshot of this page" />

                    <meta property="og:url" content="https://www.nextts.org" />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />

                    <meta name="darkreader-lock" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
