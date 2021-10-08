import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {RoutesEnum} from "../../constants";
import {NavBarStyle} from "./nav-bar.style";
import {MdClose, MdMenu} from "react-icons/all";

export default function NavBar() {
    const [showNav, setShowNav] = useState(false)
    return (
        <NavBarStyle>
            <div className={'mobile-menu-icon'}
                 role={'button'}
                 onClick={() => setShowNav(!showNav)}
                 onKeyDown={() => setShowNav(!showNav)}
                 tabIndex={0}><MdMenu/></div>
            <ul className={!showNav ? 'nav-items hide-item' : 'nav-items'}>
                <div className={'nav-close-icon'}
                     role={'button'}
                     onClick={() => setShowNav(!showNav)}
                     onKeyDown={() => setShowNav(!showNav)}
                     tabIndex={0}><MdClose/></div>
                <li><NavLink to={RoutesEnum.HOME} exact
                             role={'button'}
                             onClick={() => setShowNav(!showNav)}
                             onKeyDown={() => setShowNav(!showNav)}
                             tabIndex={0}>Home</NavLink></li>
                <li><NavLink to={RoutesEnum.ABOUT}
                             role={'button'}
                             onClick={() => setShowNav(!showNav)}
                             onKeyDown={() => setShowNav(!showNav)}
                             tabIndex={0}>About</NavLink></li>
                <li><NavLink to={RoutesEnum.PROJECTS}
                             role={'button'}
                             onClick={() => setShowNav(!showNav)}
                             onKeyDown={() => setShowNav(!showNav)}
                             tabIndex={0}>Projects</NavLink></li>
                <li><NavLink to={RoutesEnum.CONTACTS}
                             role={'button'}
                             onClick={() => setShowNav(!showNav)}
                             onKeyDown={() => setShowNav(!showNav)}
                             tabIndex={0}>Contacts</NavLink></li>
            </ul>
        </NavBarStyle>
    );
}
