import FooterIcon from "./FooterIcon";
import twitterIcon from "../../images/icons/twitter.svg";
import instagramIcon from "../../images/icons/instagram.svg";
import emailIcon from "../../images/icons/envelope.svg";
import wwwIcon from "../../images/icons/globe2.svg";

const Footer: React.FC = () => {
  return (
    <footer className="flex bg-gray-100 w-full h-32 justify-center items-center">
      <div className="flex flex-col sm:flex-row items-center justify-between w-11/12 max-w-3xl">
        <div className="flex gap-5 mb-3 ml-3 sm:mb-0">
          <FooterIcon href="#" alt="twitter icon" iconSrc={twitterIcon} />
          <FooterIcon href="#" alt="email icon" iconSrc={emailIcon} />
          <FooterIcon href="#" alt="www icon" iconSrc={wwwIcon} />
          <FooterIcon href="#" alt="instagram icon" iconSrc={instagramIcon} />
        </div>

        <p className="text-xs pr-2 text-center">
          تمامی حقوق مادی و معنوی این صفحه متعلق به پیام رسان سروش پلاس می‌باشد.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
