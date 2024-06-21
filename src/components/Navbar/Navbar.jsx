import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setSearchParam } from "../../Slices/paramsSlice";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const searchHandler = () => {
    dispatch(setSearchParam(searchQuery));
    setSearchQuery("");
  };
  return (
    <nav className="flex md:flex-row justify-around content-center bg-landingPrimary-0 md:p-5 p-2 flex-col gap-5">
      <Link to={"/"} className="font-Gilroy_Bold md:text-3xl text-3xl text-slate-800 ">
        React News Portal
      </Link>
      <div className="flex justify-between content-center border-2 border-slate-900 rounded-xl overflow-hidden">
        <input
          className="outline-none md:p-2 p-3 md:text-xl text-2xl bg-landingPrimary-0 font-Gilroy_Medium"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="search"
        />
        <button className="md:text-3xl text-4xl" onClick={searchHandler}>
          <CiSearch />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
