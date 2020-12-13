import React, { useEffect, useState, useCallback } from 'react';

import { NO_REPOSITORY_FOUND } from '../../Config/constants';
import UserInformationsCard from '../UserInformationsCard';
import RepositoriesAccordion from '../RepositoriesAccordion';
import Grid from '@material-ui/core/Grid';

const RepositoryTitle = (props) => {
    const { userName, hasUserRepositories, hasStarredRepositories, repositories } = props;

    const repositoryAccordionTitle = hasUserRepositories
        ? `'${userName}' public repositories.`
        : null;
    const starredRepositoryAccordionTitle = hasStarredRepositories
        ? `'${userName}' repositories order by starred.`
        : null;

    if (repositories.length > 0) {
        return <h5>{repositoryAccordionTitle || starredRepositoryAccordionTitle}</h5>;
    }
    if (userName && (!hasUserRepositories || !hasStarredRepositories)) {
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
    const [hasUserRepositories, setHasUserRepositories] = useState(false);
    const [hasStarredRepositories, setHasStarredRepositories] = useState(false);

    const memoizedFunction = useCallback(async () => {
        // setUser(await githubUserService.getByUsername(userName));
        setRepositories([]);
        setHasUserRepositories(false);
        setHasStarredRepositories(false);
    }, [userName]);

    useEffect(() => {
        memoizedFunction();
    }, [memoizedFunction]);

    const handleShowUserPublicRepositories = async () => {
        // setRepositories(await githubUserReposService.getByUsername(userName));
        setHasUserRepositories(true);
        setHasStarredRepositories(false);
    };

    const handleShowStarredRepositories = async () => {
        // setRepositories(await githubStarredReposService.getByUsername(userName));
        setHasUserRepositories(false);
        setHasStarredRepositories(true);
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
        />

        <RepositoriesAccordion 
            repositories={repositories}
        />
        </>
    );
};

export default UserInformations;
