import { Link } from 'gatsby';
import React from 'react';
// import '../styles/partials/layouts/_navlinks.scss';

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
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to='/blog'
                    activeClassName='active-link'
                    partiallyActive={true}>
                    Blog
                </Link>
            </li>
            <li>
                <Link
                    to='/events'
                    activeClassName='active-link'
                    partiallyActive={true}>
                    Events
                </Link>
            </li>
            <li>
                <Link
                    to='/members'
                    activeClassName='active-link'
                    partiallyActive={true}>
                    Troop
                </Link>
            </li>
            <div>
                <button
                    className='accordion'
                    onMouseEnter={activateDropdown}
                    onMouseLeave={deactivateDropdown}>
                    <div
                        className={active ? 'arrow activate-arrow' : 'arrow'}
                    />
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
                    to='/about'
                    activeClassName='mobactive-link'
                    partiallyActive={true}
                    onClick={props.action}>
                    About
                </Link>
            </p>
        </li>
        <li>
            <p>
                <Link
                    to='/acheivements'
                    activeClassName='mobactive-link'
                    partiallyActive={true}
                    onClick={props.action}>
                    Acheivements
                </Link>
            </p>
        </li>
        <li>
            <p>
                <Link
                    to='/news'
                    activeClassName='mobactive-link'
                    partiallyActive={true}>
                    News
                </Link>
            </p>
        </li>
    </ul>
);

export default NavLinks;
