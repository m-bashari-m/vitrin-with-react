interface SliderCardProps {
  cardSrc: string;
  alt?: string;
  title: string;
}

const SliderCard: React.FC<SliderCardProps> = (props) => {
  return (
    <a className="card">
      <img
        src={props.cardSrc}
        alt={props.alt}
        loading="lazy"
        draggable="false"
        className="card--image"
      />
      <p className="card--title">{props.title}</p>
    </a>
  );
};

export default SliderCard;
