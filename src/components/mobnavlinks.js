import { Link } from 'gatsby';
import React from 'react';

const MobNavLinks = props => (
    <ul className={props.activateStatus}>
        <li onClick={props.action}>
            <p>
                <Link to='/' activeClassName='mobactive-link'>
                    Home
                </Link>
            </p>
        </li>
        <li>
            <p>
                <Link
                    to='/blog'
                    activeClassName='mobactive-link'
                    partiallyActive={true}
                    onClick={props.action}>
                    Blog
                </Link>
            </p>
        </li>
        <li>
            <p>
                <Link
                    to='/events'
                    activeClassName='mobactive-link'
                    partiallyActive={true}
                    onClick={props.action}>
                    Events
                </Link>
            </p>
        </li>
        <li>
            <p>
                <Link
                    to='/members'
                    activeClassName='mobactive-link'
                    partiallyActive={true}>
                    Troop
                </Link>
            </p>
        </li>
    </ul>
);

export default MobNavLinks;
