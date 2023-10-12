import React from "react";

//Icons
import locationIcon from "../../assets/icons/location-marker 1.svg";
import phoneIcon from "../../assets/icons/phone 1.svg";
import clockIcon from "../../assets/icons/clock 1.svg";
import mailIcon from "../../assets/icons/mail 1.svg";
import faceBookIcon from "../../assets/icons/facebook 1.svg";
import instagramIcon from "../../assets/icons/instagram 1.svg";
import twitterIcon from "../../assets/icons/logo-twitter 1.svg";
import pinterestIcon from "../../assets/icons/logo-pinterest 1.svg";

//Images
import brand1 from "../../assets/images/brands logo/Stripe_x42.jpg";
import brand2 from "../../assets/images/brands logo/AES256_x42.jpg";
import brand3 from "../../assets/images/brands logo/paypal_2_x42.jpg";
import brand4 from "../../assets/images/brands logo/visa_x42.jpg";
import brand5 from "../../assets/images/brands logo/mastercard_x42.jpg";
import brand6 from "../../assets/images/brands logo/discover_x42.jpg";
import brand7 from "../../assets/images/brands logo/american-express_x42.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="px-content py-3 bg-primary-black text-white md:flex-balance md:flex-row md:space-y-0 md:justify-between flex space-y-2 flex-col items-center">
        <h6>Be in touch with us:</h6>
        <div className="flex-balance space-x-3">
          <input className="input input-lg md:w-[400px] w-52" placeholder="Enter your email" type="email" />
          <button className="btn btn-sm btn-blur text-xs leading-[18px] font-semibold opacity-90">Join us</button>
        </div>
        <div className="hidden lg:flex-balance space-x-3">
          <a className="link-sm" href="#">
            <img className="icon-md" src={faceBookIcon} alt="faceBookIcon" />
          </a>
          <a className="link-sm" href="#">
            <img className="icon-md" src={twitterIcon} alt="twitterIcon" />
          </a>
          <a className="link-sm" href="#">
            <img className="icon-md" src={instagramIcon} alt="instagramIcon" />
          </a>
          <a className="link-sm" href="#">
            <img className="icon-md" src={pinterestIcon} alt="pinterestIcon" />
          </a>
        </div>
      </div>
      <div className="px-content py-10 flex-balance justify-between flex-wrap md:gap-0 gap-4 ">
        <div className="grid gap-1 sm:order-1 order-1">
            <h6 className="leading-normal">Categories</h6>
            <div className="grid gap-[2px]">
                <a className="link-sm" href="#">Men</a>
                <a className="link-sm" href="#">Women</a>
                <a className="link-sm" href="#">Accessories</a>
                <a className="link-sm" href="#">Beauty</a>
            </div>
        </div>
        <div className="grid gap-1 sm:order-2 order-3">
            <h6 className="leading-normal">Information</h6>
            <div className="grid gap-[2px]">
                <a className="link-sm" href="#">About Us</a>
                <a className="link-sm" href="#">Contact Us</a>
                <a className="link-sm" href="#">Blog</a>
                <a className="link-sm" href="#">FAQs</a>
            </div>
        </div>
        <div className="grid gap-1 sm:order-3 sm:m-0 order-4 mr-16">
            <h6 className="leading-normal">Useful Links</h6>
            <div className="grid gap-[2px]">
                <a className="link-sm" href="#">Terms & Conditions</a>
                <a className="link-sm" href="#">Returns & Exchanges</a>
                <a className="link-sm" href="#">Shipping & Delivery</a>
                <a className="link-sm" href="#">Delivery Privacy Policy</a>
            </div>
        </div>
        <div className="grid gap-1 sm:order-4 order-2">
            <h6 className="leading-normal">Contact Us</h6>
            <div className="grid gap-[2px]">
                <div className="flex-balance space-x-2">
                    <img className="icon-md" src={locationIcon} alt="locationIcon" />
                    <a className="link-sm" href="#">Ukraine, Kyiv,Khreshchatyk 1</a>
                </div>
                <div className="flex-balance space-x-2">
                    <img className="icon-md" src={phoneIcon} alt="phoneIcon" />
                    <a className="link-sm" href="#">+38 (050) 12 34 567</a>
                </div>
                <div className="flex-balance space-x-2">
                    <img className="icon-md" src={clockIcon} alt="clockIcon" />
                    <a className="link-sm" href="#">All week 24/7</a>
                </div>
                <div className="flex-balance space-x-2">
                    <img className="icon-md" src={mailIcon} alt="mailIcon" />
                    <a className="link-sm" href="mailto:javadev14bh@gmail.com">Javadev14bh@gmail.com</a>
                </div>
            </div>
        </div>
      </div>
      <div className="px-content bg-primary-lightGray py-2 flex-balance justify-between flex-wrap lg:gap-0 gap-4">
        <div className="lg:order-1 order-3 sm:m-0 mx-auto">
            <small className="leading-[22px] opacity-80">Copyright © 2023 all rights reserved</small>
        </div>
        <div className="flex-balance space-x-3 flex-wrap sm:gap-0 gap-3 lg:order-2 order-2 mx-auto sm:mx-0">
            <img src={brand1} alt="brand1" />
            <img src={brand2} alt="brand2" />
            <img src={brand3} alt="brand3" />
            <img src={brand4} alt="brand4" />
            <img src={brand5} alt="brand5" />
            <img className="hidden sm:block" src={brand6} alt="brand6" />
            <img className="hidden sm:block" src={brand7} alt="brand7" />
        </div>
        <div className="sm:flex-balance sm:space-x-3 grid lg:order-3 order-1 sm:m-0 mx-auto">
            <a className="link-sm" href="https://www.figma.com/exit?url=https%3A%2F%2Fwww.behance.net%2Fshamandesign">Designed by <b>Oleh Chabanov</b></a>
            <a className="link-sm" href="https://github.com/javadevbh/">Developed by <b>Javad Bahrami</b></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
