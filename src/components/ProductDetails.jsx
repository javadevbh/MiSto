import React from "react";

//Product image slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//Icons
import shareIcon from "../assets/icons/share 1.svg";
import yellowStar from "../assets/icons/star 1.svg";
import grayStar from "../assets/icons/star 2.svg";
import clothesHangerIcon from "../assets/icons/clothes-hanger 1.svg";
import heartIcon from "../assets/icons/heart 1.svg";
import scaleIcon from "../assets/icons/scale 1.svg";
import truckIcon from "../assets/icons/truck 1.svg";
import refreshIcon from "../assets/icons/refresh 1.svg";
import mailIcon from "../assets/icons/mail 1.svg";

//Images
import productImage1 from "../assets/images/Rectangle 3.jpg";
import productImage3 from "../assets/images/Rectangle 4.jpg";
import productImage4 from "../assets/images/Rectangle 5.jpg";
import productImage5 from "../assets/images/Rectangle 6.jpg";
import brandLogo1 from "../assets/images/brands logo/Stripe_x43.png";
import brandLogo2 from "../assets/images/brands logo/AES256_x43.png";
import brandLogo3 from "../assets/images/brands logo/paypal_2_x43.png";
import brandLogo4 from "../assets/images/brands logo/visa_x43.png";
import brandLogo5 from "../assets/images/brands logo/mastercard_x43.png";
import brandLogo6 from "../assets/images/brands logo/discover_x43.png";
import brandLogo7 from "../assets/images/brands logo/american-express_x43.png";

const ProductDetails = () => {
  return (
    <section className="mt-20">
      <header className="px-content pt-2 pb-6 bg-primary-lightGray grid lg:gap-[10px] gap-5">
        <div className="flex-balance justify-between">
          <div className="flex-balance space-x-[6px]">
            <a href="#">
              <small className="opacity-60">Home</small>
            </a>
            <i className="h-4 pt-1 flex-balance justify-center opacity-60">►</i>
            <a href="#">
              <small className="opacity-60">Women</small>
            </a>
            <i className="h-4 pt-1 flex-balance justify-center">►</i>
            <small>Women's tracksuit</small>
          </div>
          <div className="flex-balance space-x-2">
            <img className="icon-md" src={shareIcon} alt="shareIcon" />
            <small className="opacity-60 cursor-pointer">Share</small>
          </div>
        </div>
        <h2 className="text-center normal-case">Women's tracksuit</h2>
        <div className="flex-balance justify-between">
          <div className="flex-balance space-x-2">
            <div className="flex-balance space-x-[1px]">
              <img className="icon-sm" src={yellowStar} alt="yellowStar" />
              <img className="icon-sm" src={yellowStar} alt="yellowStar" />
              <img className="icon-sm" src={yellowStar} alt="yellowStar" />
              <img className="icon-sm" src={yellowStar} alt="yellowStar" />
              <img className="icon-sm" src={grayStar} alt="grayStar" />
            </div>
            <div className="pt-1">
              <small className="opacity-60 sm:block hidden">2 Reviews</small>
            </div>
          </div>
          <div className="flex-balance lg:space-x-6 space-x-2">
            <div>
              <small className="opacity-60">SKU: </small>
              <small className="font-bold">777</small>
            </div>
            <div>
              <small className="opacity-60">Availability: </small>
              <small className="font-bold">In Stock</small>
            </div>
          </div>
        </div>
      </header>
      <main className="px-content pt-8">
        <section className="flex lg:flex-row lg:justify-center lg:space-x-[30px] lg:items-stretch lg:space-y-0 flex-col items-center space-y-8">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            className="lg:w-[400px] w-[260px] m-0"
          >
            <SwiperSlide className="flex-balance justify-center">
              <img className="h-full" src={productImage1} alt="productImage1" />
            </SwiperSlide>
            <SwiperSlide className="flex-balance justify-center">
              <img className="h-full" src={productImage1} alt="productImage1" />
            </SwiperSlide>
            <SwiperSlide className="flex-balance justify-center">
              <img className="h-full" src={productImage1} alt="productImage1" />
            </SwiperSlide>
            <SwiperSlide className="flex-balance justify-center">
              <img className="h-full" src={productImage1} alt="productImage1" />
            </SwiperSlide>
            <div className="swiper-button-prev prev bg-white opacity-60 rounded-full text-primary-black !w-10 !h-10 after:!text-lg after:content-['prev']" />
            <div className="swiper-button-next next bg-white opacity-60 rounded-full text-primary-black !w-10 !h-10 after:!text-lg after:content-['next']" />
          </Swiper>
          <aside className="flex flex-col">
            <div className="grid gap-8 pb-8 border-b-gray">
              <div>
                <div className="flex-balance lg:justify-normal justify-center space-x-1">
                  <h6 className="opacity-60">Color:</h6>
                  <span className="text-xs font-semibold leading-[18px]">
                    Blue
                  </span>
                </div>
                <div className="flex-balance lg:justify-normal justify-center space-x-4 mt-4">
                  <img
                    className="w-16 h-16 cursor-pointer border-[2px] border-primary-black"
                    src={productImage1}
                    alt="productImage2"
                  />
                  <img
                    className="w-16 h-16 cursor-pointer"
                    src={productImage3}
                    alt="productImage3"
                  />
                  <img
                    className="w-16 h-16 cursor-pointer"
                    src={productImage4}
                    alt="productImage4"
                  />
                  <img
                    className="w-16 h-16 cursor-pointer"
                    src={productImage5}
                    alt="productImage5"
                  />
                </div>
              </div>
              <div>
                <div className="flex-balance lg:justify-normal justify-center space-x-1">
                  <h6 className="opacity-60">Size:</h6>
                  <span className="text-xs font-semibold leading-[18px]">
                    S
                  </span>
                </div>
                <div className="flex-balance lg:justify-normal justify-center space-x-4 mt-4">
                  <small className="text-xs font-semibold opacity-70 cursor-pointer bg-primary-lightGray w-10 h-10 flex-balance justify-center">
                    XS
                  </small>
                  <small className="text-xs font-semibold opacity-70 cursor-pointer w-10 h-10 flex-balance justify-center border-[2px] border-primary-black">
                    S
                  </small>
                  <small className="text-xs font-semibold opacity-70 cursor-pointer bg-primary-lightGray w-10 h-10 flex-balance justify-center">
                    M
                  </small>
                  <small className="text-xs font-semibold opacity-70 cursor-pointer bg-primary-lightGray w-10 h-10 flex-balance justify-center">
                    L
                  </small>
                </div>
                <div className="flex-balance lg:justify-normal justify-center space-x-1 mt-4">
                  <img src={clothesHangerIcon} alt="clothesHangerIcon" />
                  <small className="text-xs font-medium opacity-60 leading-[18px] pt-[2px]">
                    Size guide
                  </small>
                </div>
              </div>
            </div>
            <div className="flex-balance lg:justify-normal justify-center py-8 lg:space-x-7 space-x-3 border-b-gray">
              <h3 className="leading-9 font-bold lg:text-[22px] text-lg">$ 379.99</h3>
              <button className="btn lg:btn-md btn-sm !py-3 btn-black">Add to cart</button>
              <img className="cursor-pointer" src={heartIcon} alt="heartIcon" />
              <img className="cursor-pointer" src={scaleIcon} alt="scaleIcon" />
            </div>
            <div className="flex-balance lg:justify-normal justify-center py-8 lg:space-x-7 space-x-3 border-b-gray relative">
              <div className="flex-balance space-x-[6px]">
                <img className="opacity-60" src={truckIcon} alt="truckIcon" />
                <small className="text-xs font-medium leading-[18px] opacity-60 pt-[2px]">Shipping & Delivery</small>
              </div>
              <div className="flex-balance space-x-[6px]">
                <img className="opacity-60" src={refreshIcon} alt="refreshIcon" />
                <small className="text-xs font-medium leading-[18px] opacity-60 pt-[2px]">Returns & Exchanges</small>
              </div>
              <div className="flex-balance space-x-[6px]">
                <img className="opacity-60" src={mailIcon} alt="mailIcon" />
                <small className="text-xs font-medium leading-[18px] opacity-60 pt-[2px]">Ask a question</small>
              </div>
              <h6 className="absolute lg:-left-7 -left-3 -bottom-3 bg-white pr-4">guaranteed safe checkout</h6>
            </div>
            <div className="flex-balance flex-wrap lg:space-y-0 space-y-4 py-8 space-x-4">
              <img src={brandLogo1} alt="brandLogo1" />
              <img src={brandLogo2} alt="brandLogo2" />
              <img src={brandLogo3} alt="brandLogo3" />
              <img src={brandLogo4} alt="brandLogo4" />
              <img src={brandLogo5} alt="brandLogo5" />
              <img src={brandLogo6} alt="brandLogo6" />
              <img src={brandLogo7} alt="brandLogo7" />
            </div>
          </aside>
        </section>
        <section className="lg:pt-24 pt-14">
            <h3 className="leading-normal">RELATED PRODUCTS</h3>
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
        </section>
        </section>
      </main>
    </section>
  );
};

export default ProductDetails;
