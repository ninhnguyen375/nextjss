import React, { Component } from 'react';
import Head from 'next/head';
import Banner from '../components/Banner/Banner';
class woman extends Component {
  state = {
    images: [
      { id: 1, url: '/static/images/all/45.jpg' },
      { id: 2, url: '/static/images/all/banner_WOMAN.jpg' },
      { id: 3, url: '/static/images/all/banner.jpg' },
      { id: 4, url: '/static/images/all/lookbook_3.jpg' }
    ]
  };
  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="/static/lib/css/WOMAN.css" />
        </Head>

        <Banner images={this.state.images} />

        <div className="container">
          <div className="row">
            <div className="section-heading col-12 ">
              <span>FURLINN’S DRESS LINE</span>
            </div>
            <div className="text col-12 d-none d-md-block col-md-12">
              Choose a dress to make your day!
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="line1img1 col-6 col-md-7">
              <a href="details.html">
                <div className="imgline1img1 col-12">
                  <img src="/static/images/all/4786040971_1_1_1.jpg" alt="" />
                </div>
                <div className="textline1img1 col-12">
                  <b>Poppy Dress-Burgundy</b>
                  <br />
                  $350
                </div>
              </a>
            </div>
            <div className="line1img2 col-6 col-md-5">
              <a href="details.html">
                <div className="imgline1img2 col-12" />
                <img
                  src="/static/images/all/2038617800_9_2_1 copy.jpg"
                  alt=""
                />
                <div className="textline1img2 col-12">
                  <b>Lolita Dress-Black</b>
                  <br />
                  $350
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="line2img1 col-12 col-md-7">
              <a href="details.html">
                <div className="imgline2img1 col-12">
                  <img
                    src="/static/images/all/1198002251_9_2_1 copy.jpg"
                    alt=""
                  />
                </div>
                <div className="textline2img1 col-12">
                  <b>Celine Dress-Light Beige</b>
                  <br />
                  $350
                </div>
              </a>
            </div>
            <div className="line2img2 d-none d-md-block col-md-5">
              <a href="details.html">
                <div className="imgline2img2 col-12" />
                <img src="/static/images/all/0097024330_2_1_1.jpg" alt="" />
                <div className="textline2img2 col-12">
                  <b>Mini Flowers jumpsuit-Black</b>
                  <br />
                  $350
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="section-heading col-12 ">
              <span>FURLINN’S SHIRT LINE</span>
            </div>
            <div className="text col-12 d-none d-md-block col-md-12">
              Choose your shirt, choose your style!
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="line3img1 d-none d-md-block col-md-5">
              <a href="details.html">
                <div className="imgline3img1 col-12">
                  <img src="/static/images/all/2235666251_2_1_1.jpg" alt="" />
                </div>
                <div className="textline3img1 col-12">
                  <b>White Lines Shirt</b>
                  <br />
                  $350
                </div>
              </a>
            </div>
            <div className="line3img2 d-none d-md-block col-md-7 ">
              <a href="details.html">
                <div className="imgline3img2 col-12" />
                <img src="/static/images/all/0085335450_2_1_1.jpg" alt="" />
                <div className="textline3img2 col-12">
                  <b>Woman in Art Sweater</b>
                  <br />
                  $350
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="line4img1 d-none d-md-block col-md-5 order-md-3">
              <a href="details.html">
                <div className="imgline4img1 col-12">
                  <img src="/static/images/all/3564060712_2_3_1.jpg" alt="" />
                </div>
                <div className="textline4img1 col-12">
                  <b>Celine Dress-Light Beige</b>
                  <br />
                  $350
                </div>
              </a>
            </div>
            <div className="line4img2 col-12 col-md-7 order-1 order-md-4">
              <a href="details.html">
                <div className="imgline4img2 col-12" />
                <img src="/static/images/all/9598009800_2_3_1.jpg" alt="" />
                <div className="textline4img2 col-12">
                  <b>Basic Black Shirt</b>
                  <br />
                  $350
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="line3img1 col-6 d-md-none">
              <a href="details.html">
                <div className="imgline3img1 col-12">
                  <img src="/static/images/all/2235666251_2_1_1.jpg" alt="" />
                </div>
                <div className="textline3img1 col-12">
                  <b>White Lines Shirt</b>
                  <br />
                  $350
                </div>
              </a>
            </div>
            <div className="line3img2 col-6 d-md-none">
              <a href="details.html">
                <div className="imgline3img2 col-12" />
                <img src="/static/images/all/0085335450_2_1_1.jpg" alt="" />
                <div className="textline3img2 col-12">
                  <b>Woman in Art Sweater</b>
                  <br />
                  $350
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="section-heading col-12 ">
              <span>FURLINN’S ACCESORIES</span>
            </div>
            <div className="text col-12 d-none d-md-block col-md-12">
              Your style, your choose!
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="line5img1 col-7">
              <a href="details.html">
                <div className="imgline5img1 col-12">
                  <img src="/static/images/all/1432004023_2_31_1.jpg" alt="" />
                </div>
                <div className="textline5img1 col-12">
                  <b>Leather Dark Beige Crossbody Bag</b>
                  <br />
                  $350
                </div>
              </a>
            </div>
            <div className="line5img2 col-5">
              <a href="details.html">
                <div className="imgline5img2 col-12" />
                <img src="/static/images/all/3240001090_1_1_1.jpg" alt="" />
                <div className="textline5img2 col-12">
                  <b>Basic High Heels-Mustard</b>
                  <br />
                  $350
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="line6img2 col-12 d-md-none">
              <a href="details.html">
                <div className="imgline6img2 col-12" />
                <img src="/static/images/all/3370004102_2_5_1.jpg" alt="" />
                <div className="textline6img2 col-12">
                  <b>Beige Leather Bucket</b>
                  <br />
                  $350
                </div>
              </a>
            </div>
            <div className="line6img1 col-12 col-md-7">
              <a href="details.html">
                <div className="col-6 line6img11">
                  <div className="imgline6img1 col-12">
                    <img src="/static/images/all/7790304001_1_1_1.jpg" alt="" />
                  </div>
                  <div className="textline6img1 col-12">
                    <b>White Letter Clutch</b>
                    <br />
                    $350
                  </div>
                </div>
                <div className="col-6 line6img12">
                  <div className="imgline6img1 col-12">
                    <img src="/static/images/all/3832001040_1_1_1.jpg" alt="" />
                  </div>
                  <div className="textline6img1 col-12">
                    <b>Velvet Bow Mules</b>
                    <br />
                    $350
                  </div>
                </div>
              </a>
            </div>
            <div className="line6img2 d-none d-md-block col-md-5">
              <a href="details.html">
                <div className="imgline6img2 col-12" />
                <img src="/static/images/all/3370004102_2_5_1.jpg" alt="" />
                <div className="textline6img2 col-12">
                  <b>Beige Leather Bucket</b>
                  <br />
                  $350
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default woman;
