import React from 'react';
import { Grid, Container } from '@mui/material';

import Project from "../components/Project";
import LastProject from "../components/LastProject";
import { projects } from '../data/project-data';

const Projects = () => {

    const renderProjects = () => {
        return projects.map(project => {
            return (
                <Grid item xs={4}>
                    <Project data={project} />
                </Grid>
            )
        })
    };

    return (
        <Container maxwidth="80%">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <LastProject />
                </Grid>
                {renderProjects()}
            </Grid>
        </Container>
    );
}

export default Projects;
