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
                        HOME
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
                        BLOG
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
                        EVENTS
                    </Link>
                </p>
            </li>
            <li>
                <p>
                    <Link
                        to='/members'
                        activeClassName='mobactive-link'
                        partiallyActive={true}>
                        TROOP
                    </Link>
                </p>
            </li>
            <div>
                <button
                    className={
                        active ? 'accordion activate-accordion' : 'accordion'
                    }
                    onClick={changeState}>
                    MORE
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
                    ABOUT
                </Link>
            </p>
        </li>
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
    </ul>
);

export default MobNavLinks;
