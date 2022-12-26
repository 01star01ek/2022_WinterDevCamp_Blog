import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import ShowPages from './pages/ShowPages';
import MasterPage from './pages/MasterPage';

const routes = [
    {path : '/', component : HomePage },
    {path : '/master', component : MasterPage},
    {path : '/blogs', component : ListPage},
    {path : '/blogs/create', component : CreatePage},
    {path : '/blogs/:id/edit', component : EditPage},
    {path : '/blogs/:id', component : ShowPages}
    ];
    
export default routes;