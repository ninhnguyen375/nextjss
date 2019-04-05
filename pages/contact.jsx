import React, { Component } from 'react';
import Head from 'next/head';
class contact extends Component {
  render() {
    return (
      <div>
        <Head>
          <link href="/static/lib/css/contact.css" rel="stylesheet" />
        </Head>

        <div className="container-fluid content wow fadeInDown">
          <div className="col-lg-12 col-md-12 contactbackground">
            <div className="row">
              <div className="col-lg-6 col-md-6 d-none d-md-block hinh1">
                <img src="/static/images/all/showroom.jpg" alt="" />
              </div>

              <div className="col-lg-6 col-md-6 otherway">
                <div className="col-lg-12 col-md-12 contactus">CONTACT US</div>
                <div className="col-lg-12 col-md-12 quote">
                  For work, credentials, please feel free to get in touch.
                  <br />
                  We'd love to hear from you.
                </div>

                <form method="post">
                  <div className="row info">
                    <div className="col-lg-12 headline">
                      <label htmlFor="user">Your name:</label>
                    </div>
                    <div className="col-lg-12">
                      <input type="text" className="user" required />
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div className="row info">
                    <div className="col-lg-12 headline">
                      <label htmlFor="mail">Your email:</label>
                    </div>
                    <div className="col-lg-12">
                      <input type="email" className="email" required />
                    </div>
                    <div className="clearfix" />
                  </div>

                  <div className="row info">
                    <div className="col-lg-12 headline">
                      <label htmlFor="com">Your message:</label>
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="email"
                        className="d-none d-md-none d-lg-block email"
                        required
                      />
                      <input
                        type="email"
                        className="d-none d-md-none d-lg-block email"
                        required
                      />
                      <input
                        type="email"
                        className="d-none d-md-none d-lg-block email"
                        required
                      />
                      <input
                        type="email"
                        className="d-none d-md-none d-lg-block email"
                        required
                      />
                      <input
                        type="email"
                        className="d-lg-none d-md-block d-none email"
                        required
                      />
                      <input
                        type="email"
                        className="d-lg-none d-md-block d-none email"
                        required
                      />

                      <input
                        type="email"
                        className="d-lg-none d-md-none email"
                        required
                      />
                      <input
                        type="email"
                        className="d-lg-none d-md-none email"
                        required
                      />
                      <input
                        type="email"
                        className="d-lg-none d-md-none email"
                        required
                      />
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div className="row info">
                    <div className="col-lg-12">
                      <input type="submit" value="Send" className="sendbtn" />
                      <input type="reset" value="Reset" className="resetbtn" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-lg-12 col-md-12 store">
            <div className="row">
              <div className="col-lg-6 col-md-6 us wow fadeInLeft">
                <div className="row">
                  <div className="col-lg-12 col-md-12 storename">
                    FURLINN IN U.S
                  </div>
                  <div className="col-lg-12 col-md-12 address">
                    Address: 8584 Valley Rd.Menomonee Falls, WI 53051
                    <br />
                    Phone: +82454857274
                    <br />
                    Website: furlinnus.com
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 d-none d-md-block hinh wow fadeInRight">
                <img src="/static/images/all/2.jpg" alt="" />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6 d-none d-md-block hinh wow fadeInLeft">
                <img src="/static/images/all/NYCshowroom3.jpg" alt="" />
              </div>
              <div className="col-lg-6 col-md-6 vietnam wow fadeInRight">
                <div className="row">
                  <div className="col-lg-12 col-md-12 storename">
                    FURLINN IN VIETNAM
                  </div>
                  <div className="col-lg-12 col-md-12 address">
                    Address: 102 Cach Mang Thang 8, Phuong 8, Quan 3, TP.HCM
                    <br />
                    Phone: +823857274
                    <br />
                    Website: furlinnvn.com
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6 korea wow fadeInLeft">
                <div className="row">
                  <div className="col-lg-12 col-md-12 storename">
                    FURLINN IN KOREA
                  </div>
                  <div className="col-lg-12 col-md-12 address">
                    Address: Seoul-teukbyeolsi, Jongno-gu
                    <br />
                    Phone: +823857274
                    <br />
                    Website: furlinnkr.com
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 d-none d-md-block hinh wow fadeInRight">
                <img
                  src="/static/images/all/organisation-showrooms-fashion-week 2.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6 d-none d-md-block hinh wow fadeInLeft">
                <img
                  src="/static/images/all/Poslovni-prostor-kompanije-Luna-Salt-Water-1.jpg"
                  alt=""
                />
              </div>

              <div className="col-lg-6 col-md-6 france wow fadeInRight">
                <div className="row">
                  <div className="col-lg-12 col-md-12 storename">
                    FURLINN IN FRANCE
                  </div>
                  <div className="col-lg-12 col-md-12 address">
                    Address: Cpt.Jean luc PICARD 52 RUE DES FLEURS 33500
                    LIBOURNE
                    <br />
                    Phone: +823857274
                    <br />
                    Website: furlinnfrance.com
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6 germany wow fadeInLeft">
                <div className="row">
                  <div className="col-lg-12 col-md-12 storename">
                    FURLINN IN GERMANY
                  </div>
                  <div className="col-lg-12 col-md-12 address">
                    Address: Cpt.Jean luc PICARD 52 RUE DES FLEURS 33500
                    LIBOURNE
                    <br />
                    Phone: +823857274
                    <br />
                    Website: furlinngermany.com
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 d-none d-md-block hinh wow fadeInRight">
                <img src="/static/images/all/germany.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default contact;
