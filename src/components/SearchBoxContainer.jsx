import React from 'react';
import { getPlaces } from '../api';
import SearchBox from '../ui/SearchBox';

class SearchBoxContainer extends React.Component {
  state = {
    items: [],
  }

  componentDidMount() {
  }
  
  render() {
    return (
      <SearchBox items={this.state.items} getPlaces={this.getPlacesByName} />
    )
  }

  getPlacesByName = (place) => {
    if(!place) {
      this.setState({items: []})
    } else {
      getPlaces(place).then(data => {
        this.setState({items: data})
      })
    }
  }
}

export default SearchBoxContainer;