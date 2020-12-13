import axios from 'axios';

import { standardizeUserInformationsFields } from '../Utils/standardizer'
import { URL_API_GITHUB, NO_USER_FOUND } from '../Config/constants';
import { requestErrorHandler } from './ErrorHandlerService';

const getUserGitHubByUserName = async (userName) => {
    try {
        const userInformations = await axios
            .get(`${URL_API_GITHUB}/users/${userName}`)
            .then((response) => response.data)
            .catch(requestErrorHandler);

        return standardizeUserInformationsFields(userInformations);
    } catch (error) {
        console.error(NO_USER_FOUND(userName));
    }
    return {};
};

const UserGitHubService = {
    getUserGitHubByUserName,
};

export default UserGitHubService;
