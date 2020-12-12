import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import StarIcon from '@material-ui/icons/Star';
import FolderIcon from '@material-ui/icons/Folder';
import './index.css';

const UserInformationsCard = () => {
    return (
        <Grid container className="container-informations-card" justify="center">
            <Grid item xs={5}>
                <Card>
                    <CardHeader
                        className="name-user-title" 
                        title="Nome da pessoa"
                        titleTypographyProps={{ variant: "h5", component: "span" }}
                        avatar={
                            <Avatar aria-label="recipe">
                                R
                            </Avatar>
                        }
                    />
                    <CardContent>
                        <strong>Bio: </strong>
                        {"localizacao"}
                        <br />
                        <strong>Company: </strong>
                        {"localizacao"}
                        <br />
                        <strong>Blog: </strong>
                        {"localizacao"}
                        <br />
                        <strong>Location: </strong>
                        {"localizacao"}
                        <br />
                        <strong>E-mail: </strong>
                        {"localizacao"}
                        <br />
                        <strong>Hireable: </strong>
                        {"localizacao"}
                        <br />
                        <strong>Twitter Username: </strong>
                        {"localizacao"}
                        <br />
                        <strong>Public Repos: </strong>
                        {"localizacao"}
                        <br />
                        <strong>Followers: </strong>
                        {"localizacao"}
                        <br />
                        <strong>Following: </strong>
                        {"localizacao"}
                        <br />
                        <strong>Created At: </strong>
                        {"localizacao"}
                        <br />
                        <strong>Updated At: </strong>
                        {"localizacao"}
                        <br />
                    </CardContent>
                    <Divider />
                    <Grid container justify="flex-end">
                        <CardActions justify="center">
                            <BottomNavigation
                                
                                // value={value}
                                // onChange={(event, newValue) => {
                                //     setValue(newValue);
                                // }}
                                showLabels
                                // className={classes.root}
                            >
                                <BottomNavigationAction id="navegation-button-repositories" label="Repositories" icon={<FolderIcon fontSize="large"/>} />
                                <BottomNavigationAction id="navegation-button-starred" label="Starred" icon={<StarIcon fontSize="large"/>} />
                            </BottomNavigation>
                        </CardActions>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    );
};

export default UserInformationsCard;