import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Axios from 'axios';
import Router from 'next/router';
import GlobalState from '../context/GlobalState';
import { MainStyles } from './main.styles';
import { ToVietnamese } from '../translate/ToVietnamese';

class Main extends Component {
  state = {
    auth: {}
  };

  handleLogout = () => {
    window.sessionStorage.removeItem('auth');
    Router.push('/signin');
  };

  checkLogin = async () => {
    let newAuth = {};

    // get auth from session
    const auth = JSON.parse(window.sessionStorage.getItem('auth'));

    if (auth) {
      // check auth with database
      const user = await Axios.get('/api/users/' + auth.auth_key);
      if (!user.err) {
        newAuth = {
          auth_name: user.data.user.user_name,
          auth_key: user.data.user._id,
          auth_group: user.data.user.user_group
        };
      }
    }

    // update login status
    if (this.state.auth.auth_key !== newAuth.auth_key) {
      this.setState({ auth: newAuth });
    }
  };

  componentDidUpdate() {
    this.checkLogin();
  }

  componentDidMount() {
    this.checkLogin();
  }

  render() {
    return (
      <GlobalState auth={this.state.auth} checkLogin={this.checkLogin}>
        {/* Global CSS */}
        {MainStyles}

        {/* Navigation Bar */}
        <Navbar auth={this.state.auth} onLogout={this.handleLogout} />

        {/* Content here */}
        <div className="full-height">{this.props.children}</div>

        {/* Footer */}
        <Footer />
        {/* <ToVietnamese /> */}
      </GlobalState>
    );
  }
}

export default Main;
