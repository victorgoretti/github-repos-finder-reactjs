import React, { useEffect, useState, useCallback } from 'react';

import { NO_REPOSITORY_FOUND } from '../../Config/constants';
import UserInformationsCard from '../UserInformationsCard';
import RepositoriesAccordion from '../RepositoriesAccordion';
import UserGitHubService from '../../Services/UserGitHubService';
import PublicRepositoriesUserGitHubService from '../../Services/PublicRepositoriesUserGitHubService';
import StarredRepositoriesUserGitHubService from '../../Services/StarredRepositoriesUserGitHubService';
import Grid from '@material-ui/core/Grid';

const RepositoryTitle = (props) => {
    const { 
        userName, 
        hasUserRepositories, 
        hasStarredRepositories, 
        repositories, 
        showErrorRepositories 
    } = props;

    const repositoryAccordionTitle = hasUserRepositories
        ? `(${userName}) public repositories.`
        : null;
    const starredRepositoryAccordionTitle = hasStarredRepositories
        ? `(${userName}) starred repositories.`
        : null;

    if (repositories.length > 0) {
        return (
            <Grid container justify="center">
                <h4>
                    {repositoryAccordionTitle || starredRepositoryAccordionTitle}
                </h4>
            </Grid>   
        );
    }
    if (userName && showErrorRepositories 
        && (!hasUserRepositories || !hasStarredRepositories)) {
        return (
            <Grid container justify="center" className="error-message">
                {NO_REPOSITORY_FOUND}
            </Grid>
        );
    }
    return null;
};

const UserInformations = ({ userName }) => {
    const [user, setUser] = useState({});
    const [repositories, setRepositories] = useState([]);
    const [showErrorRepositories, setShowErrorRepositories] = useState(false);
    const [hasUserRepositories, setHasUserRepositories] = useState(false);
    const [hasStarredRepositories, setHasStarredRepositories] = useState(false);

    const memoizedFunction = useCallback(async () => {
        setUser(await UserGitHubService.getUserGitHubByUserName(userName));
        setRepositories([]);
        setHasUserRepositories(false);
        setHasStarredRepositories(false);
        setShowErrorRepositories(false);
    }, [userName]);

    useEffect(() => {
        memoizedFunction();
    }, [memoizedFunction]);

    const handleShowUserPublicRepositories = async () => {
        setRepositories(await PublicRepositoriesUserGitHubService
            .getPublicRepositoriesUserGitHubByUserName(userName));
        setHasUserRepositories(true);
        setHasStarredRepositories(false);
        setShowErrorRepositories(true);
    };

    const handleShowStarredRepositories = async () => {
        setRepositories(await StarredRepositoriesUserGitHubService
            .getStarredRepositoriesUserGitHubByUserName(userName));
        setHasUserRepositories(false);
        setHasStarredRepositories(true);
        setShowErrorRepositories(true);
    };

    return (
        <>
        <UserInformationsCard 
            userName={userName}
            user={user}
            onClickShowUserPublicRepositories={handleShowUserPublicRepositories}
            onClickShowStarredRepositories={handleShowStarredRepositories}
        />

        <RepositoryTitle 
            userName={userName}
            hasUserRepositories={hasUserRepositories}
            hasStarredRepositories={hasStarredRepositories}
            repositories={repositories}
            showErrorRepositories={showErrorRepositories}
        />

        <RepositoriesAccordion 
            repositories={repositories}
        />
        </>
    );
};

export default UserInformations;
