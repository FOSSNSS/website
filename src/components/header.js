import React, { Component } from 'react';

import Logo from './header-logo';
import NavLinks from './navlinks';
import MobNavLinks from './mobnavlinks';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
        };
        console.log(props)
        // This binding is necessary to make `this` work in the callback
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass() {
        console.log(`state ${this.state.isToggleOn}`);

        this.setState(state => (
            {
                isToggleOn: !state.isToggleOn,
            }));
    }

    render() {
        return (
            <div className='nav-container'>
                <nav>
                    <Logo />
                    <NavLinks />
                    <div
                        role="button"
                        tabIndex={0}
                        onClick={this.toggleClass}
                        onKeyDown={this.toggleClass}
                        className={this.state.isToggleOn ? 'menu activate-menu' : 'menu'}
                    >
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </nav>
                <MobNavLinks
                    activateStatus={
                        this.state.isToggleOn
                            ? 'onmobile activate-mob'
                            : 'onmobile'
                    }
                    action={this.toggleClass}
                />
            </div>
        );
    }
}

export default Header;
