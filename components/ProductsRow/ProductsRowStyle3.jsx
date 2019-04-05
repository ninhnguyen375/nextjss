import React, { Component } from 'react';

class ProductsRowMainStyle3 extends Component {
  render() {
    const { details, image, textStyle } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="line3 d-none d-md-block col-md-12">
            <a href="details.html">
              <div className="line3img col-12">
                <img src={image} alt="" />
              </div>
              <div className="line3text col-12" style={textStyle}>
                <b>{details.product_name}</b>
                <br />${details.product_price}.00
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsRowMainStyle3;
