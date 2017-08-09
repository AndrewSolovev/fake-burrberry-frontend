import React, { Component } from 'react';
import styled from 'styled-components';

import SectionHeading from "./SectionHeading/SectionHeading"
import ProductCardButton from "./ProductCardButton/ProductCardButton"



class Product extends Component {
  render() {
    return (
      <div>
      <section className="container">
        <h1 className="product-card-title">Long Cotton Gabardine Car Coat</h1>
        <div className="row">
          <div className="col-xs-12 col-md-7">

            <div className="product-card-showcase">
              <img src="/bitmap_1.jpg" alt="man in a coat"/>
              <img src="/bitmap_2.jpg" alt="coat closer"/>
              <img src="/bitmap_3.jpg" alt="coat's collar closer"/>
              <img src="/bitmap_4.jpg" alt="man in a coat from behind"/>
            </div>
          </div>
          <div className="col-xs-12 col-md-5">
            <div className="product-card-info-and-buttons">
              <div className="product-card-info">
                <div>
                  <h2 className="product-card-info-price">110 000 руб</h2>
                  <p className="product-card-info-colour">Colour: Honey</p>
                  <button className="product-card-info-button" type="button">change colour to black</button>
                  <button className="product-card-info-button-pressed" type="button">change colour to honey</button>
                </div>
                <p className="product-card-info-itemid">Item 39428531</p>
              </div>
            </div>
            <div className="product-card-buttons">
              <div className="product-card-buttons-container">
                <ProductCardButton buttonName="SELECT A SIZE"></ProductCardButton>
                <ProductCardButton colour="White" buttonName="FIND IN STORE"></ProductCardButton>
              </div>
              <button className="product-card-button-help" type="button">NEED SIZE HELP?</button>
            </div>
          </div>
        </div>
      </section>


      <section className="container">
        <SectionHeading></SectionHeading>
        <div className="product-desc-textarea">
          <p>A refined car coat crafted in protective cotton gabardine.</p>
          <p>Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that protects against wind and rain.</p>
          <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
          <p>The piece is finished with a distinctive check undercollar.</p>
          <ul>
            <li>Coat length: 98cm/38.6in. This is based on a size UK 48 as   proportions change    slightly according to size.</li>
            <li>Outer: 100% cotton</li>
            <li>Check lining: 100% cotton</li>
            <li>Sleeve lining: 100% viscose</li>
            <li>Buttons: buffalo horn</li>
            <li>Specialist dry clean</li>
            <li>Made in Europe</li>
            <li>Item 39428531</li>
          </ul>
        </div>
      </section>


      <section className="container">
        <div className="product-shipping-heading">
          <button className="product-shipping-title-mobile">SHIPPING & RETURNS</button>
        </div>
        <div className="row">
          <div className="col-md-7">
            <img className="product-shipping-img"src="/shipping-img.jpg" alt="two burberry's boxes with tape"/>
          </div>
          <div className="col-md-5">
            <h2 className="product-shipping-title">DELIVERY</h2>
            <h3 className="product-shipping-options-title">Free Next Day Delivery</h3>
              <p className="product-shipping-options-desc">Order before 7pm Monday to Thursday for delivery thenext day</p>
            <h3 className="product-shipping-options-title">Collect-in-Store</h3>
              <p className="product-shipping-options-desc">Order online today and pick up your items in storeas early as tomorrow</p>
            <h3 className="product-shipping-options-title">Free Returns</h3>
              <p className="product-shipping-options-desc">Enjoy free returns on your order</p>
            <h3 className="product-shipping-options-title">Free Gift Packaging</h3>
              <p className="product-shipping-options-desc">Discover our gift packaging, a gold lined box tied with a coloured ribbon</p>
          </div>
        </div>
      </section>


      <section className="container">
        <h2 className="product-recommendations-title">WE RECOMMEND</h2>
        <div className="product-recommendations-goods">
          <div className="row">
            <div className="col-xs-6 col-md-3">
              <a className="product-recommendations-goods-item">
                <img className="product-recommendations-goods-item-img" src="/rec_1.jpg" alt="man in hoodie"/>
                <h3 className="product-recommendations-goods-item-title">Emroided Hooded</h3>
                <h5 className="product-recommendations-goods-item-price">27 000 руб</h5>
              </a>
            </div>
            <div className="col-xs-6 col-md-3">
              <a className="product-recommendations-goods-item">
                <img className="product-recommendations-goods-item-img" src="/rec_2.jpg" alt="man in jeans"/>
                <h3 className="product-recommendations-goods-item-title">Relaxed Fit Stretch Jeans Content For Three Lines</h3>
                <h5 className="product-recommendations-goods-item-price">22 500 руб</h5>
              </a>
            </div>
            <div className="col-xs-6 col-md-3">
              <a className="product-recommendations-goods-item">
                <img className="product-recommendations-goods-item-img" src="/rec_3.jpg" alt="bag"/>
                <h3 className="product-recommendations-goods-item-title">Leather and House Check</h3>
                <h5 className="product-recommendations-goods-item-price">120 000 руб</h5>
              </a>
            </div>
            <div className="col-xs-6 col-md-3">
              <a className="product-recommendations-goods-item">
                <img className="product-recommendations-goods-item-img" src="/rec_4.jpg" alt="shoes"/>
                <h3 className="product-recommendations-goods-item-title">Leather Wingtip Check</h3>
                <h5 className="product-recommendations-goods-item-price">46 000 руб</h5>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="product-moreforyou-title">MORE FOR YOU</h2>
        <a className="product-moreforyou-link">Men's Black Trench Coats</a>
        <a className="product-moreforyou-link">Men's Short Trench Coats</a>
        <a className="product-moreforyou-link">Men's Long Trench Coats</a>
      </section>
      </div>
    );
  }
}

export default Product;
