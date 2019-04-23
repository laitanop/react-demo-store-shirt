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
                        width="562px"
                        height="46px"
                        viewBox="0 0 562 46"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Group</title>
                        <desc>Created with Sketch.</desc>
                        <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                        >
                            <g
                                id="Group"
                                transform="translate(0.000000, -14.000000)"
                            >
                                <g
                                    id="ill-dark"
                                    transform="translate(0.000000, 14.000000)"
                                    fill="#2D2D40"
                                    fill-rule="nonzero"
                                >
                                    <polygon
                                        id="Path"
                                        points="0.6 43.1 0.6 1.3 5.3 1.3 5.3 43.1 0.6 43.1"
                                    />
                                    <polygon
                                        id="Path"
                                        points="39.1 43.1 39.1 1.3 48.3 1.3 48.3 34.7 64.6 34.7 64.6 43.1 39.1 43.1"
                                    />
                                    <path
                                        d="M97.3,7 C101.5,2.9 107.2,0.6 113.1,0.7 C119,0.6 124.7,2.9 128.9,7 C133.2,11 135.5,16.5 135.4,22.4 C135.5,28.2 133.2,33.8 128.9,37.8 C120,46.1 106.1,46.1 97.2,37.8 C93,33.8 90.6,28.2 90.7,22.4 C90.7,16.5 93,10.9 97.3,7 Z M103.8,31.8 C106.2,34.3 109.6,35.7 113.1,35.6 C116.6,35.7 119.9,34.3 122.3,31.8 C127.4,26.6 127.4,18.3 122.4,13 C117.4,7.9 109.1,7.8 104,12.8 C103.9,12.9 103.9,12.9 103.8,13 C98.8,18.2 98.8,26.5 103.8,31.8 L103.8,31.8 Z"
                                        id="Shape"
                                    />
                                    <polygon
                                        id="Path"
                                        points="176.4 43.1 159.2 1.3 169 1.3 180.4 29.6 191.7 1.3 201.5 1.3 184.4 43.1 176.4 43.1"
                                    />
                                    <polygon
                                        id="Path"
                                        points="230.6 43.1 230.6 1.3 259.2 1.3 259.2 9.7 239.9 9.7 239.9 17.6 258 17.6 258 25.8 239.9 25.8 239.9 34.7 259.6 34.7 259.6 43.1"
                                    />
                                </g>
                                <text
                                    id="S-H-I-R-T-S"
                                    font-family="Arial-BoldMT, Arial"
                                    font-size="57"
                                    font-weight="bold"
                                    line-spacing="75"
                                    letter-spacing="-1.5361017"
                                    fill="#686A9A"
                                >
                                    <tspan x="291.834975" y="52">
                                        S H I R T{' '}
                                    </tspan>
                                    <tspan
                                        x="526.656087"
                                        y="52"
                                        letter-spacing="-1.50961721"
                                    >
                                        S
                                    </tspan>
                                </text>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="small-logo" aria-hidden="true">
                    <svg
                        width="562px"
                        height="46px"
                        viewBox="0 0 562 46"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Group</title>
                        <desc>Created with Sketch.</desc>
                        <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                        >
                            <g
                                id="Group"
                                transform="translate(0.000000, -14.000000)"
                            >
                                <g
                                    id="ill-dark"
                                    transform="translate(0.000000, 14.000000)"
                                    fill="#2D2D40"
                                    fill-rule="nonzero"
                                >
                                    <polygon
                                        id="Path"
                                        points="0.6 43.1 0.6 1.3 5.3 1.3 5.3 43.1 0.6 43.1"
                                    />
                                    <polygon
                                        id="Path"
                                        points="39.1 43.1 39.1 1.3 48.3 1.3 48.3 34.7 64.6 34.7 64.6 43.1 39.1 43.1"
                                    />
                                    <path
                                        d="M97.3,7 C101.5,2.9 107.2,0.6 113.1,0.7 C119,0.6 124.7,2.9 128.9,7 C133.2,11 135.5,16.5 135.4,22.4 C135.5,28.2 133.2,33.8 128.9,37.8 C120,46.1 106.1,46.1 97.2,37.8 C93,33.8 90.6,28.2 90.7,22.4 C90.7,16.5 93,10.9 97.3,7 Z M103.8,31.8 C106.2,34.3 109.6,35.7 113.1,35.6 C116.6,35.7 119.9,34.3 122.3,31.8 C127.4,26.6 127.4,18.3 122.4,13 C117.4,7.9 109.1,7.8 104,12.8 C103.9,12.9 103.9,12.9 103.8,13 C98.8,18.2 98.8,26.5 103.8,31.8 L103.8,31.8 Z"
                                        id="Shape"
                                    />
                                    <polygon
                                        id="Path"
                                        points="176.4 43.1 159.2 1.3 169 1.3 180.4 29.6 191.7 1.3 201.5 1.3 184.4 43.1 176.4 43.1"
                                    />
                                    <polygon
                                        id="Path"
                                        points="230.6 43.1 230.6 1.3 259.2 1.3 259.2 9.7 239.9 9.7 239.9 17.6 258 17.6 258 25.8 239.9 25.8 239.9 34.7 259.6 34.7 259.6 43.1"
                                    />
                                </g>
                                <text
                                    id="S-H-I-R-T-S"
                                    font-family="Arial-BoldMT, Arial"
                                    font-size="57"
                                    font-weight="bold"
                                    line-spacing="75"
                                    letter-spacing="-1.5361017"
                                    fill="#686A9A"
                                >
                                    <tspan x="291.834975" y="52">
                                        S H I R T{' '}
                                    </tspan>
                                    <tspan
                                        x="526.656087"
                                        y="52"
                                        letter-spacing="-1.50961721"
                                    >
                                        S
                                    </tspan>
                                </text>
                            </g>
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
