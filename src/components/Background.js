import React from 'react';
import styled from '@mui/system/styled';
import svg from '../data/noise.svg';

const BackgroundStyled = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    minWidth: '80rem',
    filter: 'contrast(110%) brightness(125%)',
    background:
        `radial-gradient(farthest-side at 10px 100px, rgba(255, 205, 105,0.9), rgba(255, 155, 155,0.7), rgba(255, 255, 255,1)),
        url('${svg}')`,
    filter: 'hue-rotate(5deg)',
})
);

const Background = () => {
    return (
        <BackgroundStyled sx={{ minHeight: { xs: '160rem', md: '100rem' } }} maxwidth="100%" />
    )
}

export default Background