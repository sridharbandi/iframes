import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const brettzbkar = () => (
    <Paper
        elevation={4}>
        <Grid container justify='center' spacing={0}>
            <Grid item xs={10}>
                <br />
                <Typography component="h3" variant="headline">
                    Iframe one
                </Typography>
                <TextField
                    id="firstname"
                    label="Firstname"
                    type="text"
                    margin="normal"
                    required
                    fullWidth
                />
                <TextField
                    id="lastname"
                    label="Lastname"
                    type="text"
                    margin="normal"
                    required
                    fullWidth
                />
                <br />
                <br />
                <br />
            </Grid>
        </Grid>
    </Paper>
);


export default brettzbkar;