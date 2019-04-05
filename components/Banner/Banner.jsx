import React, { Component } from 'react';
import 'slick';

const isServer = typeof window === 'undefined';

let jQuery = null;
if (!isServer) {
  jQuery = require('jquery');
  require('slick-carousel');
}

class Banner extends Component {
  componentDidMount() {
    jQuery('.banner').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      speed: 1000,
      easing: 'easeOutElastic'
    });
  }

  render() {
    const { images, staticTitle } = this.props;
    return (
      <div>
        <div className="row">
          {staticTitle && (
            <div className="col-5 wow fadeInDown logo-1st">{staticTitle}</div>
          )}
          <div className="firstbanner banner wow fadeInDown col-12">
            {images &&
              images.map(item => (
                <img key={item.id} src={item.url} className="img-fluid" />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
