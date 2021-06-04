import Document, {Html, Head, Main, NextScript} from "next/document";


export default class CustomDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>
                        Next.ts - Build Next Level Websites
                    </title>
                    <meta name="description" content="Learn how to add Typescript to your Next.js projects." />
                    <link rel="canonical" href="https://www.nextts.org" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    <meta property="og:title" content="Next.ts - Build Next Level Websites" />
                    <meta property="og:description" content="Learn how to add Typescript to your Next.js projects." />

                    <meta property="og:image" content="https://www.nextts.org/assets/images/show.png" />
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="674" />
                    <meta property="og:image:alt" content="Picture of the page" />

                    <meta property="og:url" content="https://www.nextts.org" />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
