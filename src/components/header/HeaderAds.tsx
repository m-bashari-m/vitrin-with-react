import xSymbol from "../../images/icons/x-symbol.svg";
import sPlusIcon from "../../images/icons/soroushPlusLogo.svg";
import React from "react";

interface HeaderAdsProps {
  setCloseAds: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderAds: React.FC<HeaderAdsProps> = (props) => {
  function handleCloseAds() {
    props.setCloseAds(true);
  }

  return (
    <a
      id="ads"
      href="#"
      className="bg-gray-100 md:hidden w-screen h-16 flex justify-between flex-row items-center px-4 py-3"
    >
      <div className="flex flex-row items-center">
        <img
          className="h-4 w-4 px-1 ml-2"
          src={xSymbol}
          alt="x-symbol"
          onClick={handleCloseAds}
        />
        <img
          className="h-10 w-10 rounded-2xl ml-2"
          src={sPlusIcon}
          alt="soroushPlusLogo"
        />
        <div className="flex flex-col pr-2 text-sm">
          <p>اپلیکیشن سروش پلاس</p>
          <p>دریافت رایگان برنامه</p>
        </div>
      </div>
      <span className="text-blue-900">دانلود</span>
    </a>
  );
};

export default HeaderAds;
