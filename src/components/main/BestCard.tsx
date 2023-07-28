import React from "react";

interface BestCardProps {
  image: string;
  imageAlt: string;
  href: string;
  title: string;
  details: string;
}

const BestCard: React.FC<BestCardProps> = (props) => {
  return (
    <div className="p-1">
      <a
        href={props.href}
        className="flex flex-row-reverse p-3 bg-slate-200 rounded-3xl items-center justify-between w-full border border-white transition duration-300 group hover:bg-slate-300 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200"
      >
        <div className="flex flex-row-reverse items-center">
          <img
            src={props.image}
            alt={props.imageAlt}
            className="h-20 w-20 ml-2 rounded-full"
          />
          <h3 className="text-lg text-right">{props.title}</h3>
        </div>
        <button className="text-white w-fit p-1 sm:px-2 sm:py-1 text-xstext-center bg-gray-700 rounded-3xl sm:text-sm group-hover:bg-white group-hover:text-blue-800 transition-all duration-500 border group-hover:border border-gray-700 ">
          مشاهده
        </button>
      </a>
    </div>
  );
};

export default BestCard;
