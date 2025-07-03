import React, { useState } from "react";
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
import { PiArrowsSplitFill } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
const Toolbar: React.FC = () => {
  const [hideFields, setHideFields] = useState(false);
  const [sort, setSort] = useState(false);
  const [filter, setFilter] = useState(false);
  const [cellView, setCellView] = useState(false);

  console.log("Hide Fields:", hideFields);
  console.log("Sort:", sort);
  console.log("Filter:", filter);
  console.log("Cell View:", cellView);

  const handleHideFields = () => {
    setHideFields(!hideFields);
  };
  const handleSort = () => {
    setSort(!sort);
  };
  const handleFilter = () => {
    setFilter(!filter);
  };
  const handleCellView = () => {
    setCellView(!cellView);
  };

  const handleImport = () => {
    console.log("Import clicked");
  };
  const handleExport = () => {
    console.log("Export clicked");
  };
  const handleShare = () => {
    console.log("Share clicked");
  };
  const handleNewAction = () => {
    console.log("New Action clicked");
  };
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
            onClick={handleHideFields}
            className="text-[14px] h-[36px]"
            style={{ fontWeight: 400 }}
          >
            {hideFields ? <FaRegEye /> : <BiHide />} Hide fields
          </Button>
        </div>
        <div>
          {" "}
          <Button
            variant="ghost"
            onClick={handleSort}
            disabled={hideFields}
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
            onClick={handleFilter}
            disabled={hideFields}
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
            onClick={handleCellView}
            disabled={hideFields}
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
          onClick={handleImport}
          disabled={hideFields}
          className="text-[14px]"
          style={{ fontWeight: 400 }}
        >
          <LuArrowDownToLine size={20} /> Import
        </Button>
        <Button
          variant="outline"
          onClick={handleExport}
          className="text-[14px]"
          style={{ fontWeight: 400 }}
        >
          <LuArrowUpToLine size={20} /> Export
        </Button>
        <Button
          variant="outline"
          onClick={handleShare}
          disabled={hideFields}
          className="text-[14px]"
          style={{ fontWeight: 400 }}
        >
          <TiExportOutline size={20} /> Share
        </Button>
        <Button
          onClick={handleNewAction}
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
