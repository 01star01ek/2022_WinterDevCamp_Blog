import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-success">
        <div className="container">
            <Link className="navbar-brand" to="/">Home</Link>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink ativeClassName ="active" className="nav-link" aria-current="page" to="/blogs" exact>Blogs</NavLink>
                </li>
              </ul>
        </div>
        </nav>
    );
}

export default NavBar;