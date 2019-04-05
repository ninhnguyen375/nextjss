import React, { Component } from 'react';
import SearchNav from '../Search/SearchNav';
import Link from 'next/link';

const isServer = typeof window === 'undefined';
let JSMain = null;
let jQuery = null;
if (!isServer) {
  jQuery = require('jquery');
  JSMain = require('../../static/lib/js/JF');
}
class Navbar extends Component {
  componentDidMount() {
    JSMain.init(jQuery);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row" id="menu">
          <div className="container" id="menu-flex">
            <div className="menu-mobile__btn col-2 d-md-none">
              <button id="toggle-menu">
                <div className="top" />
                <div className="middle" />
                <div className="bottom" />
              </button>
            </div>

            <div className="logo logo-head d-block col-6 col-md-2">
              <Link href="/">
                <a>
                  <img src="/static/images/all/JamesFurlinn-logo.png" />
                </a>
              </Link>
            </div>

            <nav id="the-menu" className="the-menu col-md-8">
              <ul>
                <li id="men">
                  <a href="#">MEN</a>
                  <ul id="m">
                    <li>
                      <Link href="/men">
                        <a>All</a>
                      </Link>
                    </li>
                    <li>
                      <a href="Pants.html"> Pants</a>
                    </li>
                    <li>
                      <a href="Shirt.html"> Shirt</a>
                    </li>
                    <li>
                      <a href="Accesories.html"> Accesories</a>
                    </li>
                  </ul>
                </li>
                <li id="woman">
                  <a href="#">WOMAN</a>
                  <ul id="w">
                    <li>
                      <Link href="/woman">
                        <a> All</a>
                      </Link>
                    </li>
                    <li>
                      <a href="Dress-wm.html"> Dress</a>
                    </li>
                    <li>
                      <a href="Shirt-wm.html"> Shirt</a>
                    </li>
                    <li>
                      <a href="Accesories-wm.html"> Accesories</a>
                    </li>
                  </ul>
                </li>
                <li id="col">
                  <a href="#">COLLECTIONS</a>
                  <ul id="c">
                    <li>
                      <Link href="/collections">
                        <a>All</a>
                      </Link>
                    </li>
                    <li>
                      <a href="JamesFurlinn-BMV.html"> Be My Valentine</a>
                    </li>
                    <li>
                      <a href="JamesFurlinn-BNT.html"> Back to Nature</a>
                    </li>
                    <li>
                      <a href="JamesFurlinn-SOB.html"> Shape of Beige</a>
                    </li>
                  </ul>
                </li>
                <li id="up">
                  <Link href="/contact">
                    <a>CONTACT</a>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="cart offset-1 col-3 offset-md-0 col-md-2">
              <div className="d-none d-lg-block offset-md-2" />
              <div className="col-4 col-lg-3 icon" id="srch" title="Search">
                <i className="fas fa-search" />
              </div>
              <div className="col-4 col-lg-3 icon">
                <a href="#" title="Shopping Bag">
                  <i className="fas fa-shopping-bag" />
                </a>
              </div>
              <div className="col-4 col-lg-3 icon">
                <a href="login.html" title="Sign in">
                  <i className="far fa-user" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <SearchNav />
      </div>
    );
  }
}

export default Navbar;
