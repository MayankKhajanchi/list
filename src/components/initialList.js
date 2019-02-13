import React, { Component } from 'react';

class Initial extends Component {
  render() {
    return (
        <li onClick={this.props.onClick}>
          {this.props.children}
        </li>
    );
  }
}
export default Initial;
