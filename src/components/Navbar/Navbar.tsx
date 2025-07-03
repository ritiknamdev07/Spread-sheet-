import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PiDotsThreeBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import userAvatar from "../../assets/Ellipse 1.png";
import panel from "../../assets/Panel.png";

const Navbar: React.FC = () => {
  const [search, setSearch] = React.useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  console.log("Search value:", search);
  return (
    <nav className=" border-b border-gray-300 h-14 flex items-center px-6 w-full fixed top-0 bg-white z-11">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-[16px]">
          {/* <LuPanelRight className="text-[#618666] w-[20px] h-[16px] flex items-center" />  */}
          <img src={panel} alt="panel" className="cursor-pointer" />
          <div className="w-[303px] h-[24px] flex items-center gap-[4px] text-[14px] font-semibold text-[#AFAFAF] cursor-pointer">
            Workspace <IoIosArrowForward /> Folder 2 <IoIosArrowForward />{" "}
            <span className="text-[#000000]">Spreadsheet 3</span>
            <PiDotsThreeBold className="w-[20px] h-[20px]" />
          </div>
        </div>
        <div className="w-[325px] h-[40px] flex items-center gap-[4px]">
          <div className="flex items-center gap-[8px] w-[165px] h-[40px] p-[12px] bg-[#F6F6F6] rounded-[6px]">
            <CiSearch className="w-[16px] h-[16px] text-[#AFAFAF]" />{" "}
            <input
              value={search}
              onChange={handleSearchChange}
              type="text"
              placeholder="Search with sheet"
              className="border border-none py-1 px-2 w-[117px] h-[16px] text-[12px]"
            />
          </div>
          <div className="flex relative w-[40px] cursor-pointer">
            <IoNotificationsOutline className="w-[24px] h-[24px]" />
            <span className="absolute -top-1 -right-[-12px] bg-[#4B6A4F] text-white rounded-full w-[16px] h-[16px] flex items-center justify-center text-[12px]">
              2
            </span>
          </div>
          <div className="flex items-center gap-[8px] w-[112px] h-[40px] cursor-pointer">
            <img src={userAvatar} alt="user avatar" />
            <div className="flex flex-col">
              <span className="text-[#000000] font-semibold text-[12px]">
                John Doe
              </span>
              <span className="text-[#AFAFAF] text-[10px]">john.doe...</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
