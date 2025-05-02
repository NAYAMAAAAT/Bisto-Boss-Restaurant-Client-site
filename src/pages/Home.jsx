import React from 'react';
import Banner from '../components/banner/Banner';
import Category from '../components/category/Category';
import PopularMenu from '../components/PopularMenu';
import Features from '../components/Features';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <div>
   <Banner></Banner>
   <Category></Category>
   <PopularMenu></PopularMenu>
   <Features></Features>
   <Testimonial></Testimonial>
    </div>
  );
};

export default Home;