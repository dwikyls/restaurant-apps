import Home from '../views/pages/home';
import About from '../views/pages/about';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
    '/': Home, // default page
    '/home': Home,
    '/about': About,
    '/detail/:id': Detail,
    '/favorite': Favorite,
};

export default routes;
