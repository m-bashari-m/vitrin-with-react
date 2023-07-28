import React from "react";

interface CategoryProps {
  image: string;
  alt: string;
  title: string;
}

const Category: React.FC<CategoryProps> = (props) => {
  return (
    <a className="hover:cursor-pointer flex items-center flex-col">
      <div className="relative group rounded-4xl overflow-hidden">
        <div className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] opacity-20 group-hover:opacity-30 transition duration-500  rounded-4xl hover:rotate-180 z-10 bg-gradient-to-bl from-blue-500 to-yellow-500"></div>
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
