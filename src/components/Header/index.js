import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg'
import './style.css'

export const Header = () => {
    return (
        <header className="App-header App-wrap">
            {/* <div className="link-container"> */}
            <NavLink className="logo" exact to="/">
            <img src={logo} className="App-logo" alt="logo" />
            </NavLink>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName="active" exact to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" exact to="/about">
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {/* </div> */}
        </header>
    )
}