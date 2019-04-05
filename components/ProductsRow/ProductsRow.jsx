import React, { Component } from 'react';
import ProductsRowMainStyle1 from './ProductsRowStyle1';
import ProductsRowMainStyle2 from './ProductsRowStyle2';
import ProductsRowMainStyle3 from './ProductsRowStyle3';

class ProductsRow extends Component {
  renderRowStyle = (styleIndex, productsRowProps) => {
    switch (styleIndex) {
      case 1:
        return <ProductsRowMainStyle1 {...productsRowProps} />;
      case 2:
        return <ProductsRowMainStyle2 {...productsRowProps} />;
      case 3:
        return <ProductsRowMainStyle3 {...productsRowProps} />;

      default:
        return <h4>Null</h4>;
    }
  };
  render() {
    const { styleIndex, productsRowProps } = this.props;
    return <div>{this.renderRowStyle(styleIndex, productsRowProps)}</div>;
  }
}

export default ProductsRow;
