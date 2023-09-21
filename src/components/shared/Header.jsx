import React from "react";

//Components
import Navbar from "./Navbar";

//Icons
import locationIcon from "../../assets/icons/location-marker 2.svg";
import phoneIcon from "../../assets/icons/phone 2.svg";
import clockIcon from "../../assets/icons/clock 2.svg";
import faceBookIcon from "../../assets/icons/facebook 1.svg";
import instagramIcon from "../../assets/icons/instagram 1.svg";
import twitterIcon from "../../assets/icons/logo-twitter 1.svg";
import pinterestIcon from "../../assets/icons/logo-pinterest 1.svg";

const Header = () => {
  return (
    <header>
      {/*--- Top Bar ---*/}
      <div className="w-full bg-primary-black px-content py-1 flex-balance justify-between">
        <div className="flex-balance sm:space-x-4">
          <div className="sm:flex-balance space-x-2 hidden">
            <img className="icon-sm" src={phoneIcon} alt="phoneIcon" />
            <small className="text-white/80">+38 (050) 12 34 567</small>
          </div>
          <div className="md:flex-balance space-x-2 hidden">
            <img className="icon-sm" src={locationIcon} alt="locationIcon" />
            <small className="text-white/80">
              Ukraine, Kyiv,Khreshchatyk 1
            </small>
          </div>
          <div className="flex-balance space-x-2">
            <img className="icon-sm" src={clockIcon} alt="clockIcon" />
            <small className="text-white/80">All week 24/7</small>
          </div>
        </div>
        <div className="flex-balance space-x-2">
          <a className="link-sm" href="#">
            <img className="icon-sm" src={faceBookIcon} alt="faceBookIcon" />
          </a>
          <a className="link-sm" href="#">
            <img className="icon-sm" src={twitterIcon} alt="twitterIcon" />
          </a>
          <a className="link-sm" href="#">
            <img className="icon-sm" src={instagramIcon} alt="instagramIcon" />
          </a>
          <a className="link-sm" href="#">
            <img className="icon-sm" src={pinterestIcon} alt="pinterestIcon" />
          </a>
        </div>
      </div>
      {/*--- Navbar ---*/}
      <Navbar />
    </header>
  );
};

export default Header;
