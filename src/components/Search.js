import React, { useContext } from "react";
import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";

// icons
import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

const Search = () => {
  const {handleClick} = useContext(HouseContext);

  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3
     relative lg:-top-4 lg-shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button onClick={() => handleClick()}
       className="bg-violet-700 hover:bg-violet-800 text-white transition w-full lg:max-w-[142px]
       h-14 rounded-lg text-lg flex items-center justify-center">
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
