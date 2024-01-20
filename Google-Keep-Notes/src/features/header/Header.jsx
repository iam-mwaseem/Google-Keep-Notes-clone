import { useAppLayout } from "../../contexts/AppLayoutContext";
import { useNotes } from "../../contexts/NotesContext";
import SearchBar from "./SearchBar";

export default function Header() {
  const { sidebar, setSideBar } = useAppLayout();

  return (
    <div className="flex items-center justify-items-between h-[64px] border-b border-white-500 w-screen sm:w-svw md:w-svw bg-white my-0">
      <div className="flex items-start justify-between  ">
        <img
          src="../../../src/assets/baricon.svg"
          alt="Main menu"
          onClick={() => setSideBar(!sidebar)}
          className=" cursor-pointer mt-6 mx-3.5  "
        />
        <img
          src="../../../src/assets/Keepicon.png"
          alt="Keep"
          className="mx-3 sm:mx-4 md:mx-5 mt-2 md:mx-2"
        />

        <span className="mt-4 mx-0 text-black text-2xl"> Keep</span>
      </div>

      <SearchBar />
    </div>
  );
}
