import Home from '../Pages/Home';
import User from '../Pages/User';

const routes = [
    {
        key: 'Home',
        name: 'Home',
        path: '/',
        exact: true,
        component: Home,
    },
    {
        key: 'User',
        name: 'User',
        path: '/:userName',
        exact: false,
        component: User,
    },
];

export default routes;