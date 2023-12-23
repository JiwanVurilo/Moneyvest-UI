import { GrSearch } from "react-icons/gr";
import { NavRightIcons } from "../../../lib/data";
import UserImage from "../../../assets/dummyImage.png";

const Navbar = () => {
  return (
    <main className=" text-white/80">
      <nav className="flex justify-between items-center">
        {/* title and input */}
        <div className="bg-[#1a2557] flex p-2 m-[8px] ml-4 pl-4 items-center gap-2 rounded-lg w-[500px] text-white/35 border border-white/25">
          <GrSearch />
          <input
            type="text"
            placeholder="Search for stocks, EFTs & more"
            className="outline-none border-none bg-transparent w-[80%] placeholder:text-white/35"
          />
        </div>
        {/* icons */}
        <div className=" flex items-center gap-4 mr-4">
          {NavRightIcons.map((item, index) => (
            <span key={index} className=" text-2xl font-bold">
              {item.icon}
            </span>
          ))}
          {/* user image */}
          <img
            src={UserImage}
            alt="User"
            className="h-[34px] w-[34px] rounded-full"
          />
        </div>
      </nav>
      {/* <hr /> */}
      <div className="border-b border-white/25 w-full mt-[0.5px]"></div>
    </main>
  );
};

export default Navbar;
