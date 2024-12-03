import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { MouseContext } from '../../context/mouseContext';

const Navbar = () => {
    const pathname = useLocation().pathname;
    const { cursorChangeHandler } = useContext(MouseContext);
    return (
        <React.Fragment>
            {/* Header-section Start */}
            <div className="header-holder services-section text-center animate__animated animate__zoomIn">
                <div className="navigation">
                    <ul className="nav">
                        <li className={`list ${pathname === '/' ? "active" : ''}`} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
                            <NavLink to="/" className="active">
                                <span className="icon">
                                    <i className="fas fa-house-user"></i>
                                </span>
                                <div className="social__tooltip social__tooltip-bottom">Home</div>
                            </NavLink>
                        </li>
                        <li className={`list ${pathname === '/about' ? "active" : ''}`} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
                            <NavLink to='/about'>
                                <span className="icon">
                                    <i className="fas fa-user-alt"></i>
                                </span>
                                <div className="social__tooltip social__tooltip-bottom">About</div>
                            </NavLink>
                        </li>
                        <li className={`list ${pathname === '/portfolio' ? "active" : ''}`} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
                            <NavLink to='/portfolio'>
                                <span className="icon">
                                    <i className="fas fa-briefcase"></i>
                                </span>
                                <div className="social__tooltip social__tooltip-bottom">Portfolio</div>
                            </NavLink>
                        </li>
                        <li className={`list ${pathname === '/blog' ? "active" : ''}`} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
                            <NavLink to='/blog'>
                                <span className="icon">
                                    <i className="fas fa-blog"></i>
                                </span>
                                <div className="social__tooltip social__tooltip-bottom">Blog</div>
                            </NavLink>
                        </li>
                        <li className={`list ${pathname === '/contact' ? "active" : ''}`} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
                            <NavLink to='/contact'>
                                <span className="icon">
                                    <i className="fas fa-phone-alt"></i>
                                </span>
                                <div className="social__tooltip social__tooltip-bottom">Contact</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Header-section End */}
        </React.Fragment>
    )
}

export default Navbar