import config from '~/config';
import Client from '~/pages/client';
import Search from '~/pages/Search';
import Collection from '~/pages/Collection';
const publicRoutes = [
    { path: config.routes.home, component: Client },
    { path: config.routes.search, component: Search },
    { path: config.routes.collection, component: Collection },
];

export { publicRoutes };
