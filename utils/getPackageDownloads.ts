import {promisify} from "util";

import stats from "download-stats";

const getPackageDownloads = async (packageName: string): Promise<number> => {
    const result = await promisify(stats.get.lastWeek)(packageName);

    return result.downloads;
};

export default getPackageDownloads;
