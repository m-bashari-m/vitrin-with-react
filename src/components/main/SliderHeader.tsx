import React from "react";

export interface SliderHeaderProps {
  sliderTitle: string;
  showAllHref: string;
}

const SliderHeader: React.FC<SliderHeaderProps> = (props) => {
  return (
    <div className="flex justify-between my-2 text-base sm:text-lg md:text-xl px-5 mb-4">
      <h6>{props.sliderTitle}</h6>
      <a href={props.showAllHref} className="text-blue-700">
        نمایش همه
      </a>
    </div>
  );
};

export default SliderHeader;
