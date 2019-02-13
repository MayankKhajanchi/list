import React, { Component } from 'react';
import Initial from './components/initialList';
import Sub from './components/sub';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      initialList: ['A', 'B', 'C'],
      count: 1
    }
  }
  test = (event) => {
    this.setState({
      count: this.state.count + 1
    })
    event.target.insertAdjacentHTML('afterend', `<ul><li>${event.target.innerHTML + this.state.count}</li></ul>`)
  }
  
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.initialList.map((item) => 
            <Initial key={item} indiCount={this.state.count} onClick={this.test}>{item}</Initial>
          )}
        </ul>
      </div>
    );
  }
}

export default App;