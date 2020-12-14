import axios from 'axios';

import { standardizeRepositoryFields } from '../Utils/standardizer'
import { URL_API_GITHUB, NO_REPOSITORY_FOUND } from '../Config/constants';

const getPublicRepositoriesUserGitHubByUserName = async (userName) => {
    try {
        const repositories = await axios
            .get(`${URL_API_GITHUB}/users/${userName}/repos`)
            .then((response) => response.data)
        return standardizeRepositoryFields(repositories);
    } catch (error) {
        console.error(NO_REPOSITORY_FOUND);
    }
    return {repositories:[], status:404};
};

const PublicRepositoriesUserGitHubService = {
    getPublicRepositoriesUserGitHubByUserName,
};

export default PublicRepositoriesUserGitHubService;
