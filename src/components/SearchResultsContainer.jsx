import React from 'react';
import SearchResults from '../ui/SearchResults';

class SearchResultsContainer extends React.Component {
  constructor(props) {
     super(props);
     this.toggleClass = this.toggleClass.bind(this);
 
     this.setWrapperRef = this.setWrapperRef.bind(this);
     this.handleClickOutside = this.handleClickOutside.bind(this);
 
     this.state = {
        isActive: false
     };
   }
    componentDidMount() {
     document.addEventListener('mousedown', this.handleClickOutside);
    }
    componentWillUnmount() {
     document.removeEventListener('mousedown', this.handleClickOutside);
    }
    toggleClass() {
     this.setState((prevState) => ({
         isActive: !this.state.isActive
    }));
   }
   setWrapperRef(node) {
     this.wrapperRef = node;
   }
 
    handleClickOutside(e) {
      if (this.state.isActive && this.wrapperRef && !this.wrapperRef.contains(e.target) &&  !this.node.contains(e.target)) {
        this.setState({isActive:false})
      }
    }
    render() {
      return (
        <div ref={node => this.node = node}>
          <SearchResults setValue={this.props.setValue} items={this.props.items} />
        </div>
      )
    }
}

export default SearchResultsContainer;