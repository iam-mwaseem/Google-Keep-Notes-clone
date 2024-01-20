import { useAppLayout } from "../../contexts/AppLayoutContext";
import LinkButton from "../../ui/LinkButton";

export default function SideBar() {
  const { sidebar, setSideBar } = useAppLayout();
  function handleClick() {
    setSideBar(true);
  }

  return (
    <>
      <div
        className={`flex flex-col items-start min-h-screen  mt-0 absolute shadow-2xl cursor-pointer gap-4 bg-white ${
          sidebar ? "w-[20%] sm:w-[21%] md:w-[21%]" : "w-[5%]  shadow-lg"
        }`}
        onClick={handleClick}
      >
        <LinkButton to="note" onHandleClick={handleClick}>
          <div
            className={`flex flex-row items-center ${
              sidebar ? "w-full hover:bg-orange-100 rounded-full" : "invisible"
            }`}
          >
            <img
              className="w-9 h-5 mt-3 visible"
              src="../../../src/assets/lightbulb.svg"
              alt="Notes"
            />
            <span
              className={sidebar ? "cursor-pointer mt-5" : "invisible mt-5"}
            >
              Notes
            </span>
          </div>
        </LinkButton>

        <LinkButton to="archive" onHandleClick={handleClick}>
          <div
            className={`flex flex-row items-center ${
              sidebar ? "w-full hover:bg-orange-100 rounded-full" : "invisible"
            }`}
          >
            <img
              className="w-9 h-5  mt-5 visible"
              src="../../../src/assets/archive.svg"
              alt="Archive"
            />
            <span className="cursor-pointer mt-5">Archive</span>
          </div>
        </LinkButton>

        <LinkButton to="trash" onHandleClick={handleClick}>
          <div
            className={`flex flex-row items-center ${
              sidebar ? "w-full hover:bg-orange-100 rounded-full" : "invisible"
            }`}
          >
            <img
              src="../../../src/assets/trash.svg"
              alt="Trash"
              className="w-9 h-5 mt-5 visible"
            />
            <span className="cursor-pointer mt-5">Trash</span>
          </div>
        </LinkButton>

        {sidebar && <p className="mt-auto mx-auto">Created By M.Waseem</p>}
      </div>
    </>
  );
}
