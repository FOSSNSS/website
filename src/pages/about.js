import React from 'react';
// import { Link } from "gatsby"
import * as aboutStyles from '../styles/about.module.scss'

import Header from '../components/header';
import SEO from '../components/seo';
import Footer from '../components/footer';

const SecondPage = () => (
    <div className='mainbody'>
        <SEO title='About' />
        <Header />
        <div className='site-content'>
            <h1 className={aboutStyles.aboutHead}>About us</h1>
            <div className={aboutStyles.body}>
                <h2 className={aboutStyles.heading}>Who we are</h2>
                <p>The FOSSNSS (FOSS Cell) of NSS College of Engineering, Palakkad is a collective of students who like to explore and spread the open-source software and its ideology. Roots of this FOSS Cell dates back to the year 2009. The cell focus on contributing to Free and Open Source Software, advocating for free software and mentoring students to achieve excellence in various fields, leading the whole campus to the world of Freedom, Community and Free Software. <br></br> 
                <i className={aboutStyles.motoText}>Free software, Free Campus, Free Society.</i><br></br>

Our team has been constantly working for the promotion of free and open source technology tools, develop software that respects users freedom, we try our best to bring an inclusive culture in campus for having strong discussion about open source, latest technology and anything that falls under freedom!</p>
            </div>
            <div className={aboutStyles.body}>
                <h2 className={aboutStyles.heading}>Our Mission and Vision</h2>
                <ul>
                    <li>To join the free/libre software movement, develop software that respects users' freedom, so we and you can escape from software that doesn't.</li>
                    <li>To promote the use of FOSS (Free and Open Source Software) technologies and applications among students, and to encore them in contributing towards the community development in FOSS. </li>
                    <li>To advocate the need for promoting FOSS ideology in and out of campus</li>
                    <li>To promote open-source contribution, but not limitted to code-contribution</li>
                    <li>To bring more student developers into the open-source community. Also provide mentorship for student projects.</li>
                    <li>To bring an inlusive and diverse culture, which supports collective learning</li>
                </ul>
            </div>
        </div>
        <Footer />
    </div>
);
export default SecondPage;
