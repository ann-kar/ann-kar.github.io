import React from 'react';
import { Card, CardActionArea, CardMedia } from '@mui/material';

import { Project } from "../components";
import { lastProject } from '../data/project-data';
import setDesktop from '../assets/set-desktop-narrow.png';

const LastProject = (props) => {
    return (
        <Card sx={{ display: 'flex', p: 0, height: {lg: 360} }}>
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
