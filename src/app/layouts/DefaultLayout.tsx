import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from '../components/Navigation';

const DefaultLayout = ({ children }: any) => {
    return (
        <Grid container>
            <Grid container item xs={12} justify="flex-start">
                <Navigation />
            </Grid>
            <Grid container item xs={12}>
                {children}
            </Grid>
        </Grid>
    );
};

export default DefaultLayout;
