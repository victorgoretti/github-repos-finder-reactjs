import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './index.css';

const RepositoriesAccordion = () => {

  return (
    <Grid container justify="center" className="container-accordion-repositories">
        <Grid item xs={5}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Nome do repositorio</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CardContent>
                            <strong>Description: </strong>
                            {"localizacao"}
                            <br />
                            <strong>Html Url: </strong>
                            {"localizacao"}
                            <br />
                            <strong>Forks: </strong>
                            {"localizacao"}
                            <br />
                            <strong>Homepage: </strong>
                            {"localizacao"}
                            <br />
                            <strong>Language: </strong>
                            {"localizacao"}
                            <br />
                            <strong>Stargazers: </strong>
                            {"localizacao"}
                            <br />
                            <strong>Watchers: </strong>
                            {"localizacao"}
                            <br />
                            <strong>Open Issues: </strong>
                            {"localizacao"}
                            <br />
                            <strong>Created At: </strong>
                            {"localizacao"}
                            <br />
                            <strong>Updated At: </strong>
                            {"localizacao"}
                            <br />
                            <strong>Created At: </strong>
                            {"localizacao"}
                            <br />
                            <strong>Pushed At: </strong>
                            {"localizacao"}
                            <br />
                        </CardContent>
                </AccordionDetails>
            </Accordion>
        </Grid>
    </Grid>
  );
}

export default RepositoriesAccordion;