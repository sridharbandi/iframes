import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const header = () => (
    <AppBar position = 'sticky' color = 'secondary'>
        <Toolbar>
            <Typography variant="title" color="inherit">
                iFrames Demo
            </Typography>
        </Toolbar>
    </AppBar>
);

export default header;