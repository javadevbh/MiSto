import React from "react";

//Banner slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//Icons
import truckIcon from "../assets/icons/truck 1.svg";
import refreshIcon from "../assets/icons/refresh 1.svg";
import supportIcon from "../assets/icons/support 1.svg";
import leftArrow from "../assets/icons/chevron-left 1.svg";
import yellowStar from "../assets/icons/star 1.svg";
import grayStar from "../assets/icons/star 2.svg";

//Images
import productImage1 from "../assets/images/Rectangle 3.jpg";
import productImage2 from "../assets/images/Rectangle 2.jpg";
import sectionImage3 from "../assets/images/section-image3.png"
import sectionImage4 from "../assets/images/section-image4.png"

const MainPage = () => {
  return (
    <main className="mt-content">
      <section className="pb-8 border-b-lightgray">
        <div className="px-content">
          <div className="xl:h-[490px] h-[460px] lg:grid hidden xl:gap-8 gap-2 justify-center lg:grid-rows-[repeat(2,200px)] lg:grid-cols-[repeat(4,255px)]">
            <div className="lg:row-[1/4] lg:col-[1/3] row-[1/2] col-[1/2]">
              <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
                }}
                autoplay
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                className="h-full"
              >
                <SwiperSlide className="bg-bannerbg1 bg-no-repeat flex-balance justify-center">
                  <a
                    href="#"
                    className="bg-white py-6 px-8 rounded-md text-center"
                  >
                    <h6 className="leading-normal opacity-40 mb-2">Banner</h6>
                    <h3 className="leading-normal ">Your title text</h3>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="bg-bannerbg1 bg-no-repeat flex-balance justify-center">
                  <a
                    href="#"
                    className="bg-white py-6 px-8 rounded-md text-center"
                  >
                    <h6 className="leading-normal opacity-40 mb-2">Banner</h6>
                    <h3 className="leading-normal ">Your title text</h3>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="bg-bannerbg1 bg-no-repeat flex-balance justify-center">
                  <a
                    href="#"
                    className="bg-white py-6 px-8 rounded-md text-center"
                  >
                    <h6 className="leading-normal opacity-40 mb-2">Banner</h6>
                    <h3 className="leading-normal ">Your title text</h3>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="bg-bannerbg1 bg-no-repeat flex-balance justify-center">
                  <a
                    href="#"
                    className="bg-white py-6 px-8 rounded-md text-center"
                  >
                    <h6 className="leading-normal opacity-40 mb-2">Banner</h6>
                    <h3 className="leading-normal ">Your title text</h3>
                  </a>
                </SwiperSlide>
                <div className="swiper-button-prev prev bg-white opacity-60 rounded-full text-primary-black !w-10 !h-10 after:!text-lg after:content-['prev']" />
                <div className="swiper-button-next next bg-white opacity-60 rounded-full text-primary-black !w-10 !h-10 after:!text-lg after:content-['next']" />
              </Swiper>
            </div>
            <div className="bg-bannerbg2 cursor-pointer group flex-balance justify-center bg-no-repeat lg:row-[1/2] lg:col-[3/4]">
              <a
                className="bg-white py-3 px-6 rounded-md transition-all duration-300 group-hover:py-5 group-hover:px-10"
                href="#"
              >
                <h5>Women</h5>
              </a>
            </div>
            <div className="bg-bannerbg3 cursor-pointer group flex-balance justify-center bg-no-repeat lg:row-[1/2] lg:col-[4/5]">
              <a
                className="bg-white py-3 px-6 rounded-md transition-all duration-300 group-hover:py-5 group-hover:px-10"
                href="#"
              >
                <h5>Men</h5>
              </a>
            </div>
            <div className="bg-bannerbg4 cursor-pointer group flex-balance justify-center bg-no-repeat lg:row-[2/4] lg:col-[3/5]">
              <a
                className="bg-white py-3 px-6 rounded-md transition-all duration-300 group-hover:py-5 group-hover:px-10"
                href="#"
              >
                <h5>Accessories</h5>
              </a>
            </div>
          </div>
          <div className="lg:hidden md:h-60 sm:h-52 h-40 ">
            <div className="w-full h-full">
              <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
                }}
                autoplay
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                className="h-full"
              >
                <SwiperSlide className="bg-bannerbg1-h lg:bg-bannerbg1 flex-balance justify-center bg-no-repeat bg-top">
                  <a
                    href="#"
                    className="bg-white sm:py-6 sm:px-8 py-4 px-6 rounded-md text-center"
                  >
                    <h6 className="leading-normal opacity-40 mb-2">Banner</h6>
                    <h3 className="leading-normal sm:text-[22px] text-sm">
                      Your title text
                    </h3>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="bg-bannerbg2-h lg:bg-bannerbg2 flex-balance justify-center bg-no-repeat bg-top">
                  <a
                    href="#"
                    className="bg-white py-4 px-8 rounded-md text-center"
                  >
                    <h5>Women</h5>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="bg-bannerbg3-h lg:bg-bannerbg3 flex-balance justify-center bg-no-repeat bg-top">
                  <a
                    href="#"
                    className="bg-white py-4 px-8 rounded-md text-center"
                  >
                    <h5>Men</h5>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="bg-bannerbg4-h lg:bg-bannerbg4 flex-balance justify-center bg-no-repeat bg-top">
                  <a
                    href="#"
                    className="bg-white py-4 px-8 rounded-md text-center"
                  >
                    <h5>Accessories</h5>
                  </a>
                </SwiperSlide>
                <div className="swiper-button-prev prev bg-white opacity-60 rounded-full text-primary-black !w-10 !h-10 after:!text-lg after:content-['prev']" />
                <div className="swiper-button-next next bg-white opacity-60 rounded-full text-primary-black !w-10 !h-10 after:!text-lg after:content-['next']" />
              </Swiper>
            </div>
          </div>
          <div className="flex-balance pt-8 justify-between flex-wrap xl:space-y-0 space-y-4">
            <div className="flex-balance space-x-2">
              <img
                className="icon-xl opacity-80"
                src={truckIcon}
                alt="truckIcon"
              />
              <div>
                <h6 className="leading-normal">Free shipping</h6>
                <p className="font-medium">
                  On all UA order or order above $100
                </p>
              </div>
            </div>
            <div className="flex-balance space-x-2">
              <img
                className="icon-xl opacity-80"
                src={refreshIcon}
                alt="refreshIcon"
              />
              <div>
                <h6 className="leading-normal">30 DAYS RETURN</h6>
                <p className="font-medium">
                  Simply return it within 30 days for an exchange
                </p>
              </div>
            </div>
            <div className="flex-balance space-x-2">
              <img
                className="icon-xl opacity-80"
                src={supportIcon}
                alt="supportIcon"
              />
              <div>
                <h6 className="leading-normal">SUPPORT 24/7</h6>
                <p className="font-medium">
                  Contact us 24 hours a day, 7 days a week
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-content pt-section">
        <div className="flex-balance justify-between">
          <h3 className="leading-normal">women's</h3>
          <ul className="hidden lg:flex-balance lg:space-x-8">
            <li>
              <h6 className="font-medium leading-normal cursor-pointer">
                New Arrivals
              </h6>
            </li>
            <li>
              <h6 className="font-normal leading-normal opacity-60 cursor-pointer">
                Specials
              </h6>
            </li>
            <li>
              <h6 className="font-normal leading-normal opacity-60 cursor-pointer">
                Bestsellers
              </h6>
            </li>
            <li>
              <h6 className="font-normal leading-normal opacity-60 cursor-pointer">
                Most Viewed
              </h6>
            </li>
            <li>
              <h6 className="font-normal leading-normal opacity-60 cursor-pointer">
                Featured Products
              </h6>
            </li>
          </ul>
          <div className="relative inline-block lg:hidden">
            <select className="input input-md hidden-appearance ">
              <option value="all-categories">New Arrivals</option>
              <option value="all-categories">Specials</option>
              <option value="all-categories">Bestsellers</option>
              <option value="all-categories">Most Viewed</option>
              <option value="all-categories">Featured Products</option>
            </select>
            <img
              className="-rotate-90 absolute top-4 right-3 w-6 pointer-events-none"
              src={leftArrow}
              alt="leftArrow"
            />
          </div>
        </div>
        <div className="cards-deck">
          <div className="card-deck">
            <a className="sale-50" href="#">
              <img className="w-64" src={productImage1} alt="productImage1" />
            </a>
            <p className="leading-normal opacity-60">Women's tracksuit Q109</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
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
          <div className="card-deck">
            <a href="#">
              <img className="w-64" src={productImage1} alt="productImage1" />
            </a>
            <p className="leading-normal opacity-60">Women's tracksuit Q109</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
                <p className="font-bold leading-normal">$ 30.00</p>
                <p className="text-xs font-bold opacity-40 line-through"></p>
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
          <div className="card-deck">
            <a href="#">
              <img className="w-64" src={productImage1} alt="productImage1" />
            </a>
            <p className="leading-normal opacity-60">Women's tracksuit Q109</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
                <p className="font-bold leading-normal">$ 30.00</p>
                <p className="text-xs font-bold opacity-40 line-through"></p>
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
          <div className="card-deck">
            <a href="#">
              <img className="w-64" src={productImage1} alt="productImage1" />
            </a>
            <p className="leading-normal opacity-60">Women's tracksuit Q109</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
                <p className="font-bold leading-normal">$ 30.00</p>
                <p className="text-xs font-bold opacity-40 line-through"></p>
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
          <div className="card-deck">
            <a href="#">
              <img className="w-64" src={productImage1} alt="productImage1" />
            </a>
            <p className="leading-normal opacity-60">Women's tracksuit Q109</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
                <p className="font-bold leading-normal">$ 30.00</p>
                <p className="text-xs font-bold opacity-40 line-through"></p>
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
          <div className="card-deck">
            <a className="sale-50" href="#">
              <img className="w-64" src={productImage1} alt="productImage1" />
            </a>
            <p className="leading-normal opacity-60">Women's tracksuit Q109</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
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
          <div className="sm:card-deck hidden">
            <a href="#">
              <img className="w-64" src={productImage1} alt="productImage1" />
            </a>
            <p className="leading-normal opacity-60">Women's tracksuit Q109</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
                <p className="font-bold leading-normal">$ 30.00</p>
                <p className="text-xs font-bold opacity-40 line-through"></p>
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
          <div className="sm:card-deck hidden">
            <a href="#">
              <img className="w-64" src={productImage1} alt="productImage1" />
            </a>
            <p className="leading-normal opacity-60">Women's tracksuit Q109</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
                <p className="font-bold leading-normal">$ 30.00</p>
                <p className="text-xs font-bold opacity-40 line-through"></p>
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
          <div className="sm:card-deck hidden">
            <a href="#">
              <img className="w-64" src={productImage1} alt="productImage1" />
            </a>
            <p className="leading-normal opacity-60">Women's tracksuit Q109</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
                <p className="font-bold leading-normal">$ 30.00</p>
                <p className="text-xs font-bold opacity-40 line-through"></p>
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
          <div className="sm:card-deck hidden">
            <a href="#">
              <img className="w-64" src={productImage1} alt="productImage1" />
            </a>
            <p className="leading-normal opacity-60">Women's tracksuit Q109</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
                <p className="font-bold leading-normal">$ 30.00</p>
                <p className="text-xs font-bold opacity-40 line-through"></p>
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
        </div>
        <a
          className="py-4 btn-gray btn w-full inline-block text-center"
          href="#"
        >
          <button className="opacity-80">See All</button>
        </a>
      </section>
      <section className="px-content pt-section pb-section">
        <div className="flex-balance justify-between">
          <h3 className="leading-normal">Men's</h3>
          <ul className="hidden lg:flex-balance lg:space-x-8">
            <li>
              <h6 className="font-medium leading-normal cursor-pointer">
                New Arrivals
              </h6>
            </li>
            <li>
              <h6 className="font-normal leading-normal opacity-60 cursor-pointer">
                Specials
              </h6>
            </li>
            <li>
              <h6 className="font-normal leading-normal opacity-60 cursor-pointer">
                Bestsellers
              </h6>
            </li>
            <li>
              <h6 className="font-normal leading-normal opacity-60 cursor-pointer">
                Most Viewed
              </h6>
            </li>
            <li>
              <h6 className="font-normal leading-normal opacity-60 cursor-pointer">
                Featured Products
              </h6>
            </li>
          </ul>
          <div className="relative inline-block lg:hidden">
            <select className="input input-md hidden-appearance ">
              <option value="all-categories">New Arrivals</option>
              <option value="all-categories">Specials</option>
              <option value="all-categories">Bestsellers</option>
              <option value="all-categories">Most Viewed</option>
              <option value="all-categories">Featured Products</option>
            </select>
            <img
              className="-rotate-90 absolute top-4 right-3 w-6 pointer-events-none"
              src={leftArrow}
              alt="leftArrow"
            />
          </div>
        </div>
        <div className="cards-deck">
          <div className="card-deck">
            <a className="sale-50" href="#">
              <img className="w-64" src={productImage2} alt="productImage2" />
            </a>
            <p className="leading-normal opacity-60">Leather White Trainers</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
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
          <div className="card-deck">
            <a href="#">
              <img className="w-64" src={productImage2} alt="productImage2" />
            </a>
            <p className="leading-normal opacity-60">Leather White Trainers</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
                <p className="font-bold leading-normal">$ 30.00</p>
                <p className="text-xs font-bold opacity-40 line-through"></p>
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
          <div className="card-deck">
            <a href="#">
              <img className="w-64" src={productImage2} alt="productImage2" />
            </a>
            <p className="leading-normal opacity-60">Leather White Trainers</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
                <p className="font-bold leading-normal">$ 30.00</p>
                <p className="text-xs font-bold opacity-40 line-through"></p>
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
          <div className="card-deck">
            <a href="#">
              <img className="w-64" src={productImage2} alt="productImage2" />
            </a>
            <p className="leading-normal opacity-60">Leather White Trainers</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
                <p className="font-bold leading-normal">$ 30.00</p>
                <p className="text-xs font-bold opacity-40 line-through"></p>
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
          <div className="card-deck">
            <a href="#">
              <img className="w-64" src={productImage2} alt="productImage2" />
            </a>
            <p className="leading-normal opacity-60">Leather White Trainers</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
                <p className="font-bold leading-normal">$ 30.00</p>
                <p className="text-xs font-bold opacity-40 line-through"></p>
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
          <div className="card-deck">
            <a className="sale-50" href="#">
              <img className="w-64" src={productImage2} alt="productImage2" />
            </a>
            <p className="leading-normal opacity-60">Leather White Trainers</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
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
          <div className="sm:card-deck hidden">
            <a href="#">
              <img className="w-64" src={productImage2} alt="productImage2" />
            </a>
            <p className="leading-normal opacity-60">Leather White Trainers</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
                <p className="font-bold leading-normal">$ 30.00</p>
                <p className="text-xs font-bold opacity-40 line-through"></p>
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
          <div className="sm:card-deck hidden">
            <a href="#">
              <img className="w-64" src={productImage2} alt="productImage2" />
            </a>
            <p className="leading-normal opacity-60">Leather White Trainers</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
                <p className="font-bold leading-normal">$ 30.00</p>
                <p className="text-xs font-bold opacity-40 line-through"></p>
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
          <div className="sm:card-deck hidden">
            <a href="#">
              <img className="w-64" src={productImage2} alt="productImage2" />
            </a>
            <p className="leading-normal opacity-60">Leather White Trainers</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
                <p className="font-bold leading-normal">$ 30.00</p>
                <p className="text-xs font-bold opacity-40 line-through"></p>
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
          <div className="sm:card-deck hidden">
            <a href="#">
              <img className="w-64" src={productImage2} alt="productImage2" />
            </a>
            <p className="leading-normal opacity-60">Leather White Trainers</p>
            <div className="flex-balance justify-between">
              <div className="flex-balance space-x-1">
                <p className="font-bold leading-normal">$ 30.00</p>
                <p className="text-xs font-bold opacity-40 line-through"></p>
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
        </div>
        <a
          className="py-4 btn-gray btn w-full inline-block text-center"
          href="#"
        >
          <button className="opacity-80">See All</button>
        </a>
      </section>
      <section className="px-content pb-section sm:flex-row sm:items-center sm:space-y-0 sm:space-x-8 flex flex-col space-y-8 items-center">
        <div className="bg-sectionImage2 bg-no-repeat bg-top flex-balance justify-center sm:w-1/2 w-full h-60">
          <div className="bg-white rounded-md px-6 py-4 text-center">
            <h6 className="leading-normal opacity-60 mb-2">New Season</h6>
            <h4>lookbook collection</h4>
          </div>
        </div>
        <div className="bg-sectionImage1 bg-no-repeat bg-top flex-balance justify-center sm:w-1/2 w-full h-60">
          <div className="bg-white rounded-md px-6 py-4 text-center">
            <h6 className="leading-normal opacity-60 mb-2">Sale</h6>
            <h4>Get UP to <span className="text-base font-semibold tracking-[0.96px] uppercase text-primary-pink">50% off</span></h4>
          </div>
        </div>
      </section>
      <section className="pb-section">
        <div className="px-content bg-secondary-gray h-[580px] flex-balance lg:-space-x-10 justify-center">
          <img className="hidden lg:block z-20 mt-20" src={sectionImage4} alt="sectionImage4" />
          <div className="bg-white rounded-[4px] px-10 py-20 lg:pb-32 lg:pt-24 lg:px-24 text-center z-10">
            <h6 className="leading-normal opacity-40 mb-4">Special Offer</h6>
            <h2 className="mb-8">Subscribe And <span className="text-[26px] leading-[36px] tracking-[1.56px] uppercase font-semibold text-primary-pink">Get 10% Off</span></h2>
            <input className="input input-md text-center mb-6" placeholder="Enter your email" type="email"/>
            <button className="btn btn-lg btn-black w-full opacity-90">Subscribe</button>
          </div>
          <img className="hidden lg:block z-20 mt-14" src={sectionImage3} alt="sectionImage3" />
        </div>
      </section>
    </main>
  );
};

export default MainPage;
