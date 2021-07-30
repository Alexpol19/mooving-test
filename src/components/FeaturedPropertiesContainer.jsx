import React from 'react';
import { getFeaturedProperties } from '../api';
import images from '../images';
import FeaturedProperties from '../ui/FeaturedProperties';

class FeaturedPropertiesContainer extends React.Component {
  state = {
    items: [],
  }

  componentDidMount() {
    this.getBlockInfo()
  }
  
  render() {
    return (
      <FeaturedProperties items={this.state.items} />
    )
  }

  getBlockInfo() {
    getFeaturedProperties().then(data => {
      const imageUrls = [images.hoverImage1, images.hoverImage2, images.hoverImage3]
      const items = data.map((item, i) => ({...item, imageUrl: i<3 ? imageUrls[i] : imageUrls[2]}))
      this.setState({items: items})
    })
  }
}

export default FeaturedPropertiesContainer;