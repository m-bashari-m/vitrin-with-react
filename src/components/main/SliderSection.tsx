import { ReactNode } from "react";
import SliderHeader, { SliderHeaderProps } from "./SliderHeader";
import Slider from "react-slick";

interface SliderSectionProps extends SliderHeaderProps {
  children: ReactNode;
}

const SliderSection: React.FC<SliderSectionProps> = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="w-full">
      <SliderHeader
        sliderTitle={props.sliderTitle}
        showAllHref={props.showAllHref}
      />
      {/* Main content of the slider which includes some cards which are linkes*/}

      {/* <Slider {...settings}> */}
      {props.children}
      {/* </Slider> */}
    </section>
  );
};

export default SliderSection;
