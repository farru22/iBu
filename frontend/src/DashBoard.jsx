import logo from "./assets/logo.png"
import './App.css'
import axios from "axios"

import React from 'react';
import { useNavigate } from "react-router-dom";

export function DashBoard()
{
    const nav = useNavigate()
    return <div>
        <header>
        <div className="navbar">
          <div className="nav-logo border">
            <div className="logo">
              <img className = "logoImage" src={logo} alt="" />
            </div>
          </div>
          <div className="search-box">
            <select className="Select">
              <option value="Shoes">All</option>
              <option value="Shoes">Sneakers</option>
              <option value="Shoes">Jewellery</option>
              <option value="Shoes">Vintage Cars</option>
              <option value="Shoes">Cloths</option>
              <option value="Shoes">Estates</option>
              <option value="Shoes">Game Id</option>
              <option value="Shoes">Watches</option>
              <option value="Shoes">Books</option>
            </select>
            <input className="placeholder" placeholder="Search Items" />
            <div className="icon-border">
              <button className="searchbutton border"> Search</button>
            </div>
          </div>
          <div className="nav-address border">
            <p className="deliver">Deliver to</p>
            <div className="address-icon">
              {/* <i className="fa-solid fa-location-dot"></i> */}
              <p className="India">India</p>
            </div>
          </div>
          <div className="buy border">
            <p>Buy</p>
            <div className="sell">
              <p className="or">Or</p>
              <p className="Sell">Sell</p>
            </div>
          </div>
          <div className="login-border border">
            <a onClick={()=>{
                nav('/signin')
            }}>Sign in</a>
          </div>
        </div>
        <div className="panel">
          <div className="items">
            <div className="sneaker border">Sneakers</div>
            <div className="jewellery border">Jewellery</div>
            <div className="Vintage Cars border">Vintage Cars</div>
            <div className="Cloths border">Cloths</div>
            <div className="Estates border">Estates</div>
            <div className="Game Id border">Game Id</div>
            <div className="Watches border">Watches</div>
            <div className="Books border">Books</div>
          </div>
        </div>
      </header>
      <div className="hero-sec">
        <div className="message">
          <p>India's Largest Reselling Website.</p>
          <p className="front-d">Start Selling or Buying.</p>
        </div>
      </div>
      <div className="shop-sec">
        <h3 style={{ marginTop: '10px', width: '100%' }}>Recommended for you...<a onClick={()=>{
                nav('/Dash2')
            }}>See more</a></h3>
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
      <footer>
      <div className="HowWorks">
            <h1>How it Works?</h1>
        </div>
        <div className="workImg"></div>
        <div className="contact">
            <h1>To Buy or Sell Any Product?</h1>
            <p>Contact the below contact number for enquiry...</p>
        </div>
        <div className="contactNo">
            <p>Contact-9554993166</p>
            <p>Email-farhanakhtar7869@gmail.com</p>
            <p>Whatsapp no-9554993166</p>
        </div>
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