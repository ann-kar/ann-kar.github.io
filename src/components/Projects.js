import React from 'react';
import { Grid } from '@mui/material';

import { Project, LastProject } from "../components";
import { projects } from '../data/project-data';

const Projects = () => {

    const renderProjects = () => {
        return projects.map(project => {
            return (
                <Grid item xs={12} sm={10} md={6} lg={4}>
                    <Project data={project} />
                </Grid>
            )
        })
    };

    return (
        <Grid container sx={{ justifyContent: 'center' }} spacing={3}>
            <Grid item xs={12} sm={10} md={6} lg={12}>
                <LastProject />
            </Grid>
            {renderProjects()}
        </Grid>
    );
}

export default Projects;
