import React from 'react';

import { NO_USER_FOUND } from '../../Config/constants';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import StarIcon from '@material-ui/icons/Star';
import FolderIcon from '@material-ui/icons/Folder';
import { HiOutlineExternalLink } from 'react-icons/hi';
import './index.css';

const UserInformationsCard = ({
    userName,
    user: {
        login,
        name,
        avatarUrl,
        htmlUrl,
        company,
        blog,
        location,
        email,
        hireable,
        bio,
        twitterUserName,
        publicRepos,
        followers,
        following,
        createdAt,
        updatedAt,
        status
    },
    onClickShowUserPublicRepositories,
    onClickShowStarredRepositories,
 }) => {
    const dateOfCreation = new Date(createdAt);
    const dateOfUptade = new Date(updatedAt);

    if (!status) {
        return (
            <Grid container justify="center" className="container-loader-page-user-informations">
                <CircularProgress id="loader-page-user-informations"/>
            </Grid>
        );
    } else if (!login) {
        return (
            <Grid container justify="center" className="error-message">
                {NO_USER_FOUND(userName)}
            </Grid>
        );
    } else {
        return (
            <Grid container className="container-informations-card" justify="center">
                <Grid item xs={4}>
                    <Card>
                        <CardHeader
                            className="name-user-title" 
                            title={`${name} (${login})`}
                            titleTypographyProps={{ variant: "h5", component: "span" }}
                            subheader={
                                <a 
                                    href={htmlUrl} 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    {htmlUrl}
                                    <HiOutlineExternalLink />
                                </a>
                            }
                            avatar={
                                <Avatar id="avatar-user" src={`${avatarUrl}`} />
                            }
                        />

                        <CardContent>
                            <strong>Bio: </strong>
                            {(bio && <blockquote>{bio}</blockquote>) || '-'}
                            <br />
                            <strong>Company: </strong>
                            {company || '-'}
                            <br />
                            <strong>Blog: </strong>
                            {(
                                <>
                                    <a 
                                        href={blog} 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        {blog}
                                        <HiOutlineExternalLink />
                                    </a>
                                </>
                            ) || '-'}
                            <br />
                            <strong>Location: </strong>
                            {location || '-'}
                            <br />
                            <strong>E-mail: </strong>
                            {email || '-'}
                            <br />
                            <strong>Hireable: </strong>
                            {hireable || '-'}
                            <br />
                            <strong>Twitter Username: </strong>
                            {twitterUserName || '-'}
                            <br />
                            <strong>Public Repos: </strong>
                            {(
                                <>
                                    <a
                                        href={`https://github.com/${login}?tab=repositories`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {publicRepos}
                                        <HiOutlineExternalLink />
                                    </a>
                                </>
                            ) || '-'}
                            <br />
                            <strong>Followers: </strong>
                            {(
                                <>
                                    <a
                                        href={`https://github.com/${login}?tab=followers`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {followers}
                                        <HiOutlineExternalLink />
                                    </a>
                                </>
                            ) || '-'}
                            <br />
                            <strong>Following: </strong>
                            {(
                                <>
                                    <a
                                        href={`https://github.com/${login}?tab=following`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {following}
                                        <HiOutlineExternalLink />
                                    </a>
                                </>
                            ) || '-'}
                            <br />
                            <strong>Created At: </strong>
                            <time dateTime={dateOfCreation}>
                                {dateOfCreation.toUTCString()}
                            </time>
                            <br />
                            <strong>Updated At: </strong>
                            <time dateTime={dateOfUptade}>
                                {dateOfUptade.toUTCString()}
                            </time>
                            <br />
                        </CardContent>
                        <Divider />
                        <Grid container justify="flex-end">
                            <CardActions justify="center">
                                <BottomNavigation showLabels>
                                    <BottomNavigationAction 
                                        id="navegation-button-repositories" 
                                        label="REPOSITORIES" 
                                        icon={<FolderIcon fontSize="large"/>} 
                                        onClick={onClickShowUserPublicRepositories}
                                    />
                                    <BottomNavigationAction 
                                        id="navegation-button-starred" 
                                        label="STARRED" 
                                        icon={<StarIcon fontSize="large"/>}
                                        onClick={onClickShowStarredRepositories} 
                                    />
                                </BottomNavigation>
                            </CardActions>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        );
    };
};

export default UserInformationsCard;