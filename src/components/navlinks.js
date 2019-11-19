import { Link } from 'gatsby';
import React from 'react';

const NavLinks = () => (
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
        <li>
            <Link to='/about' activeClassName='active-link'>
                About
            </Link>
        </li>
    </ul>
);

export default NavLinks;
