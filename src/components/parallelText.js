import React, { Component } from 'react';

class ParallelText extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: ' '
    }
  }
  change = (event) => {
    this.setState({
      value: event.target.value
    })
  }
  render(){
    return(
      <div>
        <input type="text" value={this.state.value} onChange={this.change}/>
        <input type="text" value={this.state.value} onChange={this.change}/>
      </div>
    )
  }
}
export default ParallelText; 