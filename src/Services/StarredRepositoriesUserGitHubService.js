import axios from 'axios';

import { standardizeRepositoryFields } from '../Utils/standardizer'
import { URL_API_GITHUB, NO_REPOSITORY_FOUND } from '../Config/constants';

const getStarredRepositoriesUserGitHubByUserName = async (userName) => {
    try {
        const repositories = await axios
            .get(`${URL_API_GITHUB}/users/${userName}/starred`)
            .then((response) => response.data)
        return standardizeRepositoryFields(repositories);
    } catch (error) {
        console.error(NO_REPOSITORY_FOUND);
    }
    return {repositories:[], status:404};
};

const StarredRepositoriesUserGitHubService = {
    getStarredRepositoriesUserGitHubByUserName,
};

export default StarredRepositoriesUserGitHubService;
