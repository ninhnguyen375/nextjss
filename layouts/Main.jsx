import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const isServer = typeof window === 'undefined';
let WOW = null;
let JSMain = null;
let jQuery = null;
if (!isServer) {
  WOW = require('wow.js');
  jQuery = require('jquery');
  JSMain = require('../static/lib/js/JF');
}
class Main extends Component {
  componentDidMount() {
    new WOW().init();
    // JSMain.init(jQuery);
  }
  render() {
    return (
      <div>
        <div id="overlay-page" className=" d-md-none" />
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Main;
