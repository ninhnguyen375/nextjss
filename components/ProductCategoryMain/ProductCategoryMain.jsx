import React, { Component } from 'react';

class ProductCategoryMain extends Component {
  render() {
    const { details, images, textStyle, title, describe } = this.props;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="section-heading col-12">
              <span>{title}</span>
            </div>
            <div className="text col-12 d-none d-md-block col-md-12">
              {describe}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="line2img1 d-none d-md-block col-md-5">
              <a href={details[0].product_url}>
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
              <a href={details[1].product_url}>
                <div className="imgline2img2 col-12" />
                <img src={images[1]} alt="" />
                <div className="textline2img2 col-12">
                  <b>{details[1].product_name}</b>
                  <br />${details[1].product_price}.00
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="line3 d-none d-md-block col-md-12">
              <a href={details[2].product_url}>
                <div className="line3img col-12">
                  <img src={images[2]} alt="" />
                </div>
                <div className="line3text col-12" style={textStyle}>
                  <b>{details[2].product_name}</b>
                  <br />${details[2].product_price}.00
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCategoryMain;
