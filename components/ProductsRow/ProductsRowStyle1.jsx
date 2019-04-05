import React, { Component } from 'react';

class ProductsRowMainStyle1 extends Component {
  render() {
    const { details, images } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="line1img1 col-7">
            <a href="details.html">
              <img src={images[0]} alt="" />
            </a>
          </div>
          <div className="boxline1img2 col-5">
            <div className="line1img2 col-12">
              <a href="details.html">
                <img src={images[1]} alt="" />
              </a>
            </div>
            <div className="textline1 d-none d-md-block col-md-12">
              <a href="#">
                <p>
                  <b>{details.product_name}</b>
                  <br />${details.product_price}.00
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsRowMainStyle1;
