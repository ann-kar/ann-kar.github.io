import React from 'react';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';

import {HeaderList} from '../components';

const HeaderWrapper = styled('header')(({ theme }) => ({
    color: theme.palette.greys.grey200
}));

const Header = () => {
    return (
        <HeaderWrapper sx={{ mx: 2, py: 5 }}>
            <Typography variant="h1">
                anna karpiuk
            </Typography>
            <HeaderList />
        </HeaderWrapper>
    )
}

export default Header