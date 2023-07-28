import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { best as cards } from "../../data/data";
import BestCard from "./BestCard";
import useMedia from "../../hooks/useMedia";

const BestSection: React.FC = () => {
  const isXs = useMedia("(max-width: 400px)")[0];
  const isSm = useMedia("(max-width: 575px) and (min-width: 400px)")[0];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: isXs ? 1 : isSm ? 1 : 2,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    arrows: false,
  };

  return (
    <div className="w-full my-2 selection:cursor-wait">
      <div className="flex justify-between my-2 text-base sm:text-lg md:text-xl px-5 mb-4">
        <h6>برترین ها</h6>
      </div>

      <Slider {...settings} className="w-full px-3 my-2">
        {cards.map((card) => (
          <BestCard
            key={card.id}
            href={card.href}
            image={card.image}
            imageAlt={card.imageAlt}
            title={card.title}
            details={card.details}
          />
        ))}
      </Slider>
    </div>
  );
};

export default BestSection;
