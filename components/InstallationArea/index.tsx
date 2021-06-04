import React from "react";
import AreaTitle from "components/AreaTitle";
import ButtonLink from "components/ButtonLink";
import {SiTypescript} from "react-icons/si";
import {FaLongArrowAltRight} from "react-icons/fa";
import clsx from "clsx";

import styles from "./InstallationArea.module.css";
import Stepper from "./Stepper";
import CrossPlatform from "./CrossPlatform";

const InstallationArea = () => {
    return (
        <section id="installation">
            <AreaTitle title="How to add Typescript to Next.js" />
            <ul className={clsx("flexBoxList", styles.wrapper)}>
                <Stepper
                    code="npx create-next-app ."
                    step={1}
                    title="Start with your Next.js app"
                    description="Nothing fancy yet, just create a new Next.js app and continue with the next step."
                >
                    <CrossPlatform />
                </Stepper>
                <Stepper
                    code="touch tsconfig.json"
                    step={2}
                    title="Create your tsconfig.json"
                    description="The `tsconfig.json` file contains all configuration for Typescript. You don’t need to write anything to it."
                />
                <Stepper
                    code={"yarn run dev\nyarn add -D typescript\nyarn add -D @types/react @types/node"}
                    step={3}
                    title="Add Typescript"
                    description={`After starting the server, you will see instructions on how to install Typescript. 
                Follow them. Many packages do not provide Typescript definitions. 
                That's why it's a good idea to install the packages from DefinitelyTyped via @types/<your_package_name>.`}
                >
                    <ButtonLink
                        isExternal
                        className={styles.moreInfoButton}
                        size="small"
                        href="https://definitelytyped.org/"
                        startIcon={<SiTypescript />}
                        endIcon={<FaLongArrowAltRight />}
                    >
                    Check out DefinitelyTyped
                    </ButtonLink>
                </Stepper>
                <Stepper
                    step={4}
                    title="You're ready!"
                    description={`Great job, let's make some awesome projects using Typescript! 
                You can rename your ".js" files to ".ts" (and ".jsx" to ".tsx") now.`}
                >
                    <ButtonLink
                        isExternal
                        className={styles.moreInfoButton}
                        size="small"
                        href="https://www.npmjs.com/package/js-to-ts-converter?activeTab=readme"
                        endIcon={<FaLongArrowAltRight />}
                    >
                    Use js-to-ts-converter
                    </ButtonLink>
                </Stepper>
            </ul>
        </section>
    );
};

export default InstallationArea;
