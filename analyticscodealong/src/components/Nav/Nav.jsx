import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Navbar = ({ navItems }) => {
    return (
        <nav>
            <ul>
                {navItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={item.link}> {item.name} </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}


Navbar.propTypes = {
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};
