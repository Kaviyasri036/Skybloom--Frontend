import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

const Home = () => {
  const banners = [
    { id: 1, image: "/images/hero-organic.png", caption: "100% Organic Beauty Products" },
    { id: 2, image: "/images/banner2.png", caption: "Glow Naturally with SkyBloom 🌸" },
    { id: 3, image: "/images/banner3.png", caption: "Herbal, Cruelty-Free & Safe for All Skin Types" },
    { id: 4, image: "/images/banner4.png", caption: "Discover Nature’s Secrets for Your Skin 🌿" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <div className="home-page">
      <div className="banner-section">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div key={banner.id} className="banner-slide">
              <img src={banner.image} alt={banner.caption} className="banner-img" />
              <div className="banner-text">
                <h2>{banner.caption}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="home-info">
        <h2>SkyBloom Organic Beauty Look Book</h2>
        <p>Discover Nature’s Best – 100% Organic & Cruelty-Free Products</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default Home;
