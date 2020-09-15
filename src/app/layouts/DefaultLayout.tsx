import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from '../components/Navigation';

const DefaultLayout = ({ children }: any) => {
    return (
        <Grid container>
            <Navigation />
            {children}
        </Grid>
    );
};

export default DefaultLayout;
