import React from 'react';
import { Typography, Box, Stack, Divider, ListItem, Chip } from '@mui/material';
import { Button, Card, CardHeader, CardContent, CardActionArea, CardActions } from '@mui/material';

const Project = ({ name, data, ...props }) => {
    return (
        <Card sx={{ minHeight: 350 }}>
            <CardHeader
                sx={{ ml: 1, pb: 0, pl: 2 }}
                title={data.name}
                component="h2"
                titleTypographyProps={{ variant: "h2" }} />
            <CardContent sx={{ pt: 1 }}>

                    <Box sx={{ my: 1, display: 'flex', flexWrap: 'wrap' }}>
                        {(data.technologies).map(tech => (
                            <Chip label={tech} />
                        ))}
                    </Box>
               
                <Typography component="p" variant="body" color="text.secondary" sx={{ my: 2, mx: 1 }}>
                    {data.description}
                </Typography>
            </CardContent>
            {data.demo && <Button variant="contained" color="warning" href={data.demo}>DEMO</Button>}
            {data.code && <Button variant="contained" color="warning" href={data.code}>CODE</Button>}
        </Card>
    )
}

export default Project