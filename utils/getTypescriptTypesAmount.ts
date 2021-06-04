import axios from "axios";

const githubToken = process.env.GITHUB_ACCESS_TOKEN;

const instance = axios.create({
    headers: {
        Authorization: `Bearer ${githubToken}`,
    },
});

const getLatestCommitment = async () =>
    (await instance.get("https://api.github.com/repos/DefinitelyTyped/DefinitelyTyped/commits/master")).data;

const getTree = async (sha: string) =>
    (await instance.get(`https://api.github.com/repos/DefinitelyTyped/DefinitelyTyped/git/trees/${sha}`)).data;

const findTypesFolderSha = async (tree: any[]) => {
    const folder = tree.find(element => element.path === "types");

    if (!folder) {
        throw new Error("Folder not found");
    }

    return folder.sha;
};

const getTypescriptTypesAmount = async (): Promise<number> => {
    // Get latest commitment
    const latestCommitment = await getLatestCommitment();
    const sha = latestCommitment.sha;
    const topLevelTree = await getTree(sha);
    const typesSha = await findTypesFolderSha(topLevelTree.tree);
    const typesTree = await getTree(typesSha);

    return typesTree.tree.length;
};

export default getTypescriptTypesAmount;
