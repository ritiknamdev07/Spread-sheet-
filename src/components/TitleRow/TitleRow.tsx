import React from "react";
import { Button } from "../ui/button";
import { IoMdAdd } from "react-icons/io";

const TitleRow: React.FC = () => {
  const [selectedTitle, setSelectedTitle] = React.useState<string | null>(
    "All Orders"
  );
  console.log("Selected Title:", selectedTitle);

  const handleTitleChange = (title: string) => {
    setSelectedTitle(title);
  };
  
  const titles = ["All Orders", "Panding", "Resolved", "Archived"];

  return (
    <div className="fixed bottom-0 bg-white w-full z-10 h-[48px] flex items-center">
      <div className="flex items-end h-[41px] ml-[35px]">
        {titles.map((title, index) =>
          selectedTitle === title ? (
            <Button
              onClick={() => handleTitleChange(title)}
              key={index}
              variant="ghost"
              className="rounded-none font-semibold text-sm border-t-2 border-[#4B6A4F] text-[#3E5741]"
            >
              {title}
            </Button>
          ) : (
            <Button
              onClick={() => handleTitleChange(title)}
              key={index}
              variant="ghost"
              className="rounded-none font-semibold text-sm text-[#757575]"
            >
              {title}
            </Button>
          )
        )}
        <div>
          <Button
            onClick={() => handleTitleChange("")}
            variant="ghost"
            className="rounded-none font-semibold text-sm text-[#757575]"
          >
            <IoMdAdd />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TitleRow;
