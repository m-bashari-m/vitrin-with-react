import useMedia from "../../hooks/useMedia";
import HeaderAds from "./HeaderAds";
import HeaderBanner from "./HeaderBanner";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
  const isWide = useMedia("(min-width: 768px)")[0];

  return (
    <header className="flex flex-col fixed z-20 w-full">
      {!isWide ? <HeaderAds /> : <HeaderBanner />}

      <SearchBar />

      <Navbar />
    </header>
  );
};

export default Header;
