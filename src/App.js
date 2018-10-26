import React, { Component } from 'react';
import Counter from './components/Counter';
import './App.css';
import Form from './components/Form';
import { Planet, Mug, SpeechBubble } from 'react-kawaii';

class App extends Component {
  render() {
    return (
      <>
        <SpeechBubble mood="happy" />
        <Mug size={200} mood="happy" color="#FDA7DC" />
        <Planet size={200} mood="sad" color="#FDA7DC" />
        <Counter />
        <Form title="HolAAA" />
      </>
    );
  }
}

export default App;
