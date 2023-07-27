interface SliderCardProps {
  cardSrc: string;
  alt?: string;
  title: string;
}

const SliderCard: React.FC<SliderCardProps> = (props) => {
  return (
    <a className="flex flex-col justify-center items-end pr-2 flex-grow-0 flex-shrink-0 flex-auto">
      <img
        src={props.cardSrc}
        alt={props.alt}
        loading="lazy"
        draggable="false"
        className="rounded-3xl w-[75px] h-[75px] sm:w-[90px] sm:h-[90px] mb-2 object-cover"
      />
      <p className="flex flex-wrap gap-2 justify-center items-start">
        {props.title}
      </p>
    </a>
  );
};

export default SliderCard;
