import {Link} from 'react-router-dom';
  

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="/">Home</Link>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link classNamr="nav-link active" aria-current ="page" to="/blogs" style={{textDecoration : 'none'}}>Blogs</Link>
                </li>
              </ul>
        </div>
        </nav>
    );
}

export default NavBar;