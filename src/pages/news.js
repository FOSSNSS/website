import React from 'react';
// import { Link } from "gatsby"

import Header from '../components/header';
import SEO from '../components/seo';
import Footer from '../components/footer';

const SecondPage = () => (
    <div className='mainbody'>
        <SEO title='About' />
        <Header />
        <div className='site-content'>
            <h1>Page Under construction</h1>
            <h3>News page</h3>
            <ul>
                <li>News 1</li>
                <li>News 2</li>
                <li>News 3</li>
                <li>News 4</li>
            </ul>
        </div>
        <Footer />
    </div>
);

export default SecondPage;
