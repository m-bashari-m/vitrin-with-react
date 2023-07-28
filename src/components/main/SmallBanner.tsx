import React from "react";

interface SmallBannerProps {
  image: string;
  alt: string;
}

const SmallBanner: React.FC<SmallBannerProps> = (props) => {
  return (
    <div className="my-2 mb-4 px-5 hover:cursor-pointer w-full">
      <img
        src={props.image}
        alt={props.alt}
        loading="lazy"
        className="object-containe w-full"
      />
    </div>
  );
};

export default SmallBanner;
