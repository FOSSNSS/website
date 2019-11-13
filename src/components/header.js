import { Link } from 'gatsby';
import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
            toggleClassName: 'nav-active',
        };

        // This binding is necessary to make `this` work in the callback
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass() {
        if (!this.state.isToggleOn) {
            this.setState(state => ({
                isToggleOn: !state.isToggleOn,
                toggleClassName: `onmobile`,
            }));
        } else {
            this.setState(state => ({
                isToggleOn: !state.isToggleOn,
                toggleClassName: `onmobile nav-active`,
            }));
        }
    }

    render() {
        return (
            <div>
                <nav>
                    <div className='logo'>FOSS NSS</div>

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

                    <div className='burger' onClick={this.toggleClass}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>
                </nav>
                <ul className={this.state.toggleClassName}>
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
            </div>
        );
    }
}

export default Header;
