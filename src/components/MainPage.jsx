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
                    <h3 className="leading-normal sm:text-[22px] text-sm">Your title text</h3>
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
    </main>
  );
};

export default MainPage;
