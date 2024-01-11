export default function Footer({
  notesList,
  setNotesList,
  id,
  trashList,
  setTrashList,
  setArchiveList,
}) {
  function handleArchive() {
    const updatedNoteList = notesList.filter((note, index) => index !== id);
    const archivedNote = notesList.find((note, index) => index === id);

    setNotesList(updatedNoteList);
    setArchiveList((prevArchiveList) => [...prevArchiveList, archivedNote]);
  }
  function handleDelete() {
    // Filter the current Notelist, and if the current id match with the notes of id inside Notelist then delete it
    const updatedNoteList = notesList.filter((note, index) => index !== id);
    const deletedNote = notesList.find((note, index) => index === id);
    console.log(updatedNoteList);
    console.log(deletedNote);

    setNotesList(updatedNoteList);
    setTrashList((prevTrashList) => [...prevTrashList, deletedNote]);
  }
  return (
    <div className="flex flex-row  justify-end ">
      <div>
        <button onClick={handleArchive} className="   mt-2 px-4 py-2">
          <img
            src="../../../../src/assets/archive.svg"
            alt="archive"
            className=" w-5 h-auto "
          />
        </button>
      </div>
      <div>
        <button onClick={handleDelete} className="   mt-2 px-4 py-2">
          <img
            src="../../../../src/assets/trash.svg"
            alt="delete"
            className=" w-5 h-auto "
          />
        </button>
      </div>
    </div>
  );
}
