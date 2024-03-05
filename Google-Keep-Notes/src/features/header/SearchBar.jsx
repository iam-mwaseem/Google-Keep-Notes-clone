import { useEffect } from "react";
import { useNotes } from "../../contexts/NotesContext";
export default function SearchBar() {
  const { notesList, setFilteredNotesList } = useNotes();

  useEffect(() => {
    // Initialize filteredNotesList with the entire notesList when the component mounts
    setFilteredNotesList(notesList);
  }, [notesList, setFilteredNotesList]);
  function handleSearchInput(input) {
    const searchString = input.toLocaleLowerCase();
    const filteredNotes = notesList?.filter((noteItem) => {
      return (
        noteItem.title.toLocaleLowerCase() || noteItem.note.toLocaleLowerCase()
      ).includes(searchString);
    });

    setFilteredNotesList(filteredNotes);
  }
  return (
    <div className="  px-20">
      <input
        placeholder="🔍 Search"
        className=" border border-none w-[450px] sm:w-[450px] md:w-[700px]  bg-slate-100 focus:bg-white focus:outline-none  py-3 px-2  rounded-md"
        onChange={(e) => handleSearchInput(e.target.value)}
      />
    </div>
  );
}
