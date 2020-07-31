// import { Link } from "gatsby"
import React from 'react';

const Footer = () => (
    <footer>
		<div className="topfooter">
			<div className="sect1">
                <h2>Navigation</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="https://forms.gle/sWCU2L2KYpGmTZzg8">Become a member</a></li>
                    <li><a href="https://loomio.org">Loomio Discussions Group</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
			</div>
			<div className="sect2">
                <h2>Links</h2>
				<ul>
                    <li><a href="https://plus.fosscommunity.in/">PLUS - Palakkad</a></li>
                    <li><a href="https://wikiwikiweb.de/LugsList/">GLUG/FSUG India lists</a></li>
                    <li><a href="https://www.gnu.org/">GNU Project</a></li>
                    <li><a href="https://gitlab.com/fossnss/website">Website Source</a></li>
                </ul>
			</div>
		</div>
        <div className='footer'>
            <p>with &hearts; FOSS NSS &#127279; {(new Date().getFullYear())}</p>
        </div>
    </footer>
);

export default Footer;
