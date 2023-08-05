import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./Arrow";
import Karbala from "../../images/banners/Kash-Karbala.webp";
import Hossein from "../../images/banners/Ya-Hossein.webp";
import Radio from "../../images/banners/radio.webp";

const BannerSlider: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyload: "ondemand",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} className="w-full">
      <a className="w-full h-auto flex justify-center items-center relative focus:outline-none">
        <div className="text-white p-1 sm:px-2 sm:py-1 text-xs absolute bottom-3 left-3 sm:bottom-5 sm:left-5 text-center bg-gray-700 w-fit rounded-3xl sm:text-sm">
          ۳ / ۱
        </div>
        <img src={Karbala} alt="A banner" draggable="false" />
      </a>
      <a className="min-w-full h-auto flex justify-center items-center relative focus:outline-none">
        <div className="text-white p-1 sm:px-2 sm:py-1 text-xs absolute bottom-3 left-3 sm:bottom-5 sm:left-5 text-center bg-gray-700 w-fit rounded-3xl sm:text-sm">
          ۳ / ۲
        </div>
        <img src={Hossein} alt="A banner" draggable="false" />
      </a>
      <a className="min-w-full h-auto flex justify-center items-center relative focus:outline-none">
        <div className="text-white p-1 sm:px-2 sm:py-1 text-xs absolute bottom-3 left-3 sm:bottom-5 sm:left-5 text-center bg-gray-700 w-fit rounded-3xl sm:text-sm">
          ۳ / ۳
        </div>
        <img src={Radio} alt="A banner" draggable="false" />
      </a>
    </Slider>
  );
};

export default BannerSlider;
