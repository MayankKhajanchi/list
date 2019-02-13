import React, { Component } from 'react';
import ParallelText from './components/parallelText';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      initialArray: ['A','B','C']
    }
  }
  test2 = (event) => {
    console.log(event.target.innerHTML);
  }
  test = (event) => {
    // console.log(event.target.innerHTML + 1);
    console.log(event.target.parentElement.innerHTML);
    event.target.insertAdjacentHTML('afterend', `<ul><li onClick=${this.test2}}>${event.target.innerHTML}</li></ul>`)
  }
  render() {
    return (
      <div className="App">
        {this.state.initialArray.map((item) => <li key={item} onClick={this.test}>{item}</li>)}
        {/* {this.state.initialArray.map((item) => <Sub/>)} */}
        {/* <ul>
          <li onClick={this.test} alpha={this.state.initialArray[0]}>{this.props.alpha}</li>
          <li onClick={this.test} alpha={this.state.initialArray[1]}>{this.props.alpha}</li>
          <li onClick={this.test} alpha={this.state.initialArray[2]}>{this.props.alpha}</li>
        </ul> */}
        <ParallelText/>
      </div>
    );
  }
}

export default App;
