import React from "react";

interface SmallBannerProps {
  image: string;
  alt: string;
}

const SmallBanner: React.FC<SmallBannerProps> = (props) => {
  return (
    <div className="my-2 mb-8 px-5">
      <img src={props.image} alt={props.alt} loading="lazy" />
    </div>
  );
};

export default SmallBanner;
