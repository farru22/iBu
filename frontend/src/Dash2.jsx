import logo from "./assets/logo.png"
import './App.css'
import axios from "axios"

import React from 'react';
import { useNavigate } from "react-router-dom";

export function Dash2()
{
    const nav = useNavigate()
    return <div>
        <header>
      <div className="shop-sec">
        <h3 style={{ marginTop: '10px', width: '100%' }}>Recommended for you...<a href="index3.html" style={{ textDecoration: 'none', color: 'beige' }}>See more</a></h3>
        <div className="box">
          <div className="box-content">
            <div className="box-img1"></div>
            <h2>Jordan Trophy Room</h2>
            <h4>Lowest Ask</h4>
            <p style={{ fontSize: '25px' }}>$650</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div className="box-img2"></div>
            <h2>Jordan Chicago Lost and Found</h2>
            <h4>Lowest Ask</h4>
            <p style={{ fontSize: '25px' }}>$400</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div className="box-img3"></div>
            <h2>Jordan low Alternate Royal Toe</h2>
            <h4>Lowest Ask</h4>
            <p style={{ fontSize: '25px' }}>$350</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div className="box-img4"></div>
            <h2>Rolex Daytona Green Perpetual</h2>
            <h4>Lowest Ask</h4>
            <p style={{ fontSize: '25px' }}>$3 Million</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div className="box-img5"></div>
            <h2>Rolex Day Date OYSTER Perpetual</h2>
            <h4>Lowest Ask</h4>
            <p style={{ fontSize: '25px' }}>$450,000</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div className="box-img6"></div>
            <h2>Patek Philippe Tiffany Blue </h2>
            <h4>Lowest Ask</h4>
            <p style={{ fontSize: '25px' }}>$600,000</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div className="box-img7"></div>
            <h2>Louis Vuitton Emborsed Shirt</h2>
            <h4>Lowest Ask</h4>
            <p style={{ fontSize: '25px' }}>$1200</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div className="box-img8"></div>
            <h2>Ford Mustang 1990</h2>
            <h4>Lowest Ask</h4>
            <p style={{ fontSize: '25px' }}>$300,000</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div className="box-img9"></div>
            <h2>Moon Land On Sale</h2>
            <h4>Starting Ask</h4>
            <p style={{ fontSize: '25px' }}>$4000</p>
          </div>
        </div>
        {/* Similarly add other boxes */}
      </div>
      </header>
      <footer>
        <div className="foot-panel1">
          Back to Top
        </div>
        <div className="foot-panel2">
          <ul>
            <h4>iBuy365</h4>
            <a href="">About Us</a>
            <a href="">Newsletter</a>
            <a href="">Blogs</a>
            <a href="">Sales</a>
          </ul>
          <ul>
            <h4>Legal</h4>
            <a href="">User Agreement</a>
            <a href="">Policies</a>
            <a href="">Copyright</a>
            <a href="">Cookie</a>
          </ul>
          <ul>
            <h4>Support</h4>
            <a href="">Help Center</a>
            <a href="">Contact Us</a>
            <a href="">How to Buy</a>
            <a href="">How to Sell</a>
            <a href="">Accessibility Statement</a>
          </ul>
          <div className="Mode">
            <p>Mode of payment</p>
            <div className="payment"></div>
          </div>
        </div>
      </footer>
    </div>
}