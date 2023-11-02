import React, { useRef } from "react";

//Loader
import Loading from "./shared/Loading";

//Icons
import shareIcon from "../assets/icons/share 1.svg";
import adjustmentIcon from "../assets/icons/adjustments 1.svg";
import viewListIcon from "../assets/icons/view-list 1.svg";
import viewGridIcon from "../assets/icons/view-grid 1.svg";
import closeIcon from "../assets/icons/x 2.svg";
import yellowStar from "../assets/icons/star 1.svg";
import grayStar from "../assets/icons/star 2.svg";
import heartIcon from "../assets/icons/heart 1.svg";
import scaleIcon from "../assets/icons/scale 1.svg";

//Images
import productImage1 from "../assets/images/Rectangle 3.jpg";
import productImage3 from "../assets/images/Rectangle 4.jpg";
import productImage4 from "../assets/images/Rectangle 5.jpg";
import productImage5 from "../assets/images/Rectangle 6.jpg";

const WomenPage = () => {
  const filterMenu = useRef();
  const openFilter = useRef();
  const closeFilter = useRef();

  //Handlers
  const filterMenuHandler = () => {
    filterMenu.current.classList.toggle("open-filter");
    openFilter.current.classList.toggle("hidden");
    closeFilter.current.classList.toggle("hidden");
  };

  return (
    <section className="mt-20">
      <header className="px-content pt-2 pb-6 bg-primary-lightGray grid gap-[10px]">
        <div className="flex-balance justify-between">
          <div className="flex-balance space-x-[6px]">
            <a href="#">
              <small className="opacity-60">Home</small>
            </a>
            <i className="h-4 pt-1 flex-balance justify-center">►</i>
            <small>Women</small>
          </div>
          <div className="flex-balance space-x-2">
            <img className="icon-md" src={shareIcon} alt="shareIcon" />
            <small className="opacity-60 cursor-pointer">Share</small>
          </div>
        </div>
        <h2 className="text-center">Women</h2>
      </header>
      <main className="px-content pt-11 pb-8">
        <div className="flex-balance justify-between mb-9">
          <div className="flex-balance space-x-2">
            <img
              ref={openFilter}
              className="opacity-60 transition-all duration-300 w-[32px]"
              src={adjustmentIcon}
              alt="adjustmentIcon"
            />
            <img
              ref={closeFilter}
              className="opacity-60 transition-all duration-300 hidden w-[32px]"
              src={closeIcon}
              alt="adjustmentIcon"
            />
            <button onClick={() => filterMenuHandler()}>Filter</button>
          </div>
          <div className="space-x-6 sm:flex-balance hidden">
            <img src={viewListIcon} alt="viewListIcon" />
            <img src={viewGridIcon} alt="viewGridIcon" />
          </div>
          <div className="relative inline-block">
            <select
              defaultValue={"Bestsellers"}
              className="outline-none hidden-appearance uppercase text-[13px] font-medium tracking-[0.78px] opacity-60 w-[100px]"
            >
              <option value="New Arrivals">New Arrivals</option>
              <option value="Specials">Specials</option>
              <option value="Bestsellers">Bestsellers</option>
              <option value="Most Viewed">Most Viewed</option>
              <option value="Featured Products">Featured Products</option>
            </select>
          </div>
        </div>
        <div
          ref={filterMenu}
          className="bg-primary-lightGray px-[42px] h-0 opacity-0 transition-all duration-300 flex items-start justify-between sm:space-x-0 space-x-20 sm:overflow-hidden overflow-x-scroll"
        >
          <div className="grid gap-3">
            <h5>Color</h5>
            <ul className="text-[13px] leading-[34px]">
              <li className="cursor-pointer hover:font-medium flex-balance space-x-3 before:content-[''] before:w-[18px] before:h-[18px] before:rounded-full before:bg-primary-black before:mr-[6px]">
                Black
              </li>
              <li className="cursor-pointer hover:font-medium flex-balance space-x-3 before:content-[''] before:w-[18px] before:h-[18px] before:rounded-full before:bg-cyan-500 before:mr-[6px]">
                Cyan
              </li>
              <li className="cursor-pointer hover:font-medium flex-balance space-x-3 before:content-[''] before:w-[18px] before:h-[18px] before:rounded-full before:bg-green-500 before:mr-[6px]">
                Green
              </li>
              <li className="cursor-pointer hover:font-medium flex-balance space-x-3 before:content-[''] before:w-[18px] before:h-[18px] before:rounded-full before:bg-primary-gray before:mr-[6px]">
                Grey
              </li>
              <li className="cursor-pointer hover:font-medium flex-balance space-x-3 before:content-[''] before:w-[18px] before:h-[18px] before:rounded-full before:bg-primary-pink before:mr-[6px]">
                Pink
              </li>
              <li className="cursor-pointer hover:font-medium flex-balance space-x-3 before:content-[''] before:w-[18px] before:h-[18px] before:rounded-full before:bg-white before:mr-[6px]">
                White
              </li>
              <li className="cursor-pointer hover:font-medium flex-balance space-x-3 before:content-[''] before:w-[18px] before:h-[18px] before:rounded-full before:bg-blue-700 before:mr-[6px]">
                Blue
              </li>
            </ul>
          </div>
          <div className="grid gap-3">
            <h5>Size</h5>
            <ul className="text-[13px] leading-[34px]">
              <li className="flex-balance">
                <label className="custom-checkbox">
                  <input id="sizeXL" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="sizeXL">XL</label>
              </li>
              <li className="flex-balance">
                <label className="custom-checkbox">
                  <input id="sizeL" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="sizeL">L</label>
              </li>
              <li className="flex-balance">
                <label className="custom-checkbox">
                  <input id="sizeM" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="sizeM">M</label>
              </li>
              <li className="flex-balance">
                <label className="custom-checkbox">
                  <input id="sizeS" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="sizeS">S</label>
              </li>
              <li className="flex-balance">
                <label className="custom-checkbox">
                  <input id="sizeXs" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="sizeXs">Xs</label>
              </li>
            </ul>
          </div>
          <div className="grid gap-3">
            <h5>Brand</h5>
            <ul className="text-[13px] leading-[34px]">
              <li className="flex-balance">
                <label className="custom-checkbox">
                  <input id="ckBrand" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="ckBrand">Ck</label>
              </li>
              <li className="flex-balance">
                <label className="custom-checkbox">
                  <input id="H&MBrand" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="H&MBrand">H&M</label>
              </li>
              <li className="flex-balance">
                <label className="custom-checkbox">
                  <input id="KallesBrand" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="KallesBrand">Kalles</label>
              </li>
              <li className="flex-balance">
                <label className="custom-checkbox">
                  <input id="Levi'sBrand" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="Levi'sBrand">Levi's</label>
              </li>
              <li className="flex-balance">
                <label className="custom-checkbox">
                  <input id="MonkiBrand" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="MonkiBrand"> Monki</label>
              </li>
              <li className="flex-balance">
                <label className="custom-checkbox">
                  <input id="NikeBrand" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="NikeBrand">Nike</label>
              </li>
            </ul>
          </div>
          <div className="grid gap-3">
            <h5>Price</h5>
            <ul className="text-[13px] leading-[34px]">
              <li className="flex-balance">
                <label className="custom-checkbox">
                  <input id="$1200+" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="$1200+">$1200+</label>
              </li>
              <li className="flex-balance">
                <label className="custom-checkbox">
                  <input id="$600-$1200" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="$600-$1200">$600-$1200</label>
              </li>
              <li className="flex-balance">
                <label className="custom-checkbox">
                  <input id="$300-$600" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="$300-$600">$300-$600</label>
              </li>
              <li className="flex-balance">
                <label className="custom-checkbox">
                  <input id="$150-$300" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="$150-$300">$150-$300</label>
              </li>
              <li className="flex-balance">
                <label className="custom-checkbox">
                  <input id="$50-$150" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="$50-$150">$50-$150</label>
              </li>
              <li className="flex-balance">
                <label className="custom-checkbox">
                  <input id="$7-$50" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="$7-$50">$7-$50</label>
              </li>
            </ul>
          </div>
        </div>
        <section className="cards-deck">
          <div className="card-deck group relative">
            <a className="sale-50" href="#">
              <img
                className="sm:w-64 w-40"
                src={productImage1}
                alt="productImage1"
              />
            </a>
            <div className="grid gap-3 bg-white absolute transition-all duration-300 sm:group-hover:bottom-[110px] group-hover:bottom-2 group-hover:mb-4 sm:-bottom-14 -bottom-24  pt-3 w-full">
              <p className="leading-normal opacity-60">
                Women's tracksuit Q109
              </p>
              <div className="flex-balance justify-between">
                <div className="sm:flex-balance flex flex-col space-x-1">
                  <p className="font-bold leading-normal">$ 30.00</p>
                  <p className="text-xs font-bold opacity-40 line-through">
                    $ 60.00
                  </p>
                </div>
                <div className="flex-balance space-x-[1px]">
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={grayStar} alt="grayStar" />
                </div>
              </div>
            </div>
            <div className="group-hover:grid group-hover:opacity-100 group-hover:translate-y-[152px] transition duration-300 gap-3 absolute -translate-y-0 bg-white w-full pt-4 z-10 opacity-0">
              <div className="grid gap-3">
                <div className="sm:flex-balance sm:space-x-2 hidden">
                  <img
                    className="w-10 h-10"
                    src={productImage1}
                    alt="productImage1"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage3}
                    alt="productImage3"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage4}
                    alt="productImage4"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage5}
                    alt="productImage5"
                  />
                </div>
                <div className="flex-balance space-x-2">
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    XS
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    S
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    M
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    L
                  </small>
                </div>
                <div className="flex-balance justify-between">
                  <button className="btn btn-xs btn-black sm:btn-md sm:text-[13px]">
                    Add to cart
                  </button>
                  <img
                    className="icon-cursor"
                    src={heartIcon}
                    alt="heartIcon"
                  />
                  <img
                    className="icon-cursor"
                    src={scaleIcon}
                    alt="scaleIcon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-deck group relative">
            <a href="#">
              <img
                className="sm:w-64 w-40"
                src={productImage1}
                alt="productImage1"
              />
            </a>
            <div className="grid gap-3 bg-white absolute transition-all duration-300 sm:group-hover:bottom-[110px] group-hover:bottom-2 group-hover:mb-4 sm:-bottom-14 -bottom-24  pt-3 w-full">
              <p className="leading-normal opacity-60">
                Women's tracksuit Q109
              </p>
              <div className="flex-balance justify-between">
                <div className="sm:flex-balance flex flex-col space-x-1">
                  <p className="font-bold leading-normal">$ 30.00</p>
                </div>
                <div className="flex-balance space-x-[1px]">
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={grayStar} alt="grayStar" />
                </div>
              </div>
            </div>
            <div className="group-hover:grid group-hover:opacity-100 group-hover:translate-y-[152px] transition duration-300 gap-3 absolute -translate-y-0 bg-white w-full pt-4 z-10 opacity-0">
              <div className="grid gap-3">
                <div className="sm:flex-balance sm:space-x-2 hidden">
                  <img
                    className="w-10 h-10"
                    src={productImage1}
                    alt="productImage1"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage3}
                    alt="productImage3"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage4}
                    alt="productImage4"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage5}
                    alt="productImage5"
                  />
                </div>
                <div className="flex-balance space-x-2">
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    XS
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    S
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    M
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    L
                  </small>
                </div>
                <div className="flex-balance justify-between">
                  <button className="btn btn-xs btn-black sm:btn-md sm:text-[13px]">
                    Add to cart
                  </button>
                  <img
                    className="icon-cursor"
                    src={heartIcon}
                    alt="heartIcon"
                  />
                  <img
                    className="icon-cursor"
                    src={scaleIcon}
                    alt="scaleIcon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-deck group relative">
            <a href="#">
              <img
                className="sm:w-64 w-40"
                src={productImage1}
                alt="productImage1"
              />
            </a>
            <div className="grid gap-3 bg-white absolute transition-all duration-300 sm:group-hover:bottom-[110px] group-hover:bottom-2 group-hover:mb-4 sm:-bottom-14 -bottom-24  pt-3 w-full">
              <p className="leading-normal opacity-60">
                Women's tracksuit Q109
              </p>
              <div className="flex-balance justify-between">
                <div className="sm:flex-balance flex flex-col space-x-1">
                  <p className="font-bold leading-normal">$ 30.00</p>
                </div>
                <div className="flex-balance space-x-[1px]">
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={grayStar} alt="grayStar" />
                </div>
              </div>
            </div>
            <div className="group-hover:grid group-hover:opacity-100 group-hover:translate-y-[152px] transition duration-300 gap-3 absolute -translate-y-0 bg-white w-full pt-4 z-10 opacity-0">
              <div className="grid gap-3">
                <div className="sm:flex-balance sm:space-x-2 hidden">
                  <img
                    className="w-10 h-10"
                    src={productImage1}
                    alt="productImage1"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage3}
                    alt="productImage3"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage4}
                    alt="productImage4"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage5}
                    alt="productImage5"
                  />
                </div>
                <div className="flex-balance space-x-2">
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    XS
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    S
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    M
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    L
                  </small>
                </div>
                <div className="flex-balance justify-between">
                  <button className="btn btn-xs btn-black sm:btn-md sm:text-[13px]">
                    Add to cart
                  </button>
                  <img
                    className="icon-cursor"
                    src={heartIcon}
                    alt="heartIcon"
                  />
                  <img
                    className="icon-cursor"
                    src={scaleIcon}
                    alt="scaleIcon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-deck group relative">
            <a href="#">
              <img
                className="sm:w-64 w-40"
                src={productImage1}
                alt="productImage1"
              />
            </a>
            <div className="grid gap-3 bg-white absolute transition-all duration-300 sm:group-hover:bottom-[110px] group-hover:bottom-2 group-hover:mb-4 sm:-bottom-14 -bottom-24  pt-3 w-full">
              <p className="leading-normal opacity-60">
                Women's tracksuit Q109
              </p>
              <div className="flex-balance justify-between">
                <div className="sm:flex-balance flex flex-col space-x-1">
                  <p className="font-bold leading-normal">$ 30.00</p>
                </div>
                <div className="flex-balance space-x-[1px]">
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={grayStar} alt="grayStar" />
                </div>
              </div>
            </div>
            <div className="group-hover:grid group-hover:opacity-100 group-hover:translate-y-[152px] transition duration-300 gap-3 absolute -translate-y-0 bg-white w-full pt-4 z-10 opacity-0">
              <div className="grid gap-3">
                <div className="sm:flex-balance sm:space-x-2 hidden">
                  <img
                    className="w-10 h-10"
                    src={productImage1}
                    alt="productImage1"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage3}
                    alt="productImage3"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage4}
                    alt="productImage4"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage5}
                    alt="productImage5"
                  />
                </div>
                <div className="flex-balance space-x-2">
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    XS
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    S
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    M
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    L
                  </small>
                </div>
                <div className="flex-balance justify-between">
                  <button className="btn btn-xs btn-black sm:btn-md sm:text-[13px]">
                    Add to cart
                  </button>
                  <img
                    className="icon-cursor"
                    src={heartIcon}
                    alt="heartIcon"
                  />
                  <img
                    className="icon-cursor"
                    src={scaleIcon}
                    alt="scaleIcon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-deck group relative">
            <a className="sale-50" href="#">
              <img
                className="sm:w-64 w-40"
                src={productImage1}
                alt="productImage1"
              />
            </a>
            <div className="grid gap-3 bg-white absolute transition-all duration-300 sm:group-hover:bottom-[110px] group-hover:bottom-2 group-hover:mb-4 sm:-bottom-14 -bottom-24  pt-3 w-full">
              <p className="leading-normal opacity-60">
                Women's tracksuit Q109
              </p>
              <div className="flex-balance justify-between">
                <div className="sm:flex-balance flex flex-col space-x-1">
                  <p className="font-bold leading-normal">$ 30.00</p>
                  <p className="text-xs font-bold opacity-40 line-through">
                    $ 60.00
                  </p>
                </div>
                <div className="flex-balance space-x-[1px]">
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={grayStar} alt="grayStar" />
                </div>
              </div>
            </div>
            <div className="group-hover:grid group-hover:opacity-100 group-hover:translate-y-[152px] transition duration-300 gap-3 absolute -translate-y-0 bg-white w-full pt-4 z-10 opacity-0">
              <div className="grid gap-3">
                <div className="sm:flex-balance sm:space-x-2 hidden">
                  <img
                    className="w-10 h-10"
                    src={productImage1}
                    alt="productImage1"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage3}
                    alt="productImage3"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage4}
                    alt="productImage4"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage5}
                    alt="productImage5"
                  />
                </div>
                <div className="flex-balance space-x-2">
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    XS
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    S
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    M
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    L
                  </small>
                </div>
                <div className="flex-balance justify-between">
                  <button className="btn btn-xs btn-black sm:btn-md sm:text-[13px]">
                    Add to cart
                  </button>
                  <img
                    className="icon-cursor"
                    src={heartIcon}
                    alt="heartIcon"
                  />
                  <img
                    className="icon-cursor"
                    src={scaleIcon}
                    alt="scaleIcon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-deck group relative">
            <a href="#">
              <img
                className="sm:w-64 w-40"
                src={productImage1}
                alt="productImage1"
              />
            </a>
            <div className="grid gap-3 bg-white absolute transition-all duration-300 sm:group-hover:bottom-[110px] group-hover:bottom-2 group-hover:mb-4 sm:-bottom-14 -bottom-24  pt-3 w-full">
              <p className="leading-normal opacity-60">
                Women's tracksuit Q109
              </p>
              <div className="flex-balance justify-between">
                <div className="sm:flex-balance flex flex-col space-x-1">
                  <p className="font-bold leading-normal">$ 30.00</p>
                </div>
                <div className="flex-balance space-x-[1px]">
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={grayStar} alt="grayStar" />
                </div>
              </div>
            </div>
            <div className="group-hover:grid group-hover:opacity-100 group-hover:translate-y-[152px] transition duration-300 gap-3 absolute -translate-y-0 bg-white w-full pt-4 z-10 opacity-0">
              <div className="grid gap-3">
                <div className="sm:flex-balance sm:space-x-2 hidden">
                  <img
                    className="w-10 h-10"
                    src={productImage1}
                    alt="productImage1"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage3}
                    alt="productImage3"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage4}
                    alt="productImage4"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage5}
                    alt="productImage5"
                  />
                </div>
                <div className="flex-balance space-x-2">
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    XS
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    S
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    M
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    L
                  </small>
                </div>
                <div className="flex-balance justify-between">
                  <button className="btn btn-xs btn-black sm:btn-md sm:text-[13px]">
                    Add to cart
                  </button>
                  <img
                    className="icon-cursor"
                    src={heartIcon}
                    alt="heartIcon"
                  />
                  <img
                    className="icon-cursor"
                    src={scaleIcon}
                    alt="scaleIcon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-deck group relative">
            <a href="#">
              <img
                className="sm:w-64 w-40"
                src={productImage1}
                alt="productImage1"
              />
            </a>
            <div className="grid gap-3 bg-white absolute transition-all duration-300 sm:group-hover:bottom-[110px] group-hover:bottom-2 group-hover:mb-4 sm:-bottom-14 -bottom-24  pt-3 w-full">
              <p className="leading-normal opacity-60">
                Women's tracksuit Q109
              </p>
              <div className="flex-balance justify-between">
                <div className="sm:flex-balance flex flex-col space-x-1">
                  <p className="font-bold leading-normal">$ 30.00</p>
                </div>
                <div className="flex-balance space-x-[1px]">
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={grayStar} alt="grayStar" />
                </div>
              </div>
            </div>
            <div className="group-hover:grid group-hover:opacity-100 group-hover:translate-y-[152px] transition duration-300 gap-3 absolute -translate-y-0 bg-white w-full pt-4 z-10 opacity-0">
              <div className="grid gap-3">
                <div className="sm:flex-balance sm:space-x-2 hidden">
                  <img
                    className="w-10 h-10"
                    src={productImage1}
                    alt="productImage1"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage3}
                    alt="productImage3"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage4}
                    alt="productImage4"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage5}
                    alt="productImage5"
                  />
                </div>
                <div className="flex-balance space-x-2">
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    XS
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    S
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    M
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    L
                  </small>
                </div>
                <div className="flex-balance justify-between">
                  <button className="btn btn-xs btn-black sm:btn-md sm:text-[13px]">
                    Add to cart
                  </button>
                  <img
                    className="icon-cursor"
                    src={heartIcon}
                    alt="heartIcon"
                  />
                  <img
                    className="icon-cursor"
                    src={scaleIcon}
                    alt="scaleIcon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-deck group relative">
            <a href="#">
              <img
                className="sm:w-64 w-40"
                src={productImage1}
                alt="productImage1"
              />
            </a>
            <div className="grid gap-3 bg-white absolute transition-all duration-300 sm:group-hover:bottom-[110px] group-hover:bottom-2 group-hover:mb-4 sm:-bottom-14 -bottom-24  pt-3 w-full">
              <p className="leading-normal opacity-60">
                Women's tracksuit Q109
              </p>
              <div className="flex-balance justify-between">
                <div className="sm:flex-balance flex flex-col space-x-1">
                  <p className="font-bold leading-normal">$ 30.00</p>
                </div>
                <div className="flex-balance space-x-[1px]">
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={yellowStar} alt="yellowStar" />
                  <img className="icon-sm" src={grayStar} alt="grayStar" />
                </div>
              </div>
            </div>
            <div className="group-hover:grid group-hover:opacity-100 group-hover:translate-y-[152px] transition duration-300 gap-3 absolute -translate-y-0 bg-white w-full pt-4 z-10 opacity-0">
              <div className="grid gap-3">
                <div className="sm:flex-balance sm:space-x-2 hidden">
                  <img
                    className="w-10 h-10"
                    src={productImage1}
                    alt="productImage1"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage3}
                    alt="productImage3"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage4}
                    alt="productImage4"
                  />
                  <img
                    className="w-10 h-10"
                    src={productImage5}
                    alt="productImage5"
                  />
                </div>
                <div className="flex-balance space-x-2">
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    XS
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    S
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    M
                  </small>
                  <small className="text-[10px] font-semibold opacity-70 w-6 h-6 bg-primary-lightGray flex-balance justify-center">
                    L
                  </small>
                </div>
                <div className="flex-balance justify-between">
                  <button className="btn btn-xs btn-black sm:btn-md sm:text-[13px]">
                    Add to cart
                  </button>
                  <img
                    className="icon-cursor"
                    src={heartIcon}
                    alt="heartIcon"
                  />
                  <img
                    className="icon-cursor"
                    src={scaleIcon}
                    alt="scaleIcon"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Loading/>
      </main>
    </section>
  );
};

export default WomenPage;
