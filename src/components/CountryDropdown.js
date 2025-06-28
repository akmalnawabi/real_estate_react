import React, { useContext, useState } from "react";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button className="dropdwon-btn w-full text-left">
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div>{country}</div>
          <div>Select Your Place</div>
          {isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-primary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-primary" />
          )}
        </div>
      </Menu.Button>
    </Menu>
  );
};

export default CountryDropdown;
