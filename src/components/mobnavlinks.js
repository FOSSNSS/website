import { Link } from 'gatsby';
import React from 'react';

const MobNavLinks = props => {
    const [active, setActive] = React.useState(false);
    function changeState() {
        if (!active) setActive(true);
        else setActive(false);
    }
    return (
        <ul className={props.activateStatus}>
            <li>
                <p>
                    <Link onClick={props.action} to='/' activeClassName='mobactive-link'>
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
            <div>
                <button
                    className={
                        active ? 'accordion activate-accordion' : 'accordion'
                    }
                    onClick={changeState}>
                    More
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
                    Achievements
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

export default MobNavLinks;
