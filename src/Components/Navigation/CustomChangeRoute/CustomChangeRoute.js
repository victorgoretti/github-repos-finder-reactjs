import React from 'react';

import { Switch } from 'react-router-dom';
import routes from '../../../Routes/routes';
import createCustomRoute from '../CustomRoute';

const CustomChangeRoute = () => {
    const customRoutesList = routes.map((route) => createCustomRoute(route));

    return (
        <main>
            <Switch>
                {customRoutesList}
            </Switch>
        </main>
    );
};

export default CustomChangeRoute;