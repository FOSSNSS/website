import React from 'react';
// import { Link } from "gatsby"

import Header from '../components/header';
import SEO from '../components/seo';
import Footer from '../components/footer';

const SecondPage = () => (
    <div className='mainbody'>
        <SEO title='Gallery' />
        <Header />
        <div className='site-content'>
        <iframe title='embed-gallery' src="https://pixelfed.social/fossnss/embed" class="pixelfed__embed" style={{maxWidth: "100%", border: 0}} width="100%" height="100%" allowfullscreen="allowfullscreen"></iframe>
        <script async defer src="https://pixelfed.social/embed.js"></script>
        </div>
        <Footer />
    </div>
);

export default SecondPage;
