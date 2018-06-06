import React, { Component } from 'react';

export class NavbarToggler extends Component {

  render() {
    return (
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target={'#' + this.props.target} aria-controls={this.props.target} aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    );
  } // ./render

} // ./NavbarToggler
