import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// components
import { Home } from './home';
import { About } from './about';
import { Contact } from './contact';

export class Main extends Component {

  render() {
    return (
        <main role="main" className="container">
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </main>
    );
  } // ./render

} // ./Main
