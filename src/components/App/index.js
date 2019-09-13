import React from 'react';
import SwipeContainer from '../SwipeContainer';
import Header from '../Header';
import Footer from '../Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <h1>Hello World</h1>
        <SwipeContainer/>
        <Footer />
    </div>
  )
}

export default App;
