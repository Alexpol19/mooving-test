import React from 'react';
import { getRunningText } from '../api';
import RunningText from '../ui/RunningText';

class RunningTextContainer extends React.Component {
  state = {
    items: [],
  }

  componentDidMount() {
    this.getBlockInfo()
  }
  
  render() {
    return (
      <RunningText items={this.state.items} />
    )
  }

  getBlockInfo() {
    getRunningText().then(data => {
      this.setState({items: data})
    })
  }
}

export default RunningTextContainer;