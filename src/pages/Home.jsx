import React from 'react';
import Banner from '../components/banner/Banner';
import Category from '../components/category/Category';
import PopularMenu from '../components/PopularMenu';
import Features from '../components/Features';
import Testimonial from '../components/Testimonial';
import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    <div>
       <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
   <Banner></Banner>
   <Category></Category>
   <PopularMenu></PopularMenu>
   <Features></Features>
   <Testimonial></Testimonial>
    </div>
  );
};

export default Home;