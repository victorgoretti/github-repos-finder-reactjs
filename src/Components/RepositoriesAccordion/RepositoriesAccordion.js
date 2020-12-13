import React from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { HiOutlineExternalLink } from 'react-icons/hi';
import './index.css';

const RepositoriesAccordion = ( {repositories} ) => {
    const repositoriesList = repositories?.map((repository) => {
        const {
            name,
            description,
            forks,
            homepage,
            language,
            htmlUrl,
            stargazersCount,
            watchersCount,
            openIssuesCount,
            createdAt,
            updatedAt,
            pushedAt
        } = repository;
        const dateOfCreation = new Date(createdAt);
        const dateOfUpdate = new Date(updatedAt);
        const dateOfPush = new Date(pushedAt);

        return (
            <Grid container justify="center" className="container-accordion-repositories">
                <Grid item xs={4}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>{name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CardContent>
                                <strong>Description: </strong>
                                {description || '-'}
                                <br />
                                <strong>Html Url: </strong>
                                {(
                                    <>
                                        <a 
                                            href={htmlUrl} 
                                            target="_blank" 
                                            rel="noreferrer"
                                        >
                                            {htmlUrl}
                                            <HiOutlineExternalLink />
                                        </a>
                                    </>
                                ) || '-'}
                                <br />
                                <strong>Forks: </strong>
                                {(
                                    <>
                                        <a 
                                            href={`${htmlUrl}/network/members`} 
                                            target="_blank" 
                                            rel="noreferrer"
                                        >
                                            {forks}
                                            <HiOutlineExternalLink />
                                        </a>
                                    </>
                                ) || '-'}
                                <br />
                                <strong>Homepage: </strong>
                                {(
                                    <>
                                        <a 
                                            href={homepage} 
                                            target="_blank" 
                                            rel="noreferrer"
                                        >
                                            {homepage}
                                            <HiOutlineExternalLink />
                                        </a>
                                    </>
                                ) || '-'}
                                <br />
                                <strong>Language: </strong>
                                {language}
                                <br />
                                <strong>Stargazers: </strong>
                                {(
                                    <>
                                        <a 
                                            href={`${htmlUrl}/stargazers`} 
                                            target="_blank" 
                                            rel="noreferrer"
                                        >
                                            {stargazersCount}
                                            <HiOutlineExternalLink />
                                        </a>
                                    </>
                                ) || '-'}
                                <br />
                                <strong>Watchers: </strong>
                                {(
                                    <>
                                        <a 
                                            href={`${htmlUrl}/watchers`}
                                            target="_blank" 
                                            rel="noreferrer"
                                        >
                                            {watchersCount}
                                            <HiOutlineExternalLink />
                                        </a>
                                    </>
                                ) || '-'}
                                <br />
                                <strong>Open Issues: </strong>
                                {(
                                    <>
                                        <a 
                                            href={`${htmlUrl}/issues`}
                                            target="_blank" 
                                            rel="noreferrer"
                                        >
                                            {openIssuesCount}
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
                                <time dateTime={dateOfUpdate}>
                                    {dateOfUpdate.toUTCString()}
                                </time>
                                <br />
                                <strong>Pushed At: </strong>
                                <time dateTime={dateOfPush}>
                                    {dateOfPush.toUTCString()}
                                </time>
                                <br />
                            </CardContent>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        );
    });
    return (
        <>
            {repositoriesList}
        </>
    );
}

export default RepositoriesAccordion;