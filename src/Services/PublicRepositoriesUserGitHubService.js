import axios from 'axios';

import { standardizeRepositoryFields } from '../Utils/standardizer'
import { URL_API_GITHUB, NO_USER_FOUND } from '../Config/constants';
import { requestErrorHandler } from './ErrorHandlerService';

const getPublicRepositoriesUserGitHubByUserName = async (userName) => {
    try {
        const repositories = await axios
            .get(`${URL_API_GITHUB}/users/${userName}/repos`)
            .then((response) => response.data)
            .catch(requestErrorHandler);

        return standardizeRepositoryFields(repositories);
    } catch (error) {
        console.error(NO_USER_FOUND(userName));
    }
    return [];
};

const PublicRepositoriesUserGitHubService = {
    getPublicRepositoriesUserGitHubByUserName,
};

export default PublicRepositoriesUserGitHubService;
