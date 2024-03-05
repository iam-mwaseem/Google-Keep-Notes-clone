import { useAppLayout } from "../../contexts/AppLayoutContext";

import { useNotes } from "../../contexts/NotesContext";
import SearchBar from "./SearchBar";

export default function Header() {
  const { sidebar, setSideBar } = useAppLayout();

  return (
    <div className="flex items-center justify-items-between h-[64px] border-b border-white-500 w-screen sm:w-svw md:w-svw bg-white my-0">
      <img
        src="../../../src/assets/baricon.svg"
        alt="Main menu"
        onClick={() => setSideBar(!sidebar)}
        className={` cursor-pointer my-auto ml-6 w-4 h-4   `}
      />

      <div className="flex items-start justify-between mx-5 ">
        <img
          src="../../../src/assets/Keepicon.png"
          alt="Keep"
          className="mx-3 sm:mx-4  my-auto w-7 h-10 "
        />

        <p className="my-auto mx-0 text-black text-2xl "> Keep</p>
      </div>

      <SearchBar />
    </div>
  );
}
