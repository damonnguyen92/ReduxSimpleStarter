import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
};

ReactDom.render(<App />, document.getElementById('app'));