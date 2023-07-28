import sPlusIcon from "../../images/icons/soroushPlusLogo.svg";

const HeaderBanner: React.FC = () => {
  return (
    <div className="hidden md:flex md:flex-col md:pt-2 md:pr-12 md:bg-blue-800 md:w-screen md:h-16">
      <img
        className="h-8 w-8 rounded-full mr-4"
        src={sPlusIcon}
        alt="soroush plus logo"
      />
      <p className="text-white text-sm">سروش پلاس</p>
    </div>
  );
};

export default HeaderBanner;
