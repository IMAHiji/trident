import * as React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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

const useStyles = makeStyles(() => {
    return {
        navListWrapper: {
            display: 'flex',
            flexDirection: 'row',
        },
    };
});

const Navigation = () => {
    const { navListWrapper } = useStyles();
    return (
        <Grid component="nav" container item xs={12} direction="row">
            <List className={navListWrapper}>
                {routes.map(({ route, name }: NavRoute) => (
                    <ListItem>
                        <Link to={route}>{name}</Link>
                    </ListItem>
                ))}
            </List>
        </Grid>
    );
};

export default Navigation;
