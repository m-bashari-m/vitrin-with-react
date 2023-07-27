import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav
      id="navbar"
      className="hidden  md:flex justify-center items-center md:w-screen md:h-[60px] transition-all duration-500 bg-gray-100"
    >
      <div className="w-full mx-auto flex justify-between items-center max-w-[575px] sm:max-w-[800px]">
        <ul className="text-sm font-bold flex gap-6 w-full justify-center">
          <li>
            <a href="#">صفحه نخست</a>
          </li>
          <li>
            <a href="#">بلاگ</a>
          </li>
          <li>
            <a href="#">دریافت برنامه</a>
          </li>
        </ul>

        <div className="flex items-center justify-center w-full">
          <form method="POST">
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 hover:text-white transition-all delay-75 focus:outline-blue-800 focus:shadow-outline"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="q"
                className="border-[1px] border-gray-400 py-2  text-sm text-white pr-3 rounded-3xl pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="جست و جو در ویترین"
                autoComplete="off"
              />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
