import React from 'react';
import { Link } from "gatsby"

const IndexPage = () => (
    <div className='membcta'>
        <div className="membcta-main">
            <div className="cta1">
                <h2>Join FOSSNSS now and be part of the community</h2>
                <a
                href='https://kutt.it/becomemember'
                className='cta-btn lined thin bgcolor'>
                    JOIN NOW
                </a>
            </div>
            <br />
            <div className="cta2">
                <h2>Read about our mission and plans <Link to="/about">here</Link></h2>
            </div>
            <div className="cta3">
                <span>Read stories and articles from our members </span><Link to="/blog">here</Link>
            </div>
        </div>
    </div>
);

export default IndexPage;
