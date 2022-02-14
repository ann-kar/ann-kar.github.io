import React from 'react';
import { Typography, Grid } from '@mui/material';
import { Button, Card, CardHeader, CardContent, CardActionArea, CardActions, CardMedia } from '@mui/material';
import setDesktop from '../assets/set-desktop-narrow.png';

import { Project } from "../components";
import { lastProject } from '../data/project-data';



const LastProject = ({ name, ...props }) => {
    return (
        <Card sx={{ display: 'flex', p: 0 }}>
            <Project data={lastProject} />
            <Card sx={{ display: {xs: 'none', lg: 'flex'}, minWidth: 420, p: 0, borderRadius: 0 }}>
                <CardActionArea href="https://ann-kar.github.io/set/" >
                    <CardMedia
                        sx={{ display: {xs: 'none', lg: 'inline-block' }, height: 360}}
                        style={{margin:0, padding:0}}
                        component="img"
                        image={setDesktop}
                        alt="set screenshot"
                    />
                </CardActionArea>
            </Card>
        </Card>
    )
}

export default LastProject
