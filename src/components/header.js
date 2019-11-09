import { Link } from "gatsby"
import React, { Component } from "react"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { 
		isToggleOn: true,
		toggleClassName: 'nav-links'
	 }

    // This binding is necessary to make `this` work in the callback
    this.toggleClass = this.toggleClass.bind(this)
  }

  toggleClass() {
	  if(!this.state.isToggleOn){
		this.setState(state => ({
			isToggleOn: !state.isToggleOn,
			toggleClassName: `nav-links`
		  })
	)
} else{
		this.setState(state => ({
			isToggleOn: !state.isToggleOn,
			toggleClassName: `nav-links nav-active`
		  })
	)
	}
  }


  render() {
    return (
      <nav>
        <div className="logo">FOSS NSS</div>
        <ul className={this.state.toggleClassName}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/members">Troop</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
        <div className="burger" onClick={this.toggleClass}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    )
  }
}

export default Header
