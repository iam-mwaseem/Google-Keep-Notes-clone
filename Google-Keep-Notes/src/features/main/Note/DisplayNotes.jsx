import Footer from "./Footer";

export default function DisplayNotes({
  title,
  note,
  id,
  notesList,
  setNotesList,
  trashList,
  setTrashList,
  archiveList,
  setArchiveList,
}) {
  console.log(title);
  return (
    <div className=" flex flex-col h-min border w-[240px]  mt-4">
      <div className="w-[238px]  h-auto">
        <p className="px-2 pt-3">{title}</p>
      </div>
      <div className="  w-[238px]  h-auto">
        <p className="px-2 pt-3">{note}</p>
      </div>
      <Footer
        id={id}
        notesList={notesList}
        setNotesList={setNotesList}
        trashList={trashList}
        setTrashList={setTrashList}
        archiveList={archiveList}
        setArchiveList={setArchiveList}
      />
    </div>
  );
}
