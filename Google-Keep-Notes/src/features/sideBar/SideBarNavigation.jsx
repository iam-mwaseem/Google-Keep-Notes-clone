import { useState } from "react";
import LinkButton from "../../ui/LinkButton";

export default function SideBar({ sideBar, setSideBar }) {
  // const [expanded, setExpanded] = useState(false);
  function handleClick() {
    // setExpanded(true);
    setSideBar(true);
  }
  return (
    <>
      <div
        className={`flex flex-col items-start px-auto mt-0 absolute shadow-2xl cursor-pointer    gap-4 bg-white ${
          sideBar ? "w-[20%] " : " w-[5%] shadow-lg px-2  "
        } h-dvh`}
        onClick={handleClick}
      >
        <LinkButton to="note" onHandleClick={handleClick}>
          <div
            className={`flex flex-row items-center  ${
              sideBar
                ? "visible w-full  hover:bg-orange-100 rounded-full"
                : "invisible"
            }`}
          >
            {!sideBar ? (
              <img
                className=" w-9 h-5 m-2 visible  "
                src="../../../src/assets/lightbulb_12.svg"
                alt="Notes"
              />
            ) : (
              <img
                className=" w-9 h-5 m-2 visible  "
                src="../../../src/assets/lightbulb_12.svg"
                alt="Notes"
              />
            )}

            <span className={sideBar ? "cursor-pointer" : "invisible"}>
              {" "}
              Notes
            </span>
          </div>
        </LinkButton>

        <LinkButton to="archive" onHandleClick={handleClick}>
          <div
            className={`flex flex-row items-center ${
              sideBar
                ? "visible w-full  hover:bg-orange-100 rounded-full "
                : "invisible"
            }`}
          >
            {!sideBar ? (
              <img
                className=" w-9 h-5 mx-4 visible"
                src="../../../src/assets/archive.svg "
                alt="Archive"
              />
            ) : (
              <img
                className=" w-9 h-5 m-2 visible"
                src="../../../src/assets/archive.svg "
                alt="Archive"
              />
            )}
            <span className=" cursor-pointer">Archive</span>
          </div>
        </LinkButton>
        <LinkButton to="trash" onHandleClick={handleClick}>
          <div
            className={`flex flex-row items-center ${
              sideBar
                ? "visible w-full hover:bg-orange-100 rounded-full"
                : "invisible"
            }`}
          >
            {!sideBar ? (
              <img
                src="../../../src/assets/trash.svg"
                alt="Trash"
                className=" w-9 h-5 m-2 visible"
              />
            ) : (
              <img
                src="../../../src/assets/trash.svg"
                alt="Trash"
                className=" w-9 h-5 m-2 visible"
              />
            )}
            <span className=" cursor-pointer">Trash</span>
          </div>
        </LinkButton>
        {sideBar && <p className=" mt-auto mx-auto">Created By M.Waseem</p>}
      </div>
    </>
  );
}
