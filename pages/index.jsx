import React, { Component } from 'react';
import Banner from '../components/Banner/Banner';
import Link from 'next/link';

class index extends Component {
  state = {
    images: [
      { id: 1, url: '/static/images/all/bannerindex1.jpg' },
      { id: 2, url: '/static/images/all/bannerindex2.jpg' },
      { id: 3, url: '/static/images/all/bannerindex3.jpg' },
      { id: 4, url: '/static/images/all/bannerindex5.jpg' }
    ]
  };
  render() {
    return (
      <>
        {/* Banner here */}
        <Banner
          images={this.state.images}
          staticTitle={
            <img src="/static/images/all/JamesFurlinn-logo-1st.png" />
          }
        />

        <div className="container">
          <div className="col-lg-12 col-md-12 col-12 containbox">
            <div className="row">
              <div className=" col-lg-1 col-md-1 col-1 hinhchunhat" />

              <div className="col-lg-11 col-md-11 col-11 ">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-7 hinh1">
                    <div className="col-lg-12 col-md-12 col-12 newcollection">
                      <a href="JamesFurlinn-All.html" className="hover">
                        NEW COLLECTIONS
                      </a>
                    </div>
                    <a href="JamesFurlinn-BNT.html">
                      <img src="/static/images/all/index-hinh1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-6 col-5 hinh2andtext">
                    <div className="col-lg-12 col-md-12 col-12 backtonature">
                      <a href="JamesFurlinn-BNT.html" className="hover">
                        BACK
                        <br />
                        TO
                        <br />
                        NATURE
                      </a>
                    </div>
                    <a href="#" className="hover">
                      <div className="col-lg-12 col-md-12 col-12 furlinnPreFall2019">
                        Furlinn Pre-Fall 2019
                      </div>
                    </a>
                    <div className="col-lg-12 col-md-12 d-none d-md-block hinh2">
                      <a href="JamesFurlinn-BNT.html">
                        <img src="/static/images/all/index-hinh2.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-6" />
            <div className="col-lg-6 col-md-6 col-6 forher">
              <Link href="/woman">
                <a className="hover">FOR HER</a>
              </Link>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-6 hinh4">
                <Link href="/woman">
                  <a>
                    <img src="/static/images/all/index-hinh4.jpg" alt="" />
                  </a>
                </Link>
              </div>
              <div className="col-lg-6 col-md-6 col-6 hinh3">
                <Link href="/woman">
                  <a>
                    <img src="/static/images/all/index-hinh3.jpg" alt="" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-6 offset-5 offset-md-0 forhim">
              <Link href="/men">
                <a className="hover">FOR HIM</a>
              </Link>
            </div>
            <div className="col-lg-12 col-md-12 col-12 hinh5">
              <Link href="JamesFurlinn-SOB.html">
                <a>
                  <img src="/static/images/all/standeeAsset 1-100.jpg" alt="" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default index;
