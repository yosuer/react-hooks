import React, { Component } from 'react';
import Counter from './components/Counter';
import './App.css';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <>
        <Counter />
        <Form title="HolAAA" />
      </>
    );
  }
}

export default App;
