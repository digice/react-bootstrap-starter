import React, { Component } from 'react';

export class SearchForm extends Component {

  render() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-react my-2 my-sm-0" type="submit">Search</button>
      </form>
    );
  } // ./render

} // ./SearchForm
