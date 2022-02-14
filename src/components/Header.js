import React from 'react';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';

import {HeaderList} from '../components';

const HeaderWrapper = styled('header')(({ theme }) => ({
    color: theme.palette.greys.grey200,
    maxWidth: '100vw',
}));

const Header = () => {
    return (
        <HeaderWrapper sx={{ pl: 2, py: {xs: 3, md: 5} }}>
            <Typography variant="h1">
                anna karpiuk
            </Typography>
            <HeaderList />
        </HeaderWrapper>
    )
}

export default Header