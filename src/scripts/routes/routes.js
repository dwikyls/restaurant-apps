import Home from '../views/pages/home';
import About from '../views/pages/about';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/like';

const routes = {
    '/': Home,
    '/about': About,
    '/detail/:id': Detail,
    '/like': Favorite,
};

export default routes;