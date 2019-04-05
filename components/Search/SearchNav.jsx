import React, { Component } from 'react';

class SearchNav extends Component {
  render() {
    return (
      <div className="row">
        <div className="hidden col-12" id="searchgia">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-9 col-lg-8 search-op">
                <font color="white">PRODUCT'S NAME:</font>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" className="snc col-11 col-md-11" />
              </div>
            </div>

            <div className="row">
              <div
                className="col-12 col-md-9 col-lg-8 search-op"
                id="search-flex"
              >
                <div className="col-6 col-md-5 col-lg-5 sl">
                  <font color="white">SEX:</font> <br />
                  <select className="snc col-12">
                    <option>All</option>
                    <option>Woman</option>
                    <option>Men</option>
                    <option>Unisex</option>
                  </select>
                </div>

                <div className="col-6 col-md-5 offset-md-1 sl">
                  <font color="white">COLLECTIONS:</font>
                  <br />
                  <select className="snc col-11">
                    <option>All</option>
                    <option>Be My Valentine</option>
                    <option>Back to Nature</option>
                    <option>Shape of Beige</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-9 col-lg-8 search-op">
                <font color="white">PRICE: </font>
                <select className="snc col-11">
                  <option>All</option>
                  <option>$10.00 - $50.00</option>
                  <option>$50.00 - $100.00</option>
                  <option>$100.00 - $150.00</option>
                  <option>Over $150.00</option>
                </select>
              </div>
            </div>
            <br />
            <div className="row">
              <button id="sm" className="col-6 col-md-4 col-lg-3">
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchNav;
