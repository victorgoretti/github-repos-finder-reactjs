import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory, NavLink } from 'react-router-dom';
import './index.css';

const NavigationBar = () => {
    const history = useHistory();
    const [userName, setUserName] = useState('');

    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    };

    const onClickSearchUser = () => {
        history.push(userName);
    };
    
    return (
        <div>
            <AppBar position="static">
                <Toolbar className="toolbar-navigation-github">
                    <Grid container justify="center" spacing={0}>
                        <Grid item xs={1}/>
                        <Grid item xs={3}>
                            <NavLink className="link-home-page" to="/">
                                <Typography variant="h6" noWrap>
                                    GitHub Finder
                                </Typography>
                            </NavLink>
                        </Grid>
                        <Grid item xs={1}/>
                        <Grid item xs={2}>
                            <div className="div-search-user">
                                <InputBase
                                    className="search-user"
                                    placeholder="User…"
                                    onChange={onChangeUserName}
                                    onKeyPress={(e) => ((e.key === 'Enter' && userName) ? onClickSearchUser() : null)}
                                />
                                <IconButton 
                                    className="button-search-user" 
                                    aria-label="search"
                                    disabled={!userName}
                                    onClick={onClickSearchUser}
                                >
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