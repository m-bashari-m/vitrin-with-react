import React from "react";

interface CategoryProps {
  image: string;
  alt: string;
  title: string;
}

const Category: React.FC<CategoryProps> = (props) => {
  return (
    <a className="hover:cursor-pointer flex items-center flex-col">
      <div className="relative group">
        <div className="absolute w-full h-full opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-4xl hover:bg-gradient-to-br from-blue-100 to-blue-950 z-10"></div>
        <img
          src={props.image}
          alt={props.alt}
          draggable={false}
          loading="lazy"
          className="select-none"
        />
      </div>
      <p className="flex justify-between my-2 text-sm sm:text-base px-2">
        {props.title}
      </p>
    </a>
  );
};

export default Category;
