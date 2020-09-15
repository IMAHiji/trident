import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import DefaultLayout from '../layouts/DefaultLayout';

const UnProtected = () => {
    return (
        <DefaultLayout>
            <Typography variant="body1">I am UnProtected</Typography>
        </DefaultLayout>
    );
};

export default UnProtected;
