import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Iframe from 'react-iframe';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Header from '../Header/Header';

class Frame extends Component {

    render() {
        return (
            <Aux>
                <Header />
                <br />
                <Grid container justify='center' spacing={0}>
                    <Grid item xs={10} sm={8}>
                        <Iframe url={process.env.PUBLIC_URL + '/brettzbkar'}
                            id="frame-one-id"
                            height="250px"
                            display="initial"
                            position="relative"
                            allowFullScreen />
                        <Iframe url={process.env.PUBLIC_URL + '/fvuysxcixg'}
                            id="frame-two-id"
                            height="220px"
                            display="initial"
                            position="relative"
                            allowFullScreen />
                        <Typography style={{color: 'grey'}}>
                            Iframe with in iframe example
                        </Typography>
                        <Iframe url={process.env.PUBLIC_URL + '/ovppntqvvk'}
                            id="frame-three-id"
                            height="410px"
                            display="initial"
                            position="relative"
                            allowFullScreen />
                    </Grid>
                </Grid>
            </Aux>
        );
    }
}

export default Frame;