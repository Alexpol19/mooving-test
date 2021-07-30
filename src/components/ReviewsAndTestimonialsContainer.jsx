import React from 'react';
import { getReviews } from '../api';
import ReviewsAndTestimonials from '../ui/ReviewsAndTestimonials';

class ReviewsAndTestimonialsContainer extends React.Component {
  state = {
    items: [],
  }

  componentDidMount() {
    this.getBlockInfo()
  }
  
  render() {
    return (
      <ReviewsAndTestimonials items={this.state.items} />
    )
  }

  getBlockInfo() {
    getReviews().then(data => {
      this.setState({items: data})
    })
  }
}

export default ReviewsAndTestimonialsContainer;