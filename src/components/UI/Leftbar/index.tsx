import MoneyVestImage from "../../../assets/logo.png";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoList } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";

import {
  InvestmentSubComponentOne,
  InvestmentSubComponentTwo,
} from "../../../lib/data";

const LeftBar = () => {
  return (
    <section className="h-[100vh] border-r border-white/25 flex-1 bg-[#080d27] relative">
      {/* div1 / title */}
      <div className="flex justify-center items-center text-center text-white gap-[6px] pt-3 p-2 pb-[0.4rem]">
        <img
          className="h-[40px] w-[60px]"
          src={MoneyVestImage}
          alt="MoneyVest"
        />
        <h1 className="uppercase text-2xl font-bold tracking-wide">
          moneyvest
        </h1>
      </div>
      <hr className="opacity-25" />
      {/* div2 / market section*/}
      <div className="flex justify-start items-center pl-8 mt-12 mb-6 text-white/60 gap-[6px] font-semibold">
        <MdOutlineDashboardCustomize />
        <span>Market</span>
      </div>
      <hr className="opacity-25" />
      {/* div3 / investment */}
      <div className="text-white/60">
        {/* watchlist */}
        <div className="flex justify-start items-center pl-8 mt-6 mb-5 gap-[6px] font-semibold">
          <IoList />
          <span>Watchlist</span>
        </div>
        {/* investment */}
        <div className="flex justify-between items-center pr-4">
          <div className="flex items-center ml-[-5px]">
            <MdPlayArrow />
            <div className="flex items-center pl-4 gap-[6px] font-semibold">
              <FaDollarSign />
              <span>Investments</span>
            </div>
          </div>
          <IoIosArrowUp />
        </div>
        {/* investment sub-group */}
        {/* first list line */}
        <div className="ml-[2.1rem] h-[35px] w-[13px] bg-transparent border-l border-b border-l-white/25 border-b-white/25 rounded-bl-md"></div>
        {/* second list line */}
        <div className=" ml-[2.1rem] h-[50px] w-[13px] bg-transparent border-l border-b border-l-white/25 border-b-white/25 rounded-bl-md "></div>
        {/* third list line */}
        <div className=" ml-[2.1rem] h-[50px] w-[13px] bg-transparent border-l border-b border-l-white/25 border-b-white/25 rounded-bl-md"></div>

        {/* margin div */}
        <div className=" -mt-[8rem]"></div>
        <div className="flex flex-col pl-12 gap-1 font-semibold">
          {InvestmentSubComponentOne.map((item, index) => (
            <span
              key={index}
              className={`${
                index === 0 && "bg-[#1a2557] w-[90%] rounded-md text-white"
              } p-3 hover:bg-[#1a2557] hover:w-[90%] hover:rounded-md cursor-pointer hover:text-white `}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <hr className="mb-7 mt-5 opacity-25" />
      {/* div4 / help / account */}
      <div className="text-white/60 font-semibold">
        {InvestmentSubComponentTwo.map((item, index) => (
          <div key={index} className="flex items-center pl-8 gap-[6px] pb-3">
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      {/* help button */}
      <div className=" text-[#4f67c6] flex items-center justify-center ml-8 gap-3 border border-[#4f67c6] w-[80%] p-3 rounded-lg font-semibold cursor-pointer absolute bottom-10">
        <FaRegQuestionCircle />
        <button className="cursor-pointer">Help</button>
      </div>
    </section>
  );
};

export default LeftBar;
