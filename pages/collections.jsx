import React, { Component } from 'react';
import Head from 'next/head';
import Banner from '../components/Banner/Banner';

class collections extends Component {
  state = {
    images: [
      {
        id: 1,
        url:
          '/static/images/all/charles-keith-spring19-retro-muse-blog-3-XL.jpg'
      },
      {
        id: 2,
        url:
          '/static/images/all/charles-keith-spring-19-back-to-nature-blog-1-XL.jpg'
      },
      { id: 3, url: '/static/images/all/banner.jpg' },
      { id: 4, url: '/static/images/all/21.jpg' }
    ]
  };
  render() {
    return (
      <div>
        <Head>
          <link href="/static/lib/css/bst-all.css" rel="stylesheet" />
        </Head>

        <Banner images={this.state.images} />

        <div className="container">
          <div className="row">
            <div className="col-12 wow fadeInLeft product-bst">
              <div className="text col-6">
                <div className="col-1 color-box" />

                <div className="col-11 txt">
                  <a href="JamesFurlinn-BMV.html">
                    <h2>
                      SPRING-19
                      <br />
                      <font color="#ba0013">BE MY VALENTINE</font>
                    </h2>
                  </a>

                  <p className="d-none d-md-block">
                    Celebrate the season of love with <br />
                    FURLINN’s Valentine’s Day 2019 collection.
                  </p>
                  <br className="d-lg-none d-md-none d-block" />
                  <button className="col-12 d-md-none d-block">See more</button>
                  <br />
                  <a href="JamesFurlinn-BMV.html">
                    <img
                      src="/static/images/all/charles-keith-spring-19-be-my-valentine-blog-cover-square.jpg"
                      className="img-fluid d-none d-md-block wow fadeInLeft"
                    />
                  </a>
                </div>
              </div>

              <div className="col-6 wow fadeInRight">
                <a href="JamesFurlinn-BMV.html">
                  <img
                    src="/static/images/all/charles-keith-spring-19-be-my-valentine-blog-desktop-slices-1-XL.jpg"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <a href="JamesFurlinn-SOB.html">
              <div className="col-12 product-bst">
                <div className="col-7 img-1 wow fadeInLeft">
                  <img
                    src="/static/images/all/look4-look4.st-(1).jpg"
                    className="img-fluid"
                  />
                  <p
                    className="txt-z col-md-7 offset-md-4 d-none d-md-block"
                    align="right"
                  >
                    <font color="white">
                      Looks made from refreshing
                      <br />
                      hues of brown and camel.
                    </font>
                  </p>
                  <button className="col-7 d-md-none d-block but-white">
                    See more
                  </button>
                </div>
                <div className="offset-6 col-6 img-2 wow fadeInRight">
                  <p align="right" className="d-none d-md-block">
                    <font color="#735d45" face="futura-med">
                      man / <strong>STATEMENT</strong> / spring summer
                    </font>
                  </p>
                  <img
                    src="/static/images/all/look4-look4.st.jpg"
                    className="img-fluid"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>

        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <img
                src="/static/images/all/charles-keith-spring-19-back-to-nature-blog-5-XL.jpg"
                className="img-fluid img-3 wow fadeInUpBig"
              />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <a href="JamesFurlinn-BNT.html">
                  <div className="col-8 col-md-8 offset-md-3 wow fadeInUp backtona">
                    BACK
                    <br />
                    TO
                    <br />
                    NATURE
                    <p className="pre-fall d-none d-md-block">
                      Furlinn Pre-Fall 2019&nbsp;
                      <i className="fas fa-angle-double-right arr" />
                    </p>
                    <button className="col-7 d-md-none d-block but-white but-btn">
                      See more
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default collections;
