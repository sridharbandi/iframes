import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

class fvuysxcixg extends Component {

    state = {
        value: '#'
    }

    buttonHandler = () => {
        this.setState({ value: 'iFrame Two' })
    }

    render() {
        return (
            <Paper
                elevation={4}>
                <Grid container justify='center' spacing={0}>
                    <Grid item xs={10}>
                        <br />
                        <Typography component="h3" variant="headline">
                            Iframe two
                        </Typography>
                        <br />
                        <Button
                            onClick={this.buttonHandler}
                            variant="raised"
                            fullWidth
                            color="secondary">
                            Click Me
                        </Button>
                        <br />
                        <br />
                        <Typography component="h3">
                            {this.state.value}
                        </Typography>
                        <br />
                        <br />
                        <br />
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default fvuysxcixg;