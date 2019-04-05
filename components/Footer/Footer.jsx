import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer" className="wow fadeInUp">
          <div className="container">
            <div className="row">
              <div className="col-12" id="footer-flex">
                <div className="logo logo-ft d-none d-md-block col-md-4 col-lg-4">
                  <a href="index.html">
                    <img src="/static/images/all/JamesFurlinn-logo-ft.png" />
                  </a>
                </div>

                <div className="info col-6 col-md-4 col-lg-4">
                  <strong>CUSTOMER CARE </strong>
                  <br />
                  Customer Service
                  <br />
                  Promotions
                  <br />
                  Shipping & Tracking
                  <br />
                  Returns & Exchanges
                  <br />
                  Size Guide
                  <br />
                  Product Care
                  <br />
                  <br />
                  <strong id="fu">FOLLOW US </strong>&nbsp;&nbsp;
                  <br className="d-block d-md-none" />
                  <a href="https://www.behance.net/">
                    <i className="fab fa-behance" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f" />
                  </a>
                </div>

                <div className="col-6 col-md-4 col-lg-4 info-hid">
                  <strong>POLICIES</strong>
                  <br />
                  Terms of use <br />
                  Privacy Policy
                  <br />
                  Cookies Policy
                  <br />
                  <br />
                  <strong>FEEDBACK</strong>
                  <br />
                  Share your comments and
                  <br />
                  Suggestions with us <br />
                </div>
              </div>
            </div>
          </div>
        </footer>

        <footer id="footer-2">
          <div className="fb col-12  col-md-12 col-lg-12">
            © 2019 James Furlinn. All rights reserved. Terms & Conditions.
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
