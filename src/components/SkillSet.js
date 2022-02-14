import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const SkillSet = ({ title, skillset }) => {
    return (
        <>
            <Typography component="h2" variant={"h2"} my={4}>{title}</Typography>
            <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={2}>
                {skillset.map(skill => {
                    return (
                        <Box sx={{ width: { xs: '30%', sm: '20%', md: 130, lg: 140 }, textAlign: 'center' }}>
                            <img style={{ filter: 'grayscale(100%)' }} src={skill.icon} width="64" height="64" />
                            <Typography sx={{ mb: 3 }} component="h3">{skill.name}</Typography>
                        </Box>
                    )
                })}
            </Stack>
        </>
    )
}

export default SkillSet;
