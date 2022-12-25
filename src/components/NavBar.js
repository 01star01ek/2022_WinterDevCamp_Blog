import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-success">
        <div className="container">
            <Link className="navbar-brand" to="/">새싹일기</Link>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/blogs" exact>나의 로그</NavLink>
                </li>
              </ul>
        </div>
        </nav>
    );
}

export default NavBar;