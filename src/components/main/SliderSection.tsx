import { ReactNode } from "react";
import SliderHeader, { SliderHeaderProps } from "./SliderHeader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMedia from "../../hooks/useMedia";

interface SliderSectionProps extends SliderHeaderProps {
  children: ReactNode;
}

const SliderSection: React.FC<SliderSectionProps> = (props) => {
  const isXs = useMedia("(max-width: 400px)")[0];
  const isSm = useMedia("(max-width: 575px) and (min-width: 400px)")[0];
  const isMd = useMedia("(max-width: 768px) and (min-width: 575px)")[0];
  const isLg = useMedia("(max-width: 990px) and (min-width: 768px)")[0];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: isXs ? 4 : isSm ? 5 : isMd ? 6 : isLg ? 5 : 8,
    slidesToScroll: isXs ? 2 : isSm ? 2 : isMd ? 3 : isLg ? 2 : 5,
    lazyload: "ondemand",
  };

  return (
    <section className="w-full">
      <SliderHeader
        sliderTitle={props.sliderTitle}
        showAllHref={props.showAllHref}
      />
      {/* Main content of the slider which includes some cards which are linkes*/}

      <Slider className="px-2" {...settings}>
        {props.children}
      </Slider>
    </section>
  );
};

export default SliderSection;
