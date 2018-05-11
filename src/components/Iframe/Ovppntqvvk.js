import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Iframe from 'react-iframe';

const ovppntqvvk = () => (
    <Paper
        elevation={4}>
        <Grid container justify='center' spacing={0}>
            <Grid item xs={10}>
                <br />
                <Typography component="h3" variant="headline">
                    Parent iframe
                </Typography>
                <TextField
                    id="text-id"
                    label="Text"
                    type="text"
                    margin="normal"
                    required
                    fullWidth
                />
                <br />
                <br />
                <br />
                <Iframe url={process.env.PUBLIC_URL + 'ndrljrwptz'}
                    id="frame-four-id"
                    height="202px"
                    display="initial"
                    position="relative"
                    allowFullScreen />
                <br />
                <br />
            </Grid>
        </Grid>
    </Paper>
);


export default ovppntqvvk;