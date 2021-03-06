import React from 'react';

import Grid from '@material-ui/core/Grid';
import './index.css';

const Home = () => (
    <Grid container justify="center" className="container-home-page">
        <section>
            <header>
                <h2>Project:</h2>
            </header>
            <p>
                <strong>Name: </strong>
                GitHub Finder
            </p>
            <p>
                <strong>Objective: </strong>
                Search for information about a GitHub's user and public and starred 
                repositories of this user.
            </p>
            <p>
                <strong>What to do? </strong>
                Type the username of GitHub in the search field and than click in the search
                button.
            </p>
            <p>
                <strong>Developed by: </strong>
                Victor Goretti
            </p>
        </section>
    </Grid>
);

export default Home;
