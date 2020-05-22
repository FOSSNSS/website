import React from 'react';
// import { Link } from "gatsby"

import SEO from '../components/seo';
import Header from '../components/header';
import HeroSect from '../components/hero-section';
import Footer from '../components/footer';
import TreeSect from '../components/tree-section';
import EventSect from '../components/event-section';
import MemCTA from '../components/cta';

const IndexPage = () => (
    <div className='mainbody'>
        <SEO title='Home' />
        <Header />
        <div className="homebody">
            <HeroSect />

            <TreeSect />

            <EventSect />

            <MemCTA />

        </div>

        <Footer />
    </div>
);

export default IndexPage;
