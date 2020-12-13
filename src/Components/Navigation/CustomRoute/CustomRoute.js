import React from 'react';

import { Route } from 'react-router-dom';

const CustomRoute = ({ route }) => {
    const { component, path, exact, key } = route;
    
    return <Route exact={exact} path={path} component={component} key={key} />;
};

const createCustomRoute = (route) => CustomRoute({ route });

export default createCustomRoute;
