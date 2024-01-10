import SearchBar from "./SearchBar";

export default function Header({ sidebar, setSideBar }) {
  return (
    <div className="flex items-center justify-items-between h-[64px] border-b border-white-500  bg-white my-0">
      <div className="flex items-left justify-between mx-7">
        <img
          src="../../../src/assets/baricon.svg"
          alt="Main menu"
          onClick={() => setSideBar(!sidebar)}
          className=" cursor-pointer"
        />
        <span className=" mx-4 my-4">
          <img src="../../../src/assets/Keepicon.png" alt="Keep" />
        </span>
        <p className="mt-6 text-black text-2xl"> Keep</p>
      </div>

      <SearchBar />
    </div>
  );
}
