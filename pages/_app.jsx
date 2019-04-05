import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Main from '../layouts/Main';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps, query: ctx.query };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>PRJ_Sem</title>
        </Head>
        <Main>
          <Component query={this.props.query} {...pageProps} />
        </Main>
      </Container>
    );
  }
}

export default MyApp;
