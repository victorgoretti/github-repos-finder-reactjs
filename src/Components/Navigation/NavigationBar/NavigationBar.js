import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './index.css';

const NavigationBar = () => {
    
    return (
        <div>
            <AppBar position="static">
                <Toolbar className="toolbar-navigation-github">
                    <Grid container justify="center" xs={11} spacing={2}>
                        <Grid item xs={2}/>
                        <Grid item xs={3}>
                            <Typography variant="h6" noWrap>
                                GitHub Finder
                            </Typography>
                        </Grid>
                        <Grid item xs={1}/>
                        <Grid item xs={2}>
                            <div className="div-search-user">
                                <InputBase
                                    className="search-user"
                                    placeholder="User…"
                                />
                                <IconButton className="button-search-user" type="submit" aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavigationBar ;