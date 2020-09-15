import * as React from 'react';
import Grid from '@material-ui/core/Grid';

const DefaultLayout = ({ children }: any) => {
    return <Grid container>{children}</Grid>;
};

export default DefaultLayout;
