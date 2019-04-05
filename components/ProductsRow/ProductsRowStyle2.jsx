import React, { Component } from 'react';

class ProductsRowMainStyle2 extends Component {
  render() {
    const { details, images, overturned } = this.props;
    return (
      <div className="container">
        {overturned ? (
          <div className="row">
            <div className="line2img2 col-12 col-md-7">
              <a href="details.html">
                <div className="imgline2img2 col-12" />
                <img src={images[1]} alt="" />
                <div className="textline2img2 col-12">
                  <b>{details[1].product_name}</b>
                  <br />${details[1].product_price}.00
                </div>
              </a>
            </div>
            <div className="line2img1 d-none d-md-block col-md-5">
              <a href="details.html">
                <div className="imgline2img1 col-12">
                  <img src={images[0]} alt="" />
                </div>
                <div className="textline2img1 col-12">
                  <b>{details[0].product_name}</b>
                  <br />${details[0].product_price}.00
                </div>
              </a>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="line2img1 d-none d-md-block col-md-5">
              <a href="details.html">
                <div className="imgline2img1 col-12">
                  <img src={images[0]} alt="" />
                </div>
                <div className="textline2img1 col-12">
                  <b>{details[0].product_name}</b>
                  <br />${details[0].product_price}.00
                </div>
              </a>
            </div>
            <div className="line2img2 col-12 col-md-7">
              <a href="details.html">
                <div className="imgline2img2 col-12" />
                <img src={images[1]} alt="" />
                <div className="textline2img2 col-12">
                  <b>{details[1].product_name}</b>
                  <br />${details[1].product_price}.00
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProductsRowMainStyle2;
