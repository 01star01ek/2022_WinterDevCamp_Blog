import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-success">
        <div className="container">
            <Link className="navbar-brand" to="/">새싹일기</Link>
              <ul className="navbar-nav" style  = {{
                display : 'flex',
                flexDirection : 'row',
                alignItems : 'center',
                
              }
              }>
                <div className='border border-light rounded'>
                <li className="nav-item" style = {{
                    paddingLeft : '10px',
                    paddingRight : '10px'
                  }
                }>
                  <NavLink className="nav-link" aria-current="page" to="/blogs" exact>로그 보기</NavLink>
                </li>
                </div>
                <div className='border border-light rounded' style  = {{
                  marginLeft : '8px',
                  paddingLeft : '10px',
                  paddingRight : '10px'
                }}>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/master" exact>나의 로그</NavLink>
                </li>
                </div>
              </ul>
        </div>
        </nav>
    );
}

export default NavBar;