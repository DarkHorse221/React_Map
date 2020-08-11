import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  render() {
    const { cart } = this.props;
    return (
      <header>
        <ul className="header_nav">
          <li className="header_logo">Logo</li>
          <li><Link to="/" className="btn btn--blue">Browse</Link></li>
          <li><Link to="/cart" className="btn btn--orange">Cart ({cart.items.length})</Link></li>
        </ul>
      </header>
    );
  }

}