import React, { Component } from 'react';
import Head from 'next/head';
import Banner from '../components/Banner/Banner';
import ProductCategoryMain from '../components/ProductCategoryMain/ProductCategoryMain';

class MEN extends Component {
  state = {
    images: [
      { id: 1, url: '/static/images/all/MEN copy.jpg' },
      { id: 2, url: '/static/images/all/Men3.jpg' },
      { id: 3, url: '/static/images/all/15.jpg' },
      { id: 4, url: '/static/images/all/12.jpg' }
    ],
    productsMain: [
      {
        product_name: 'Basic Denim Shirt',
        product_price: 350,
        product_url: '#',
        product_img: '/static/images/all/0072295305_2_1_1.jpg'
      },
      {
        product_name: 'Navy Lines Shirt',
        product_price: 350,
        product_url: '#',
        product_img: '/static/images/all/0975322400_2_1_1.jpg'
      },
      {
        product_name: 'Black Oxford Sweater',
        product_price: 350,
        product_url: '#',
        product_img: '/static/images/all/soft4_prev.jpg'
      }
    ],
    categories: [
      {
        category_name: 'shirt',
        category_slogan: 'What do you think about the basic color shirt ?'
      },
      {
        category_name: 'pant',
        category_slogan: 'You look more perfect with our pants!'
      },
      {
        category_name: 'accesories',
        category_slogan: 'Choose your style, choose our accesories!'
      }
    ]
  };
  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="/static/lib/css/MEN.css" />
        </Head>
        <Banner images={this.state.images} />

        <ProductCategoryMain
          title="FURLINN’S SHIRT LINE"
          describe="What do you think about the basic color shirt ?"
          images={[
            '/static/images/all/0072295305_2_1_1.jpg',
            '/static/images/all/0975322400_2_1_1.jpg',
            '/static/images/all/soft4_prev.jpg'
          ]}
          details={[
            {
              product_name: 'Basic Denim Shirt',
              product_price: 350,
              product_url: '#',
              product_img: '/static/images/all/0072295305_2_1_1.jpg'
            },
            {
              product_name: 'Navy Lines Shirt',
              product_price: 350,
              product_url: '#',
              product_img: '/static/images/all/0975322400_2_1_1.jpg'
            },
            {
              product_name: 'Black Oxford Sweater',
              product_price: 350,
              product_url: '#',
              product_img: '/static/images/all/soft4_prev.jpg'
            }
          ]}
        />
        <ProductCategoryMain
          title="FURLINN’S PANTS LINE"
          describe="You look more perfect with our pants!"
          images={[
            '/static/images/all/0706513401_2_4_1.jpg',
            '/static/images/all/1608422401_2_1_1.jpg',
            '/static/images/all/ZARA-MAN-SPRINGSUMMER-2017-MENS-LOOKBOOK-04.jpg'
          ]}
          details={[
            {
              product_name: 'Traveller Basic Pants',
              product_price: 350,
              product_url: '#'
            },
            {
              product_name: 'Skinny Pants',
              product_price: 350,
              product_url: '#'
            },
            {
              product_name: 'Oxford Traveller Skinny',
              product_price: 350,
              product_url: '#'
            }
          ]}
          textStyle={{ color: 'white', textShadow: '0 0 3px black' }}
        />
        <ProductCategoryMain
          title="FURLINN’S ACCESORIES"
          describe="Choose your style, choose our accesories!"
          images={[
            '/static/images/all/white sneaker.jpg',
            '/static/images/all/3212005090_9_2_1 copy.jpg',
            '/static/images/all/ZARA-MAN-SPRINGSUMMER-2017-MENS-LOOKBOOK-04.jpg'
          ]}
          details={[
            {
              product_name: 'White Sneaker',
              product_price: 350,
              product_url: '#'
            },
            {
              product_name: 'Leather Band Bag',
              product_price: 350,
              product_url: '#'
            },
            {
              product_name: 'Oxford Traveller Skinny',
              product_price: 350,
              product_url: '#'
            }
          ]}
          textStyle={{ color: 'white', textShadow: '0 0 3px black' }}
        />
      </div>
    );
  }
}

export default MEN;
