import React from 'react';
import { Link } from 'react-router-dom';

import CartCounter from '../Cart/CartCounter';

const HeaderNav = () => (
  <div className="nav-container">
    <nav className="primary-nav light">
      <Link to="/products">Products</Link>
      <Link to="/styles">Styles</Link>
    </nav>
    <div className="logo light">
      <Link to="/" className="logo-link">
        <span className="hide-content">I love shirts</span>
        <div className="big-logo" aria-hidden="true">
          <img
            className="small-logo"
            src="img/logo/ill-short-dark.svg"
            alt="I love shirts"
            aria-hidden="true"
          />

          <svg
            width="596px"
            height="126px"
            viewBox="0 0 596 126"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <g
              id="Artboard"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              font-family="Helvetica-Bold, Helvetica"
              font-size="109"
              font-weight="bold">
              <text id="I-LOVE-SHIRTS" fill="#ff1744">
                <tspan x="10.185791" y="93">
                  I LOVE SHIRTS
                </tspan>
              </text>
            </g>
          </svg>
        </div>
      </Link>
    </div>
    <nav className="secondary-nav light">
      <CartCounter />
    </nav>
  </div>
);

export default HeaderNav;
