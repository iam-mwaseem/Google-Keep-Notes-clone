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
        className={`flex flex-col  h-screen  mt-2 absolute shadow-sm cursor-pointer gap-3 bg-white ${
          sidebar ? "w-[20%] sm:w-[21%] md:w-[21%]  " : "w-[5%] shadow-lg  "
        }`}
        onClick={handleClick}
      >
        <LinkButton to="note" onHandleClick={handleClick}>
          <div
            className={`flex flex-row  mt-3 ml-5 ${
              sidebar ? "   ml-3  " : "invisible"
            }`}
          >
            <img
              className="w-9 h-5  visible"
              src="../../../src/assets/lightbulb.svg"
              alt="Notes"
            />
            <span
              className={
                sidebar ? "cursor-pointer  text-center " : "invisible "
              }
            >
              Notes
            </span>
          </div>
        </LinkButton>

        <LinkButton to="archive" onHandleClick={handleClick}>
          <div
            className={`flex flex-row  mt-3 ml-5  ${
              sidebar ? " ml-3" : "invisible"
            }`}
          >
            <img
              className="w-9 h-5  visible"
              src="../../../src/assets/archive.svg"
              alt="Archive"
            />
            <span className={sidebar ? "cursor-pointer  " : "invisible "}>
              Archive
            </span>
          </div>
        </LinkButton>

        <LinkButton to="trash" onHandleClick={handleClick}>
          <div
            className={`flex flex-row  mt-3 ml-5 ${
              sidebar ? " ml-3 " : "invisible"
            }`}
          >
            <img
              src="../../../src/assets/trash.svg"
              alt="Trash"
              className="w-9 h-5  visible"
            />
            <span className={sidebar ? "cursor-pointer " : "invisible "}>
              Trash
            </span>
          </div>
        </LinkButton>

        {sidebar && <p className="mt-auto mx-auto">Created By M.Waseem</p>}
      </div>
    </>
  );
}
