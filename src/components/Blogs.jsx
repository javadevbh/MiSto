import React from "react";

//Images
import articleImage1 from "../assets/images/article images/article-image1.jpg";
import articleImage2 from "../assets/images/article images/article-image2.jpg";
import articleImage3 from "../assets/images/article images/article-image3.jpg";

const Blogs = () => {
  return (
    <section className="mt-content px-content pb-section">
      <div className="flex-balance justify-between mb-12">
        <h3 className="leading-normal">Blogs</h3>
        <a
          href="#"
          className="text-xs font-medium uppercase tracking-[0.72px] opacity-60"
        >
          Back to the main page
        </a>
      </div>
      <div className="blogs-deck">
        <article className="blog-deck group">
          <img
            className="sm:w-[350px] w-72"
            src={articleImage1}
            alt="articleImage1"
          />
          <div className="bg-white py-6 px-4 sm:w-80 w-60 sm:h-[117px] h-[165px] group-hover:h-64 overflow-hidden transition-all duration-300">
            <h5 className="mb-3">The Easiest Way to Break</h5>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleas and praising pain was bor
            </p>
            <div className="flex-balance justify-between mt-6">
              <p className="opacity-60">April 6, 2032</p>
              <h6 className="leading-normal cursor-pointer">Read More</h6>
            </div>
          </div>
        </article>
        <article className="blog-deck group">
          <img
            className="sm:w-[350px] w-72"
            src={articleImage2}
            alt="articleImage1"
          />
          <div className="bg-white py-6 px-4 sm:w-80 w-60 sm:h-[117px] h-[165px] group-hover:h-64 overflow-hidden transition-all duration-300">
            <h5 className="mb-3">Wedding Season</h5>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleas and praising pain was bor
            </p>
            <div className="flex-balance justify-between mt-6">
              <p className="opacity-60">April 6, 2032</p>
              <h6 className="leading-normal cursor-pointer">Read More</h6>
            </div>
          </div>
        </article>
        <article className="blog-deck group">
          <img
            className="sm:w-[350px] w-72"
            src={articleImage3}
            alt="articleImage1"
          />
          <div className="bg-white py-6 px-4 sm:w-80 w-60 sm:h-[117px] h-[165px] group-hover:h-64 overflow-hidden transition-all duration-300">
            <h5 className="mb-3">Recent Favorites On Repeat</h5>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleas and praising pain was bor
            </p>
            <div className="flex-balance justify-between mt-6">
              <p className="opacity-60">April 6, 2032</p>
              <h6 className="leading-normal cursor-pointer">Read More</h6>
            </div>
          </div>
        </article>
        <article className="blog-deck group">
          <img
            className="sm:w-[350px] w-72"
            src={articleImage1}
            alt="articleImage1"
          />
          <div className="bg-white py-6 px-4 sm:w-80 w-60 sm:h-[117px] h-[165px] group-hover:h-64 overflow-hidden transition-all duration-300">
            <h5 className="mb-3">Recent Favorites On Repeat</h5>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleas and praising pain was bor
            </p>
            <div className="flex-balance justify-between mt-6">
              <p className="opacity-60">April 6, 2032</p>
              <h6 className="leading-normal cursor-pointer">Read More</h6>
            </div>
          </div>
        </article>
        <article className="blog-deck group">
          <img
            className="sm:w-[350px] w-72"
            src={articleImage2}
            alt="articleImage1"
          />
          <div className="bg-white py-6 px-4 sm:w-80 w-60 sm:h-[117px] h-[165px] group-hover:h-64 overflow-hidden transition-all duration-300">
            <h5 className="mb-3">Recent Favorites On Repeat</h5>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleas and praising pain was bor
            </p>
            <div className="flex-balance justify-between mt-6">
              <p className="opacity-60">April 6, 2032</p>
              <h6 className="leading-normal cursor-pointer">Read More</h6>
            </div>
          </div>
        </article>
        <article className="blog-deck group">
          <img
            className="sm:w-[350px] w-72"
            src={articleImage3}
            alt="articleImage1"
          />
          <div className="bg-white py-6 px-4 sm:w-80 w-60 sm:h-[117px] h-[165px] group-hover:h-64 overflow-hidden transition-all duration-300">
            <h5 className="mb-3">Recent Favorites On Repeat</h5>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleas and praising pain was bor
            </p>
            <div className="flex-balance justify-between mt-6">
              <p className="opacity-60">April 6, 2032</p>
              <h6 className="leading-normal cursor-pointer">Read More</h6>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Blogs;
