import React from 'react';
import { Box, Chip, Container, Typography } from '@mui/material';
import { Button, Card, CardContent, CardHeader } from '@mui/material';

const Project = ({ data }) => {
    return (
        <Card sx={{ minWidth: 270, p: 0, display: 'flex', flexWrap: 'wrap', minHeight: {xs: 0, md: '23.5rem', lg: 'unset' }}}>
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
                <Typography component="p" variant="body" color="text.secondary"
                sx={{ my: 2, mx: 1 }}>
                    {data.description}
                </Typography>
            </CardContent>
            <Container sx={{ alignSelf: 'flex-end', display: 'flex', px: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                {data.demo && <Button variant="contained" color="secondary" href={data.demo}>DEMO</Button>}
                {data.code && <Button variant="contained" color="secondary" href={data.code}>CODE</Button>}
            </Container>
        </Card>
    )
}

export default Project