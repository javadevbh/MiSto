import React, { useState, useRef } from "react";

//Icons
import logo from "../../assets/icons/logo.svg";
import searchIcon from "../../assets/icons/search 1.svg";
import globeIcon from "../../assets/icons/globe 1.svg";
import userIcon from "../../assets/icons/user 1.svg";
import cartIcon from "../../assets/icons/shopping-bag 2.svg";
import leftArrow from "../../assets/icons/chevron-left 1.svg";
import testImage from "../../assets/images/Rectangle 1.jpg";

const Navbar = () => {
  const navbar = useRef();
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

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      navbar.current.classList.remove("top-0");
    } else {
      navbar.current.classList.add("top-0");
    }
  });

  return (
    <>
      <nav
        ref={navbar}
        onMouseLeave={navListHandler}
        className="px-content py-6 flex-balance justify-between border-b border-primary-lightGray bg-white fixed w-full z-50"
      >
        <div>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div>
          <ul className="flex-balance space-x-10">
            <li className="group" onMouseEnter={navListHandler}>
              <a className="hover:font-bold transition-all" href="#">
                About Us
              </a>
              <div className="hidden group-hover:flex justify-center">
                <div className="absolute top-[68px] border-l-[10px] border-l-[transparent] border-r-[10px] border-r-[transparent]  border-b-[6.6px] border-b-primary-black"></div>
              </div>
            </li>
            <li className="" onMouseEnter={womenListHandler}>
              <a className="hover:font-bold transition-all" href="#">
                Women
              </a>
              {womenIsHovered ? (
                <div className="show-element flex justify-center">
                  <div className="absolute top-[68px] border-l-[10px] border-l-[transparent] border-r-[10px] border-r-[transparent]  border-b-[6.6px] border-b-primary-black"></div>
                </div>
              ) : (
                <div className="hidden-element flex justify-center">
                  <div className="absolute top-[68px] border-l-[10px] border-l-[transparent] border-r-[10px] border-r-[transparent]  border-b-[6.6px] border-b-primary-black"></div>
                </div>
              )}
            </li>
            <li onMouseEnter={menListHandler}>
              <a className="hover:font-bold transition-all" href="#">
                Men
              </a>
              {menIsHovered ? (
                <div className="show-element flex justify-center">
                  <div className="absolute top-[68px] border-l-[10px] border-l-[transparent] border-r-[10px] border-r-[transparent]  border-b-[6.6px] border-b-primary-black"></div>
                </div>
              ) : (
                <div className="hidden-element flex justify-center">
                  <div className="absolute top-[68px] border-l-[10px] border-l-[transparent] border-r-[10px] border-r-[transparent]  border-b-[6.6px] border-b-primary-black"></div>
                </div>
              )}
            </li>
            <li className="group" onMouseEnter={navListHandler}>
              <a className="hover:font-bold transition-all" href="#">
                Beauty
              </a>
              <div className="hidden group-hover:flex justify-center">
                <div className="absolute top-[68px] border-l-[10px] border-l-[transparent] border-r-[10px] border-r-[transparent]  border-b-[6.6px] border-b-primary-black"></div>
              </div>
            </li>
            <li className="group" onMouseEnter={navListHandler}>
              <a className="hover:font-bold transition-all" href="#">
                Accessories
              </a>
              <div className="hidden group-hover:flex justify-center">
                <div className="absolute top-[68px] border-l-[10px] border-l-[transparent] border-r-[10px] border-r-[transparent]  border-b-[6.6px] border-b-primary-black"></div>
              </div>
            </li>
            <li className="group" onMouseEnter={navListHandler}>
              <a className="hover:font-bold transition-all" href="#">
                Blog
              </a>
              <div className="hidden group-hover:flex justify-center">
                <div className="absolute top-[68px] border-l-[10px] border-l-[transparent] border-r-[10px] border-r-[transparent]  border-b-[6.6px] border-b-primary-black"></div>
              </div>
            </li>
            <li className="group" onMouseEnter={navListHandler}>
              <a className="hover:font-bold transition-all" href="#">
                Contact
              </a>
              <div className="hidden group-hover:flex justify-center">
                <div className="absolute top-[68px] border-l-[10px] border-l-[transparent] border-r-[10px] border-r-[transparent]  border-b-[6.6px] border-b-primary-black"></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex-balance space-x-6">
          <img className="cursor-pointer" src={searchIcon} alt="searchIcon" />
          <img className="cursor-pointer" src={globeIcon} alt="globeIcon" />
          <img className="cursor-pointer" src={userIcon} alt="userIcon" />
          <div className="relative cursor-pointer">
            <span className="absolute -right-[0.7px] -top-1 bg-primary-black text-white text-[8px] font-bold w-4 h-4 rounded-full flex justify-center">
              2
            </span>
            <img src={cartIcon} alt="cartIcon" />
          </div>
        </div>
      </nav>
      {womenIsHovered ? (
        <div
          onMouseEnter={() => setWomenIsHovered(true)}
          onMouseLeave={() => setWomenIsHovered(false)}
          className="show-element flex justify-between px-content py-8 w-full border-t-2 border-primary-black absolute top-28 bg-white z-40"
        >
          <div className="flex flex-col">
            <h5 className="mb-3">Tops</h5>
            <div className="grid gap-1">
              <a href="#" className="link-md">
                Awesome
              </a>
              <a href="#" className="link-md">
                Beachwear
              </a>
              <a href="#" className="link-md">
                Beige
              </a>
              <a href="#" className="link-md">
                Cool New
              </a>
              <a href="#" className="link-md">
                Dress
              </a>
              <a href="#" className="link-md">
                Gap
              </a>
              <a href="#" className="link-md">
                Guess
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="mb-3">Bottoms</h5>
            <div className="grid gap-1">
              <a href="#" className="link-md">
                Awesome
              </a>
              <a href="#" className="link-md">
                Beachwear
              </a>
              <a href="#" className="link-md">
                Beige
              </a>
              <a href="#" className="link-md">
                Cool New
              </a>
              <a href="#" className="link-md">
                Dress
              </a>
              <a href="#" className="link-md">
                Gap
              </a>
              <a href="#" className="link-md">
                Guess
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="mb-3">Accessories</h5>
            <div className="grid gap-1">
              <a href="#" className="link-md">
                Awesome
              </a>
              <a href="#" className="link-md">
                Beachwear
              </a>
              <a href="#" className="link-md">
                Beige
              </a>
              <a href="#" className="link-md">
                Cool New
              </a>
              <a href="#" className="link-md">
                Dress
              </a>
              <a href="#" className="link-md">
                Gap
              </a>
              <a href="#" className="link-md">
                Guess
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-6 flex-balance justify-between">
              <h5>BestSellers</h5>
              <div className="flex-balance space-x-5">
                <img
                  className="hover:arrow-hover transition-all duration-300"
                  src={leftArrow}
                  alt="arrow"
                />
                <img
                  className="hover:arrow-hover transition-all duration-300 rotate-180"
                  src={leftArrow}
                  alt="arrow"
                />
              </div>
            </div>
            <div className="flex-balance space-x-8">
              <div className="grid gap-1">
                <a href="#">
                  <img className="w-44 h-[199px]" src={testImage} alt="testImage" />
                </a>
                <small className="opacity-60">Women's tracksuit Q109</small>
                <h6 className="font-bold leading-[normal]">$ 28.99</h6>
              </div>
              <div className="grid gap-1">
                <a href="#">
                  <img className="w-44 h-[199px]" src={testImage} alt="testImage" />
                </a>
                <small className="opacity-60">Women's tracksuit Q109</small>
                <h6 className="font-bold leading-[normal]">$ 28.99</h6>
              </div>
              <div className="grid gap-1">
                <a href="#">
                  <img className="w-44 h-[199px]" src={testImage} alt="testImage" />
                </a>
                <small className="opacity-60">Women's tracksuit Q109</small>
                <h6 className="font-bold leading-[normal]">$ 28.99</h6>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden-element  border-t-2 border-primary-black absolute -top-28"></div>
      )}
      {menIsHovered ? (
        <div
          onMouseEnter={() => setMenIsHovered(true)}
          onMouseLeave={() => setMenIsHovered(false)}
          className="show-element flex justify-between px-content py-8 w-full border-t-2 border-primary-black absolute top-28 bg-white z-40"
        >
          <div className="flex flex-col">
            <h5 className="mb-3">Tops</h5>
            <div className="grid gap-1">
              <a href="#" className="link-md">
                Awesome
              </a>
              <a href="#" className="link-md">
                Beachwear
              </a>
              <a href="#" className="link-md">
                Beige
              </a>
              <a href="#" className="link-md">
                Cool New
              </a>
              <a href="#" className="link-md">
                Dress
              </a>
              <a href="#" className="link-md">
                Gap
              </a>
              <a href="#" className="link-md">
                Guess
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="mb-3">Bottoms</h5>
            <div className="grid gap-1">
              <a href="#" className="link-md">
                Awesome
              </a>
              <a href="#" className="link-md">
                Beachwear
              </a>
              <a href="#" className="link-md">
                Beige
              </a>
              <a href="#" className="link-md">
                Cool New
              </a>
              <a href="#" className="link-md">
                Dress
              </a>
              <a href="#" className="link-md">
                Gap
              </a>
              <a href="#" className="link-md">
                Guess
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="mb-3">Accessories</h5>
            <div className="grid gap-1">
              <a href="#" className="link-md">
                Awesome
              </a>
              <a href="#" className="link-md">
                Beachwear
              </a>
              <a href="#" className="link-md">
                Beige
              </a>
              <a href="#" className="link-md">
                Cool New
              </a>
              <a href="#" className="link-md">
                Dress
              </a>
              <a href="#" className="link-md">
                Gap
              </a>
              <a href="#" className="link-md">
                Guess
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-6 flex-balance justify-between">
              <h5>BestSellers</h5>
              <div className="flex-balance space-x-5">
                <img
                  className="hover:arrow-hover transition-all duration-300"
                  src={leftArrow}
                  alt="arrow"
                />
                <img
                  className="hover:arrow-hover transition-all duration-300 rotate-180"
                  src={leftArrow}
                  alt="arrow"
                />
              </div>
            </div>
            <div className="flex-balance space-x-8">
              <div className="grid gap-1">
                <a href="#">
                  <img className="w-44 h-[199px]" src={testImage} alt="testImage" />
                </a>
                <small className="opacity-60">Women's tracksuit Q109</small>
                <h6 className="font-bold leading-[normal]">$ 28.99</h6>
              </div>
              <div className="grid gap-1">
                <a href="#">
                  <img className="w-44 h-[199px]" src={testImage} alt="testImage" />
                </a>
                <small className="opacity-60">Women's tracksuit Q109</small>
                <h6 className="font-bold leading-[normal]">$ 28.99</h6>
              </div>
              <div className="grid gap-1">
                <a href="#">
                  <img className="w-44 h-[199px]" src={testImage} alt="testImage" />
                </a>
                <small className="opacity-60">Women's tracksuit Q109</small>
                <h6 className="font-bold leading-[normal]">$ 28.99</h6>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" hidden-element  border-t-2 border-primary-black absolute -top-28"></div>
      )}
    </>
  );
};

export default Navbar;
