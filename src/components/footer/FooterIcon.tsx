interface FooterIconProps {
  href: string;
  iconSrc: string;
  alt: string;
}

const FooterIcon: React.FC<FooterIconProps> = (props) => {
  return (
    <a href={props.href} className="h-8 w-8">
      <img
        src={props.iconSrc}
        alt={props.alt}
        className="w-full h-full text-gray-600"
      />
    </a>
  );
};

export default FooterIcon;
