import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

export type NavRoute = {
    name: string;
    route: string;
};

const routes: NavRoute[] = [
    {
        name: 'Home',
        route: '/',
    },
    {
        name: 'UnProtected',
        route: '/unprotected',
    },
    {
        name: 'Protected',
        route: '/protected',
    },
];

const Navigation = () => {
    return (
        <Grid component="nav">
            {routes.map(({ route, name }: NavRoute) => (
                <Link to={route}>{name}</Link>
            ))}
        </Grid>
    );
};

export default Navigation;
