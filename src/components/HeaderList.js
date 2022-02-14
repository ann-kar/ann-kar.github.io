import React from 'react';
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const HeaderList = () => {

    return (
        <Typography variant="body">
            <List style={{ display: 'flex', justify: 'flex-start', flexDirection: 'row', padding: 0 }}>
                <ListItem sx={{ pl: 1, pr: 1, width: 'initial' }}>
                     Front-end dev <Typography component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>&nbsp;with TypeScript and React</Typography></ListItem>
                <Divider flexItem />
                <ListItem sx={{ px: 1 }} style={{ width: 'initial' }}>
                    <Link color="inherit" underline="none" href="#skillSection">skills</Link>
                </ListItem >
                <Divider flexItem />
                <ListItem style={{ width: 'initial' }}>
                    <Link color="inherit" underline="none" href="#aboutSection">about</Link>
                </ListItem >
            </List>
        </Typography>
    )
}

export default HeaderList;