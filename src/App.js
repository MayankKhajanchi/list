import React, { Component } from 'react';

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
    event.target.insertAdjacentHTML('afterend', `<ul><li onClick=${this.test2}}>${event.target.innerHTML}</li></ul>`)
  }
  render() {
    return (
      <div className="App">
        {this.state.initialArray.map((item) => <li key={item} onClick={this.test}>{item}</li>)}
        {/* <ul>
          <li onClick={this.test}>A</li>
          <li onClick={this.test}>B</li>
          <li onClick={this.test}>C</li>
        </ul> */}
      </div>
    );
  }
}

export default App;
