import React from 'react';
import Button from '@material-ui/core/Button';
import DefaultLayout from './layouts/DefaultLayout';

const App = () => {
    return (
        <DefaultLayout className="App">
            <Button>Hello</Button>
        </DefaultLayout>
    );
};
// npx install-peerdeps --dev eslint-config-airbnb
export default App;
