import searchIcon from "../../images/icons/search-icon.svg";

const SearchBar: React.FC = () => {
  return (
    <form className="self-center mt-2 flex items-center justify-between bg-white border-2 border-solid w-11/12 max-w-lg md:hidden rounded-xl">
      <input
        className="rounded-md flex-1 p-2 w-full right-0 outline-none"
        type="search"
        placeholder="جست و جو در ویترین"
      />
      <button className="w-7 h-7 left-3 ml-2">
        <img src={searchIcon} alt="Search Icon" />
      </button>
    </form>
  );
};

export default SearchBar;
