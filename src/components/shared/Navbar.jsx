import React, { useState, useRef } from "react";

//Icons
import logo from "../../assets/icons/logo.svg";
import searchIcon from "../../assets/icons/search 1.svg";
import globeIcon from "../../assets/icons/globe 1.svg";
import userIcon from "../../assets/icons/user 1.svg";
import cartIcon from "../../assets/icons/shopping-bag 2.svg";
import leftArrow from "../../assets/icons/chevron-left 1.svg";
import hamburgerIcon from "../../assets/icons/view-list 1.svg";
import closeIcon from "../../assets/icons/x 1.svg";
import faceBookIcon from "../../assets/icons/facebook 2.svg";
import instagramIcon from "../../assets/icons/instagram 2.svg";
import twitterIcon from "../../assets/icons/logo-twitter 2.svg";
import pinterestIcon from "../../assets/icons/logo-pinterest 2.svg";
import googleIcon from "../../assets/icons/logo-google 1.svg";
import appleIcon from "../../assets/icons/apple 1.svg";
import plusIcon from "../../assets/icons/plus-sm 1.svg";
import minusIcon from "../../assets/icons/minus-sm 1.svg";
import trashIcon from "../../assets/icons/trash 1.svg";
import testImage from "../../assets/images/Rectangle 1.jpg";

const Navbar = () => {
  const navbar = useRef();
  const menuDrawer = useRef();
  const localizationDrawer = useRef();
  const SearchDrawer = useRef();
  const loginDrawer = useRef();
  const signupDrawer = useRef();
  const cartDrawer = useRef();
  const [womenIsHovered, setWomenIsHovered] = useState(false);
  const [menIsHovered, setMenIsHovered] = useState(false);

  // Hover Handlers

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

  if (womenIsHovered || menIsHovered) {
    document.body.style.backgroundColor = "rgba(0,0,0,0.1)";
  } else {
    document.body.style.backgroundColor = "white";
  }

  // Drawers handler

  const menuDrawerHandler = () => {
    menuDrawer.current.classList.toggle("open-drawer");
    document.body.classList.toggle("apply-opaque");
  };
  const SearchDrawerHandler = () => {
    SearchDrawer.current.classList.toggle("open-drawer");
    document.body.classList.toggle("apply-opaque");
  };
  const localizationDrawerHandler = () => {
    localizationDrawer.current.classList.toggle("open-drawer");
    document.body.classList.toggle("apply-opaque");
  };
  const loginDrawerHandler = () => {
    loginDrawer.current.classList.toggle("open-drawer");
    document.body.classList.toggle("apply-opaque");
  };
  const signupDrawerHandler = (status) => {
    if (status == "open") {
      signupDrawer.current.classList.toggle("open-drawer");
      loginDrawer.current.classList.remove("open-drawer");
    } else if (status == "close") {
      signupDrawer.current.classList.toggle("open-drawer");
      document.body.classList.remove("apply-opaque");
    }
  };
  const cartDrawerHandler = () => {
    cartDrawer.current.classList.toggle("open-drawer");
    document.body.classList.toggle("apply-opaque");
  };

  document.addEventListener("click", (e) => {
    if (
      !navbar.current.contains(e.target) &&
      !localizationDrawer.current.contains(e.target) &&
      !menuDrawer.current.contains(e.target) &&
      !SearchDrawer.current.contains(e.target) &&
      !loginDrawer.current.contains(e.target) &&
      !signupDrawer.current.contains(e.target) &&
      !cartDrawer.current.contains(e.target)
    ) {
      menuDrawer.current.classList.remove("open-drawer");
      SearchDrawer.current.classList.remove("open-drawer");
      localizationDrawer.current.classList.remove("open-drawer");
      loginDrawer.current.classList.remove("open-drawer");
      signupDrawer.current.classList.remove("open-drawer");
      cartDrawer.current.classList.remove("open-drawer");
      document.body.classList.remove("apply-opaque");
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
        <div className="hidden lg:block">
          <ul className="flex-balance space-x-10">
            <li className="group" onMouseEnter={navListHandler}>
              <a className="link-hover" href="#">
                About Us
              </a>
              <div className="hidden group-hover:flex justify-center">
                <div className="absolute top-[68px] border-l-[10px] border-l-[transparent] border-r-[10px] border-r-[transparent]  border-b-[6.6px] border-b-primary-black"></div>
              </div>
            </li>
            <li className="" onMouseEnter={womenListHandler}>
              <a className="link-hover" href="#">
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
              <a className="link-hover" href="#">
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
              <a className="link-hover" href="#">
                Beauty
              </a>
              <div className="hidden group-hover:flex justify-center">
                <div className="absolute top-[68px] border-l-[10px] border-l-[transparent] border-r-[10px] border-r-[transparent]  border-b-[6.6px] border-b-primary-black"></div>
              </div>
            </li>
            <li className="group" onMouseEnter={navListHandler}>
              <a className="link-hover" href="#">
                Accessories
              </a>
              <div className="hidden group-hover:flex justify-center">
                <div className="absolute top-[68px] border-l-[10px] border-l-[transparent] border-r-[10px] border-r-[transparent]  border-b-[6.6px] border-b-primary-black"></div>
              </div>
            </li>
            <li className="group" onMouseEnter={navListHandler}>
              <a className="link-hover" href="#">
                Blog
              </a>
              <div className="hidden group-hover:flex justify-center">
                <div className="absolute top-[68px] border-l-[10px] border-l-[transparent] border-r-[10px] border-r-[transparent]  border-b-[6.6px] border-b-primary-black"></div>
              </div>
            </li>
            <li className="group" onMouseEnter={navListHandler}>
              <a className="link-hover" href="#">
                Contact
              </a>
              <div className="hidden group-hover:flex justify-center">
                <div className="absolute top-[68px] border-l-[10px] border-l-[transparent] border-r-[10px] border-r-[transparent]  border-b-[6.6px] border-b-primary-black"></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex-balance space-x-4 lg:space-x-6">
          <img
            onClick={SearchDrawerHandler}
            className="icon-cursor"
            src={searchIcon}
            alt="searchIcon"
          />
          <img
            onClick={localizationDrawerHandler}
            className="icon-cursor"
            src={globeIcon}
            alt="globeIcon"
          />
          <img
            onClick={loginDrawerHandler}
            className="icon-cursor"
            src={userIcon}
            alt="userIcon"
          />
          <div onClick={cartDrawerHandler} className="relative icon-cursor">
            <span className="absolute -right-[0.7px] -top-1 bg-primary-black text-white text-[8px] font-bold w-4 h-4 rounded-full flex justify-center">
              2
            </span>
            <img src={cartIcon} alt="cartIcon" />
          </div>
          <img
            onClick={menuDrawerHandler}
            className="cursor-pointer lg:hidden"
            src={hamburgerIcon}
            alt="hamburgerIcon"
          />
        </div>
      </nav>
      {/*--- Menu items hover ---*/}
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
                  <img
                    className="w-44 h-[199px]"
                    src={testImage}
                    alt="testImage"
                  />
                </a>
                <small className="opacity-60">Women's tracksuit Q109</small>
                <h6 className="font-bold leading-[normal]">$ 28.99</h6>
              </div>
              <div className="grid gap-1">
                <a href="#">
                  <img
                    className="w-44 h-[199px]"
                    src={testImage}
                    alt="testImage"
                  />
                </a>
                <small className="opacity-60">Women's tracksuit Q109</small>
                <h6 className="font-bold leading-[normal]">$ 28.99</h6>
              </div>
              <div className="grid gap-1">
                <a href="#">
                  <img
                    className="w-44 h-[199px]"
                    src={testImage}
                    alt="testImage"
                  />
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
                  <img
                    className="w-44 h-[199px]"
                    src={testImage}
                    alt="testImage"
                  />
                </a>
                <small className="opacity-60">Women's tracksuit Q109</small>
                <h6 className="font-bold leading-[normal]">$ 28.99</h6>
              </div>
              <div className="grid gap-1">
                <a href="#">
                  <img
                    className="w-44 h-[199px]"
                    src={testImage}
                    alt="testImage"
                  />
                </a>
                <small className="opacity-60">Women's tracksuit Q109</small>
                <h6 className="font-bold leading-[normal]">$ 28.99</h6>
              </div>
              <div className="grid gap-1">
                <a href="#">
                  <img
                    className="w-44 h-[199px]"
                    src={testImage}
                    alt="testImage"
                  />
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
      {/*--- Menu items hover ---*/}

      {/*--- Right drawers ---*/}
      <div ref={menuDrawer} className="lg:hidden drawer-deck">
        <div className="drawer-header">
          <h5>Menu</h5>
          <img
            onClick={menuDrawerHandler}
            className="opacity-60 w-6 cursor-pointer"
            src={closeIcon}
            alt="closeIcon"
          />
        </div>
        <div className="p-6 grid gap-12">
          <ul className="flex flex-col space-y-8">
            <li>
              <a className="link-hover" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="link-hover" href="#">
                Women
              </a>
            </li>
            <li>
              <a className="link-hover" href="#">
                Men
              </a>
            </li>
            <li>
              <a className="link-hover" href="#">
                Beauty
              </a>
            </li>
            <li>
              <a className="link-hover" href="#">
                Accessories
              </a>
            </li>
            <li>
              <a className="link-hover" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="link-hover" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex-balance justify-center space-x-6">
            <a className="link-sm" href="#">
              <img className="icon-lg" src={faceBookIcon} alt="faceBookIcon" />
            </a>
            <a className="link-sm" href="#">
              <img className="icon-lg" src={twitterIcon} alt="twitterIcon" />
            </a>
            <a className="link-sm" href="#">
              <img
                className="icon-lg"
                src={instagramIcon}
                alt="instagramIcon"
              />
            </a>
            <a className="link-sm" href="#">
              <img
                className="icon-lg"
                src={pinterestIcon}
                alt="pinterestIcon"
              />
            </a>
          </div>
        </div>
      </div>
      <div ref={SearchDrawer} className="drawer-deck">
        <div className="drawer-header">
          <h5>Search</h5>
          <img
            onClick={SearchDrawerHandler}
            className="opacity-60 w-6 cursor-pointer"
            src={closeIcon}
            alt="closeIcon"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-col space-y-6 border-b-gray pb-6">
            <div className="relative inline-block">
              <select className="input input-md hidden-appearance ">
                <option value="all-categories">All Categories</option>
              </select>
              <img
                className="-rotate-90 absolute top-4 right-3 w-6 pointer-events-none"
                src={leftArrow}
                alt="leftArrow"
              />
            </div>
            <div className="flex-balance justify-between bg-primary-lightGray pr-3">
              <input
                className="input input-md"
                placeholder="What are you Looking for?"
                type="text"
              />
              <img className="icon-cursor" src={searchIcon} alt="searchIcon" />
            </div>
          </div>
          <div className="flex flex-col">
            <h6 className="my-6">Need some inspiration?</h6>
            <div className="grid gap-6 lg:h-[460px] h-[380px] overflow-y-scroll">
              {/*--- products ---*/}
              <div className="flex w-full space-x-4 cursor-pointer">
                <img className="img-sm" src={testImage} alt="testImage" />
                <div className="flex flex-col space-y-1">
                  <p className="opacity-60">Women's tracksuit Q109</p>
                  <p className="font-bold">$379.99</p>
                </div>
              </div>
              <div className="flex w-full space-x-4 cursor-pointer">
                <img className="img-sm" src={testImage} alt="testImage" />
                <div className="flex flex-col space-y-1">
                  <p className="opacity-60">Women's tracksuit Q109</p>
                  <p className="font-bold">$379.99</p>
                </div>
              </div>
              <div className="flex w-full space-x-4 cursor-pointer">
                <img className="img-sm" src={testImage} alt="testImage" />
                <div className="flex flex-col space-y-1">
                  <p className="opacity-60">Women's tracksuit Q109</p>
                  <p className="font-bold">$379.99</p>
                </div>
              </div>
              <div className="flex w-full space-x-4 cursor-pointer">
                <img className="img-sm" src={testImage} alt="testImage" />
                <div className="flex flex-col space-y-1">
                  <p className="opacity-60">Women's tracksuit Q109</p>
                  <p className="font-bold">$379.99</p>
                </div>
              </div>
              <div className="flex w-full space-x-4 cursor-pointer">
                <img className="img-sm" src={testImage} alt="testImage" />
                <div className="flex flex-col space-y-1">
                  <p className="opacity-60">Women's tracksuit Q109</p>
                  <p className="font-bold">$379.99</p>
                </div>
              </div>
              <div className="flex w-full space-x-4 cursor-pointer">
                <img className="img-sm" src={testImage} alt="testImage" />
                <div className="flex flex-col space-y-1">
                  <p className="opacity-60">Women's tracksuit Q109</p>
                  <p className="font-bold">$379.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={localizationDrawer} className="drawer-deck">
        <div className="drawer-header">
          <h5>Localization</h5>
          <img
            onClick={localizationDrawerHandler}
            className="opacity-60 w-6 cursor-pointer"
            src={closeIcon}
            alt="closeIcon"
          />
        </div>
        <div className="p-6 grid gap-6">
          <ul className="grid gap-1">
            <h5>Language</h5>
            <li className="flex-balance space-x-2">
              <input
                id="english-lang"
                type="radio"
                className="peer"
                name="lang-radio"
                defaultChecked
              />
              <label
                htmlFor="english-lang"
                className="text-[13px] leading-[34px] peer-checked:font-semibold"
              >
                English
              </label>
            </li>
            <li className="flex-balance space-x-2 h-[34px]">
              <input
                id="russian-lang"
                type="radio"
                className="peer"
                name="lang-radio"
              />
              <label
                htmlFor="russian-lang"
                className="text-[13px] leading-[34px peer-checked:font-semibold"
              >
                Українська
              </label>
            </li>
            <li className="flex-balance space-x-2">
              <input
                id="french-lang"
                type="radio"
                className="peer"
                name="lang-radio"
              />
              <label
                htmlFor="french-lang"
                className="text-[13px] leading-[34px] peer-checked:font-semibold"
              >
                Français
              </label>
            </li>
            <li className="flex-balance space-x-2">
              <input
                id="german-lang"
                type="radio"
                className="peer"
                name="lang-radio"
              />
              <label
                htmlFor="german-lang"
                className="text-[13px] leading-[34px] peer-checked:font-semibold"
              >
                Deutsche
              </label>
            </li>
            <li className="flex-balance space-x-2">
              <input
                id="spanish-lang"
                type="radio"
                className="peer"
                name="lang-radio"
              />
              <label
                htmlFor="spanish-lang"
                className="text-[13px] leading-[34px] peer-checked:font-semibold"
              >
                Español
              </label>
            </li>
            <li className="flex-balance space-x-2">
              <input
                id="polish-lang"
                type="radio"
                className="peer"
                name="lang-radio"
              />
              <label
                htmlFor="polish-lang"
                className="text-[13px] leading-[34px] peer-checked:font-semibold"
              >
                Polskie
              </label>
            </li>
            <li className="flex-balance space-x-2">
              <input
                id="turkish-lang"
                type="radio"
                className="peer"
                name="lang-radio"
              />
              <label
                htmlFor="turkish-lang"
                className="text-[13px] leading-[34px] peer-checked:font-semibold"
              >
                Türkçe
              </label>
            </li>
            <li className="flex-balance space-x-2">
              <input
                id="korean-lang"
                type="radio"
                className="peer"
                name="lang-radio"
              />
              <label
                htmlFor="korean-lang"
                className="text-[13px] leading-[34px] peer-checked:font-semibold"
              >
                한국어
              </label>
            </li>
          </ul>
          <ul className="grid gap-1">
            <h5>Currency</h5>
            <li className="flex-balance space-x-2">
              <input
                id="english-cu"
                type="radio"
                className="peer"
                name="cu-radio"
                defaultChecked
              />
              <label
                htmlFor="english-cu"
                className="text-[13px] leading-[34px] peer-checked:font-semibold"
              >
                USD ( US Dollar )
              </label>
            </li>
            <li className="flex-balance space-x-2 h-[34px]">
              <input
                id="ukraine-cu"
                type="radio"
                className="peer"
                name="cu-radio"
              />
              <label
                htmlFor="ukraine-cu"
                className="text-[13px] leading-[34px peer-checked:font-semibold"
              >
                UAH ( Ukraine Hryvnia )
              </label>
            </li>
            <li className="flex-balance space-x-2">
              <input
                id="eur-cu"
                type="radio"
                className="peer"
                name="cu-radio"
              />
              <label
                htmlFor="eur-cu"
                className="text-[13px] leading-[34px] peer-checked:font-semibold"
              >
                EUR ( Euro )
              </label>
            </li>
            <li className="flex-balance space-x-2">
              <input
                id="polish-cu"
                type="radio"
                className="peer"
                name="cu-radio"
              />
              <label
                htmlFor="polish-cu"
                className="text-[13px] leading-[34px] peer-checked:font-semibold"
              >
                PLN ( Polish Zloty )
              </label>
            </li>
            <li className="flex-balance space-x-2">
              <input
                id="turkish-cu"
                type="radio"
                className="peer"
                name="cu-radio"
              />
              <label
                htmlFor="turkish-cu"
                className="text-[13px] leading-[34px] peer-checked:font-semibold"
              >
                TRY ( Turkish Lira )
              </label>
            </li>
            <li className="flex-balance space-x-2">
              <input
                id="korean-cu"
                type="radio"
                className="peer"
                name="cu-radio"
              />
              <label
                htmlFor="korean-cu"
                className="text-[13px] leading-[34px] peer-checked:font-semibold"
              >
                KRW ( Korean Won )
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div ref={loginDrawer} className="drawer-deck">
        <div className="drawer-header">
          <h5>Login</h5>
          <img
            onClick={loginDrawerHandler}
            className="opacity-60 w-6 cursor-pointer"
            src={closeIcon}
            alt="closeIcon"
          />
        </div>
        <div className="p-6 grid gap-6">
          <div className="grid gap-8 border-b-gray pb-11 relative">
            <p>If you have an account with us, please log in.</p>
            <div className="grid gap-2">
              <label className="input-label" htmlFor="login-email">
                Email
              </label>
              <input
                className="input input-md"
                placeholder="Enter your email"
                id="login-email"
                type="text"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex-balance justify-between">
                <label className="input-label" htmlFor="login-password">
                  Password
                </label>
                <small className="opacity-60 cursor-pointer">
                  Lost your password?
                </small>
              </div>
              <input
                className="input input-md"
                placeholder="Enter your password"
                id="login-password"
                type="password"
              />
            </div>
            <button className="btn btn-lg btn-black">Login</button>
            <span className="absolute -bottom-4 lg:left-[120px] left-[100px] bg-white rounded-full w-16 h-8 flex-balance justify-center ">
              or
            </span>
          </div>
          <div className="flex flex-col lg:h-[40vh] h-[25vh] justify-between items-center">
            <div className="flex-balance space-x-4">
              <a href="#">
                <img
                  className="icon-xl"
                  src={faceBookIcon}
                  alt="faceBookIcon"
                />
              </a>
              <a href="#">
                <img className="icon-xl" src={googleIcon} alt="googleIcon" />
              </a>
              <a href="#">
                <img className="icon-xl" src={appleIcon} alt="appleIcon" />
              </a>
            </div>
            <div className="w-full text-center grid gap-4">
              <p>New Customer?</p>
              <button
                onClick={() => signupDrawerHandler("open")}
                className="btn btn-md btn-gray w-full"
              >
                Create your account
              </button>
            </div>
          </div>
        </div>
      </div>
      <div ref={signupDrawer} className="drawer-deck">
        <div className="drawer-header">
          <h5>Sign up</h5>
          <img
            onClick={() => signupDrawerHandler("close")}
            className="opacity-60 w-6 cursor-pointer"
            src={closeIcon}
            alt="closeIcon"
          />
        </div>
        <div className="p-6 grid gap-6">
          <div className="grid gap-8 border-b-gray pb-11 relative">
            <div className="grid gap-2">
              <label className="input-label" htmlFor="signup-username">
                Username
              </label>
              <input
                className="input input-md"
                placeholder="Enter your username"
                id="signup-username"
                type="text"
              />
            </div>
            <div className="grid gap-2">
              <label className="input-label" htmlFor="signup-email">
                Email
              </label>
              <input
                className="input input-md"
                placeholder="Enter your email"
                id="signup-email"
                type="text"
              />
            </div>
            <div className="grid gap-2">
              <label className="input-label" htmlFor="signup-password">
                Password
              </label>
              <input
                className="input input-md"
                placeholder="Enter your password"
                id="signup-password"
                type="password"
              />
            </div>
            <div className="grid gap-2">
              <label className="input-label" htmlFor="signup-confirm-password">
                Confirm Password
              </label>
              <input
                className="input input-md"
                placeholder="Enter your confirm password"
                id="signup-confirm-password"
                type="password"
              />
            </div>
            <button className="btn btn-lg btn-black">Sign Up</button>
            <span className="absolute -bottom-4 lg:left-[120px] left-[100px] bg-white rounded-full w-16 h-8 flex-balance justify-center ">
              or
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex-balance space-x-4">
              <a href="#">
                <img
                  className="icon-xl"
                  src={faceBookIcon}
                  alt="faceBookIcon"
                />
              </a>
              <a href="#">
                <img className="icon-xl" src={googleIcon} alt="googleIcon" />
              </a>
              <a href="#">
                <img className="icon-xl" src={appleIcon} alt="appleIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div ref={cartDrawer} className="drawer-deck">
        <div className="drawer-header">
          <h5>Shopping Cart</h5>
          <img
            onClick={cartDrawerHandler}
            className="opacity-60 w-6 cursor-pointer"
            src={closeIcon}
            alt="closeIcon"
          />
        </div>
        <div className="p-6 grid gap-10">
          <div className="flex flex-col space-y-3 lg:h-[460px] h-[380px] overflow-y-scroll">
            {/*--- products ---*/}
            <div className="flex w-full space-x-4 border-b-gray pb-3">
              <img className="img-sm cursor-pointer" src={testImage} alt="testImage" />
              <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col space-y-1">
                  <p className="opacity-60">Women's tracksuit Q109</p>
                  <p className="font-bold">$379.99</p>
                </div>
                <div className="flex-balance justify-between w-full">
                  <div className="flex-balance w-20 justify-between bg-primary-lightGray p-1">
                    <img className="w-[18px] icon-cursor hover:bg-primary-gray duration-300" src={minusIcon} alt="minusIcon" />
                    <p>1</p>
                    <img className="w-[18px] icon-cursor hover:bg-primary-gray duration-300" src={plusIcon} alt="plusIcon" />
                  </div>
                    <p className="font-bold">$379.99</p>
                    <img className="icon-cursor" src={trashIcon} alt="trashIcon" />
                </div>
              </div>
            </div>
            <div className="flex w-full space-x-4 border-b-gray pb-3">
              <img className="img-sm cursor-pointer" src={testImage} alt="testImage" />
              <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col space-y-1">
                  <p className="opacity-60">Women's tracksuit Q109</p>
                  <p className="font-bold">$379.99</p>
                </div>
                <div className="flex-balance justify-between w-full">
                  <div className="flex-balance w-20 justify-between bg-primary-lightGray p-1">
                    <img className="w-[18px] icon-cursor hover:bg-primary-gray duration-300" src={minusIcon} alt="minusIcon" />
                    <p>1</p>
                    <img className="w-[18px] icon-cursor hover:bg-primary-gray duration-300" src={plusIcon} alt="plusIcon" />
                  </div>
                    <p className="font-bold">$379.99</p>
                    <img className="icon-cursor" src={trashIcon} alt="trashIcon" />
                </div>
              </div>
            </div>
            <div className="flex w-full space-x-4 border-b-gray pb-3">
              <img className="img-sm cursor-pointer" src={testImage} alt="testImage" />
              <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col space-y-1">
                  <p className="opacity-60">Women's tracksuit Q109</p>
                  <p className="font-bold">$379.99</p>
                </div>
                <div className="flex-balance justify-between w-full">
                  <div className="flex-balance w-20 justify-between bg-primary-lightGray p-1">
                    <img className="w-[18px] icon-cursor hover:bg-primary-gray duration-300" src={minusIcon} alt="minusIcon" />
                    <p>1</p>
                    <img className="w-[18px] icon-cursor hover:bg-primary-gray duration-300" src={plusIcon} alt="plusIcon" />
                  </div>
                    <p className="font-bold">$379.99</p>
                    <img className="icon-cursor" src={trashIcon} alt="trashIcon" />
                </div>
              </div>
            </div>
            <div className="flex w-full space-x-4 border-b-gray pb-3">
              <img className="img-sm cursor-pointer" src={testImage} alt="testImage" />
              <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col space-y-1">
                  <p className="opacity-60">Women's tracksuit Q109</p>
                  <p className="font-bold">$379.99</p>
                </div>
                <div className="flex-balance justify-between w-full">
                  <div className="flex-balance w-20 justify-between bg-primary-lightGray p-1">
                    <img className="w-[18px] icon-cursor hover:bg-primary-gray duration-300" src={minusIcon} alt="minusIcon" />
                    <p>1</p>
                    <img className="w-[18px] icon-cursor hover:bg-primary-gray duration-300" src={plusIcon} alt="plusIcon" />
                  </div>
                    <p className="font-bold">$379.99</p>
                    <img className="icon-cursor" src={trashIcon} alt="trashIcon" />
                </div>
              </div>
            </div>
            <div className="flex w-full space-x-4 border-b-gray pb-3">
              <img className="img-sm cursor-pointer" src={testImage} alt="testImage" />
              <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col space-y-1">
                  <p className="opacity-60">Women's tracksuit Q109</p>
                  <p className="font-bold">$379.99</p>
                </div>
                <div className="flex-balance justify-between w-full">
                  <div className="flex-balance w-20 justify-between bg-primary-lightGray p-1">
                    <img className="w-[18px] icon-cursor hover:bg-primary-gray duration-300" src={minusIcon} alt="minusIcon" />
                    <p>1</p>
                    <img className="w-[18px] icon-cursor hover:bg-primary-gray duration-300" src={plusIcon} alt="plusIcon" />
                  </div>
                    <p className="font-bold">$379.99</p>
                    <img className="icon-cursor" src={trashIcon} alt="trashIcon" />
                </div>
              </div>
            </div>
            <div className="flex w-full space-x-4 border-b-gray pb-3">
              <img className="img-sm cursor-pointer" src={testImage} alt="testImage" />
              <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col space-y-1">
                  <p className="opacity-60">Women's tracksuit Q109</p>
                  <p className="font-bold">$379.99</p>
                </div>
                <div className="flex-balance justify-between w-full">
                  <div className="flex-balance w-20 justify-between bg-primary-lightGray p-1">
                    <img className="w-[18px] icon-cursor hover:bg-primary-gray duration-300" src={minusIcon} alt="minusIcon" />
                    <p>1</p>
                    <img className="w-[18px] icon-cursor hover:bg-primary-gray duration-300" src={plusIcon} alt="plusIcon" />
                  </div>
                    <p className="font-bold">$379.99</p>
                    <img className="icon-cursor" src={trashIcon} alt="trashIcon" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="flex-balance justify-between mb-3">
              <p>Total</p>
              <h4>$433.99</h4>
            </div>
            <button className="btn btn-lg btn-black">Check out</button>
            <button className="btn btn-lg btn-gray">Clear</button>
          </div>
        </div>
      </div>
      {/*--- Right drawers ---*/}
    </>
  );
};

export default Navbar;
