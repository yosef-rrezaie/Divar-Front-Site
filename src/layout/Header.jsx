import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      className="flex justify-between items-center 
    border-b-[2px] border-solid border-[#eaeaea] pt-[10px] pb-[10px] mb-[20px]"
    >
      <div className="flex">
        <Link to="/">
          <img src="/divar.svg" className="w-[45px] ml-[20px]" />
        </Link>
      <span className="flex items-center text-gray-600 h-[50px]">
        <img src="/location.svg" />
        <p className="mr-[5px] text-[.9rem]">همدان</p>
      </span>
      </div>
      <div className="flex">
        <Link to="/auth">
          <span className="flex items-center text-gray-600 h-[50px]">
            <img src="./profile.svg" />
            <p className="mr-[5px] text-[.9rem]">دیوار من</p>
          </span>
        </Link>
        <Link
          to="./dashboard"
          className="bg-[#a62626] text-[#fff] h-[40px]
        w-[80px] line-h leading-[40px] text-center rounded-[5px] mr-[40px]"
        >
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
