import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// import components
import { Nav } from './components/nav';
import { Main } from './components/main';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Nav />
          <Main />
        </div>
      </BrowserRouter>
    );
  } // ./render

}

export default App;
