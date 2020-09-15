import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import DefaultLayout from '../layouts/DefaultLayout';

const Protected = () => {
    return (
        <DefaultLayout>
            <Typography variant="body1">I am Protected</Typography>
        </DefaultLayout>
    );
};

export default Protected;
