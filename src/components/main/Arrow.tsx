interface ArrowProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const commenClasses =
  "top-1/2 z-10 cursor-pointer absolute w-auto -mt-5 p-3 text-white text-xs sm:text-base transition duration-300 select-none hover:bg-gray-700";

const NextArrow: React.FC<ArrowProps> = (props) => {
  return (
    <a
      className={commenClasses + " right-0 rounded-tl-lg rounded-bl-lg"}
      onClick={props.onClick}
    >
      &#10095;
    </a>
  );
};

const PrevArrow: React.FC<ArrowProps> = (props) => {
  return (
    <a
      className={commenClasses + " left-0 rounded-tr-lg rounded-br-lg"}
      onClick={props.onClick}
    >
      &#10094;
    </a>
  );
};

export { PrevArrow, NextArrow };
