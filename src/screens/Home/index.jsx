import React from 'react';
import Header from '../../ui/Header';
import PropertyActions from '../../ui/PropertyActions';
import Footer from '../../ui/Footer';
import RunningTextContainer from '../../components/RunningTextContainer';
import FeaturedPropertiesContainer from '../../components/FeaturedPropertiesContainer';
import ReviewsAndTestimonialsContainer from '../../components/ReviewsAndTestimonialsContainer';
import SearchBoxContainer from '../../components/SearchBoxContainer';

const Home = () => {
  return (
    <>
      <Header />
      <SearchBoxContainer />
      <PropertyActions />
      <RunningTextContainer />
      <FeaturedPropertiesContainer />
      <ReviewsAndTestimonialsContainer />
      <Footer />
    </>
  );
}

export default Home;
