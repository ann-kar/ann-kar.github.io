import React from 'react';
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const HeaderList = () => {
    return (
        <Typography variant="h6">
            <List style={{ display: 'flex', justify: 'flex-start', flexDirection: 'row', padding: 0 }}>
                <ListItem style={{ width: 'initial' }} sx={{ px: 1 }}>Front-end dev:</ListItem>
                <ListItem style={{ width: 'initial' }}>TypeScript</ListItem>
                <Divider orientation="vertical" flexItem />
                <ListItem style={{ width: 'initial' }}>React</ListItem>
                <Divider orientation="vertical" flexItem />
                <ListItem style={{ width: 'initial' }}>Express.js</ListItem>
                <Divider orientation="vertical" flexItem />
                <ListItem style={{ width: 'initial' }}>PostgreSQL</ListItem>
                <Divider orientation="vertical" flexItem />
                <ListItem style={{ width: 'initial' }}>Material UI</ListItem>
                <Divider orientation="vertical" flexItem />
                <ListItem style={{ width: 'initial' }}>SASS</ListItem>
                <Divider orientation="vertical" flexItem />
                <ListItem style={{ width: 'initial' }}>Bootstrap</ListItem>
                <Divider orientation="vertical" flexItem />
                <ListItem style={{ width: 'initial' }} button={true}>see more</ListItem>
            </List>
        </Typography>
    )
}

export default HeaderList;