import React, { useState } from "react";
import { connect } from "react-redux";
import Back from "../assets/Back.png";
import Search from "../assets/search.png";
import { addSearchAction } from "../redux/actions/serachList";

const Navbar = ({ addSearchAction }) => {
  const [search, setIsSearch] = useState(false);
  const handleSearch = () => setIsSearch(!search);
  const handleCloseSearch = () => {
    addSearchAction("");
    setIsSearch(!search);
  };
  return (
    <div className="sticky top-0 bg-[#0000006e]">
      <div className="bg-nav-bg-image flex justify-between items-center  min-h-130 px-5 ">
        {search ? (
          <>
            <input
              type="text"
              id="search"
              placeholder="Search"
              class="bg-gray-50 p-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full mr-3"
              onChange={(e) => addSearchAction(e.target.value)}
            />
            <span
              className="text-white text-lg"
              onClick={() => handleCloseSearch()}
            >
              X
            </span>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <img src={Back} alt="Back icon" className="w-1/12" />
              <h3 className="text-white text-xl ml-5">Romantic Comedy</h3>
            </div>
            <div className="" onClick={() => handleSearch()}>
              <img src={Search} alt="Search icon" className="w-5" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  addSearchAction: (payload) => dispatch(addSearchAction(payload)),
});

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Navbar));
