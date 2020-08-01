import { Link } from 'gatsby';
import React from 'react';

const NavLinks = () => {
    const [active, setActive] = React.useState(false);
    function activateDropdown() {
        if (!active) setActive(true);
    }
    function deactivateDropdown() {
        if (active) setActive(false);
    }
    return (
        <ul className='nav-links'>
            <li>
                <Link to='/' activeClassName='active-link'>
                    HOME
                </Link>
            </li>
            <li>
                <Link
                    to='/blog'
                    activeClassName='active-link'
                    partiallyActive={true}>
                    BLOG
                </Link>
            </li>
            <li>
                <Link
                    to='/events'
                    activeClassName='active-link'
                    partiallyActive={true}>
                    EVENTS
                </Link>
            </li>
            <li>
                <Link
                    to='/members'
                    activeClassName='active-link'
                    partiallyActive={true}>
                    TROOP
                </Link>
            </li>
            <li>
                <Link
                    to='/about'
                    activeClassName='active-link'
                    partiallyActive={true}>
                    ABOUT
                </Link>
            </li>
        
            <div role="button" onMouseLeave={deactivateDropdown} tabIndex={0}>
                <button className='accordion' onMouseEnter={activateDropdown}>
                    <div className={active ? 'button activate-button':'button'} />
                </button>
                <NestedList
                    activateStatus={
                        active ? 'nestedList activate-nestedList' : 'nestedList'
                    }
                />
            </div>
        </ul>
    );
};

const NestedList = props => (
    <ul className={props.activateStatus}>
        <li>
            <p>
                <Link
                    to='/news'
                    activeClassName='mobactive-link'
                    partiallyActive={true}>
                    NEWS
                </Link>
            </p>
        </li>
        <li>
            <p>
                <Link
                to='/gallery'
                activeClassName='mobactive-link'
                partiallyActive={true}>
                GALLERY
            </Link>
            </p>
        </li>
    </ul>
);

export default NavLinks;
