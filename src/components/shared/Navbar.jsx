import React, { useState } from "react";

//Icons
import logo from "../../assets/icons/logo.svg";
import searchIcon from "../../assets/icons/search 1.svg";
import globeIcon from "../../assets/icons/globe 1.svg";
import userIcon from "../../assets/icons/user 1.svg";
import cartIcon from "../../assets/icons/shopping-bag 2.svg";

const Navbar = () => {
  const [womenIsHovered, setWomenIsHovered] = useState(false);
  const [menIsHovered, setMenIsHovered] = useState(false);

  const womenListHandler = () => {
    setMenIsHovered(false);
    setWomenIsHovered(true);
  };

  const menListHandler = () => {
    setWomenIsHovered(false);
    setMenIsHovered(true);
  };

  const navListHandler = () => {
    setWomenIsHovered(false);
    setMenIsHovered(false);
  };

  return (
    <>
      <nav
        onMouseLeave={navListHandler}
        className="px-content py-6 flex-balance justify-between border-b border-primary-lightGray"
      >
        <div>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div>
          <ul className="flex-balance space-x-10">
            <li>
              <a className="hover:font-bold transition-all" href="#">
                About Us
              </a>
            </li>
            <li className="" onMouseEnter={womenListHandler}>
              <a className="hover:font-bold transition-all" href="#">
                Women
              </a>
              {womenIsHovered ? (
                <div class="show-element flex justify-center">
                  <div class="absolute top-[91px] border-l-[10px] border-l-[transparent] border-r-[10px] border-r-[transparent]  border-b-[6.6px] border-b-primary-black"></div>
                </div>
              ) : (
                <div class="hidden-element flex justify-center">
                  <div class="absolute top-[91px] border-l-[10px] border-l-[transparent] border-r-[10px] border-r-[transparent]  border-b-[6.6px] border-b-primary-black"></div>
                </div>
              )}
            </li>
            <li className="group" onMouseEnter={menListHandler}>
              <a className="hover:font-bold transition-all" href="#">
                Men
              </a>
              {menIsHovered ? (
                <div class="show-element flex justify-center">
                  <div class="absolute top-[93px] border-l-[10px] border-l-[transparent] border-r-[10px] border-r-[transparent]  border-b-[6.6px] border-b-primary-black"></div>
                </div>
              ) : (
                <div class="hidden-element flex justify-center">
                  <div class="absolute top-[91px] border-l-[10px] border-l-[transparent] border-r-[10px] border-r-[transparent]  border-b-[6.6px] border-b-primary-black"></div>
                </div>
              )}
            </li>
            <li>
              <a className="hover:font-bold transition-all" href="#">
                Beauty
              </a>
            </li>
            <li>
              <a className="hover:font-bold transition-all" href="#">
                Accessories
              </a>
            </li>
            <li>
              <a className="hover:font-bold transition-all" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:font-bold transition-all" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-balance space-x-6">
          <img className="cursor-pointer" src={searchIcon} alt="searchIcon" />
          <img className="cursor-pointer" src={globeIcon} alt="globeIcon" />
          <img className="cursor-pointer" src={userIcon} alt="userIcon" />
          <div className="relative">
            <span className="absolute -right-[0.7px] -top-1 bg-primary-black text-white text-[8px] font-bold w-4 h-4 rounded-full flex justify-center">
              2
            </span>
            <img className="cursor-pointer" src={cartIcon} alt="cartIcon" />
          </div>
        </div>
      </nav>
      {womenIsHovered ? (
        <div
          onMouseEnter={() => setWomenIsHovered(true)}
          onMouseLeave={() => setWomenIsHovered(false)}
          className=" show-element px-content py-8 w-full border-t-2 border-primary-black"
        ></div>
      ) : (
        <div className=" hidden-element  border-t-2 border-primary-black"></div>
      )}
      {menIsHovered ? (
        <div
          onMouseEnter={() => setMenIsHovered(true)}
          onMouseLeave={() => setMenIsHovered(false)}
          className=" show-element px-content py-8 w-full border-t-2 border-primary-black"
        ></div>
      ) : (
        <div className=" hidden-element  border-t-2 border-primary-black"></div>
      )}
    </>
  );
};

export default Navbar;