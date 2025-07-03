import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoMdAdd } from "react-icons/io";
import { CiHashtag } from "react-icons/ci";
import { IoLink } from "react-icons/io5";
import { LuRefreshCcw } from "react-icons/lu";
import { PiArrowsSplitFill } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { LiaHandPaper } from "react-icons/lia";
import { MdKeyboardArrowDown } from "react-icons/md";

const TableComponent: React.FC = () => {
  // Sample data for the table
  const tableData = [
    {
      id: 1,
      jobRequest: "Launch social media campaign for pro...",
      submitted: "15-11-2024",
      status: "In-process",
      submitter: "Aisha Patel",
      url: "www.aishapatel...",
      assigned: "Sophie Choudhury",
      priority: "Medium",
      dueDate: "20-11-2024",
      estValue: "6,200,000 ₹",
    },
    {
      id: 2,
      jobRequest: "Update press kit for company redesign",
      submitted: "28-10-2024",
      status: "Need to start",
      submitter: "Irfan Khan",
      url: "www.irfankhanp...",
      assigned: "Tejas Pandey",
      priority: "High",
      dueDate: "30-10-2024",
      estValue: "3,500,000 ₹",
    },
    {
      id: 3,
      jobRequest: "Finalize user testing feedback for app...",
      submitted: "05-12-2024",
      status: "In-process",
      submitter: "Mark Johnson",
      url: "www.markjohns...",
      assigned: "Rachel Lee",
      priority: "Medium",
      dueDate: "10-12-2024",
      estValue: "4,750,000 ₹",
    },
    {
      id: 4,
      jobRequest: "Design new features for the website",
      submitted: "10-01-2025",
      status: "Complete",
      submitter: "Emily Green",
      url: "www.emilygreen...",
      assigned: "Tom Wright",
      priority: "Low",
      dueDate: "15-01-2025",
      estValue: "5,900,000 ₹",
    },
    {
      id: 5,
      jobRequest: "Prepare financial report for Q4",
      submitted: "25-01-2025",
      status: "Blocked",
      submitter: "Jessica Brown",
      url: "www.jessicabro...",
      assigned: "Kevin Smith",
      priority: "Low",
      dueDate: "30-01-2025",
      estValue: "2,800,000 ₹",
    },
    {
      id: 6,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 7,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 8,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 9,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 10,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 11,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 12,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 13,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 14,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 15,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 16,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 17,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 18,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 19,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 20,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
  ];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTableCellElement>) => {
    console.log(e);

    const cell = e.currentTarget;
    const row = cell.parentElement as HTMLTableRowElement;
    const table = row?.parentElement;
    console.log("Cell:", cell);
    console.log("Row:", row);
    console.log("Table:", table);

    if (!row || !table) return;

    const rowIndex = Array.from(table.children).indexOf(row);
    const colIndex = cell.cellIndex;

    let targetCell: HTMLTableCellElement | null = null;

    switch (e.key) {
      case "ArrowRight":
        targetCell = row.cells[colIndex + 1] as HTMLTableCellElement;
        break;
      case "ArrowLeft":
        targetCell = row.cells[colIndex - 1] as HTMLTableCellElement;
        break;
      case "ArrowDown":
        const nextRow = table.children[rowIndex + 1] as HTMLTableRowElement;
        if (nextRow)
          targetCell = nextRow.cells[colIndex] as HTMLTableCellElement;
        break;
      case "ArrowUp":
        const prevRow = table.children[rowIndex - 1] as HTMLTableRowElement;
        if (prevRow)
          targetCell = prevRow.cells[colIndex] as HTMLTableCellElement;
        break;
      default:
        return;
    }

    if (targetCell) {
      e.preventDefault();
      targetCell.focus();
    }
  };

  return (
    <div className="mt-[103px] mb-[45px]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[32px] border-r border-gray-300"></TableHead>

            <TableHead
              className="w-[631px] border-r border-gray-300 bg-[#E2E2E2] text-[#545454]"
              colSpan={4}
            >
              {" "}
              <span className="flex items-center gap-[4px] ">
                <IoLink className="text-[#1A8CFF]" /> Q3 Financial Overview{" "}
                <LuRefreshCcw className="text-[#FA6736]" />{" "}
              </span>
            </TableHead>

            <TableHead className="w-[124px] border-r border-gray-300"></TableHead>
            <TableHead className="w-[124px] border-r border-gray-300 bg-[#D2E0D4] text-[#505450]">
              <span className="flex items-center gap-[4px] ">
                <PiArrowsSplitFill className="text-white" /> ABC{" "}
              </span>
            </TableHead>
            <TableHead
              className="w-[248px] border-r border-gray-300 bg-[#DCCFFC] text-[#463E59]"
              colSpan={2}
            >
              <span className="flex items-center gap-[4px] ">
                <PiArrowsSplitFill className="text-white" />
                Answer a question
              </span>
            </TableHead>

            <TableHead className="w-[124px] border-r border-gray-300 bg-[#FAC2AF] text-[#695149] ">
              <span className="flex items-center gap-[4px] ">
                <PiArrowsSplitFill className="text-white" />
                Extract
              </span>
            </TableHead>
            <TableHead className="w-[124px] border-r border-gray-300 flex items-center justify-center">
              <IoMdAdd size={20} />
            </TableHead>
          </TableRow>

          <TableRow>
            <TableHead className="w-[32px] border-r border-gray-300 bg-[#EEEEEE] text-[#757575]">
              <CiHashtag size={20} className="text-[#757575]" />
            </TableHead>
            <TableHead className="border-r border-gray-300 bg-[#EEEEEE] text-[#757575]">
              <span className="flex items-center gap-[4px]">
                <FaBriefcase /> Job Request{" "}
                <MdKeyboardArrowDown className="justify-self-end" />
              </span>
            </TableHead>
            <TableHead className="border-r border-gray-300 bg-[#EEEEEE] text-[#757575]">
              {" "}
              <span className="flex items-center gap-[4px]">
                <FaCalendarAlt /> Submitted{" "}
                <MdKeyboardArrowDown className="justify-self-end" />
              </span>
            </TableHead>
            <TableHead className="border-r border-gray-300 bg-[#EEEEEE] text-[#757575]">
              {" "}
              <span className="flex items-center gap-[4px]">
                <IoIosArrowDropdownCircle /> Status{" "}
                <MdKeyboardArrowDown className="justify-self-end" />
              </span>
            </TableHead>
            <TableHead className="border-r border-gray-300 bg-[#EEEEEE] text-[#757575]">
              <span className="flex items-center gap-[4px]">
                <FaUser /> Submitter{" "}
                <MdKeyboardArrowDown className="justify-self-end" />
              </span>
            </TableHead>
            <TableHead className="border-r border-gray-300 bg-[#EEEEEE] text-[#757575]">
              <span className="flex items-center gap-[4px]">
                <TbWorld /> URL
              </span>
            </TableHead>
            <TableHead className="border-r border-gray-300 bg-[#E8F0E9] text-[#666C66]">
              <span className="flex items-center gap-[4px]">
                <LiaHandPaper /> Assigned
              </span>
            </TableHead>
            <TableHead className="border-r border-gray-300 bg-[#EAE3FC] text-[#655C80]">
              Priority
            </TableHead>
            <TableHead className="border-r border-gray-300 bg-[#EAE3FC] text-[#655C80]">
              Due Date
            </TableHead>
            <TableHead className="border-r border-gray-300 bg-[#FFE9E0] text-[#8C6C62]">
              Est. Value
            </TableHead>
            <TableHead className="w-[124px] border-r border-gray-300"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id}>
              <TableCell
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className="border-r border-gray-300 text-[#757575]"
              >
                {row.id}
              </TableCell>
              <TableCell
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className="border-r border-gray-300"
              >
                {row.jobRequest}
              </TableCell>
              <TableCell
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className="border-r border-gray-300 text-right"
              >
                {row.submitted}
              </TableCell>
              <TableCell
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className="border-r border-gray-300 text-center"
              >
                {row.status === "In-process" && (
                  <span
                    style={{
                      background: "#FFF3D6",
                      color: "#85640B",
                      padding: "2px 8px",
                      borderRadius: "12px",
                    }}
                  >
                    In-process
                  </span>
                )}
                {row.status === "Need to start" && (
                  <span
                    style={{
                      background: "#E2E8F0",
                      color: "#475569",
                      padding: "2px 8px",
                      borderRadius: "12px",
                    }}
                  >
                    Need to start
                  </span>
                )}
                {row.status === "Complete" && (
                  <span
                    style={{
                      background: "#D3F2E3",
                      color: "#0A6E3D",
                      padding: "2px 8px",
                      borderRadius: "12px",
                    }}
                  >
                    Complete
                  </span>
                )}
                {row.status === "Blocked" && (
                  <span
                    style={{
                      background: "#FFE1DE",
                      color: "#C22219",
                      padding: "2px 8px",
                      borderRadius: "12px",
                    }}
                  >
                    Blocked
                  </span>
                )}
              </TableCell>
              <TableCell
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className="border-r border-gray-300"
              >
                {row.submitter}
              </TableCell>
              <TableCell
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className="border-r border-gray-300"
              >
                <a
                  href={`https://${row.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {row.url}
                </a>
              </TableCell>
              <TableCell
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className="border-r border-gray-300"
              >
                {row.assigned}
              </TableCell>
              <TableCell
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className="border-r border-gray-300 text-center"
              >
                <span
                  style={{
                    color:
                      row.priority === "High"
                        ? "#EF4D44"
                        : row.priority === "Medium"
                        ? "#C29210"
                        : "#1A8CFF",
                    fontWeight: "bold",
                  }}
                >
                  {row.priority}
                </span>
              </TableCell>
              <TableCell
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className="border-r border-gray-300 text-right"
              >
                {row.dueDate}
              </TableCell>
              <TableCell
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className="border-r border-gray-300 text-right"
              >
                {row.estValue}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;
