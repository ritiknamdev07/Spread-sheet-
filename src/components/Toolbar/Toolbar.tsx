import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Button } from "../ui/button";
import { BiHide } from "react-icons/bi";
import { Separator } from "../ui/separator";
import { TbArrowAutofitHeight } from "react-icons/tb";
import { BiSortAlt2 } from "react-icons/bi";
import { IoFilterOutline } from "react-icons/io5";
import { LuArrowDownToLine } from "react-icons/lu";
import { TiExportOutline } from "react-icons/ti";
import { LuArrowUpToLine } from "react-icons/lu";
import { TiArrowShuffle } from "react-icons/ti";
import { PiArrowsSplitFill } from "react-icons/pi";
const Toolbar: React.FC = () => {
  return (
    <div className=" border-b border-gray-300 h-[48px] flex items-center px-6 w-full gap-[8px] justify-between fixed top-[54px] bg-white z-10">
      <div className="flex items-center gap-[8px]">
        <Button
          variant="ghost"
          size="sm"
          className="text-[14px]"
          style={{ fontWeight: 400 }}
        >
          Tool bar <MdKeyboardDoubleArrowRight className="w-[16px] h-[16px]" />
        </Button>{" "}
      <div className="h-[24px]">
        {" "}
        <Separator orientation="vertical" />
      </div>
      <div>
        {" "}
        <Button
          variant="ghost"
       
          className="text-[14px] h-[36px]"
          style={{ fontWeight: 400 }}
        >
          <BiHide /> Hide fields
        </Button>
      </div>
      <div>
        {" "}
        <Button
          variant="ghost"
          
          className="text-[14px]"
          style={{ fontWeight: 400 }}
        >
          <BiSortAlt2 size={20} /> Sort
        </Button>
      </div>
      <div>
        {" "}
        <Button
          variant="ghost"
          
          className="text-[14px]"
          style={{ fontWeight: 400 }}
        >
          <IoFilterOutline size={20} /> Filter
        </Button>
      </div>
      <div>
        {" "}
        <Button
          variant="ghost"
          
          className="text-[14px]"
          style={{ fontWeight: 400 }}
        >
          <TbArrowAutofitHeight size={20} /> Cell view
        </Button>
      </div>
      </div>
     
      <div className="flex items-center gap-[8px]">
        <Button
          variant="outline"
          
          className="text-[14px]"
          style={{ fontWeight: 400 }}
        >
          <LuArrowDownToLine size={20} /> Import
        </Button>
        <Button
          variant="outline"
          
          className="text-[14px]"
          style={{ fontWeight: 400 }}
        >
          <LuArrowUpToLine size={20} /> Export
        </Button>
        <Button
          variant="outline"
          
          className="text-[14px]"
          style={{ fontWeight: 400 }}
        >
          <TiExportOutline size={20} /> Share
        </Button>
        <Button
          

          
          className="text-[14px] W-[150px] bg-[#4B6A4F]"
          style={{ fontWeight: 400 }}
        >
          <PiArrowsSplitFill size={20} /> New Action
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
