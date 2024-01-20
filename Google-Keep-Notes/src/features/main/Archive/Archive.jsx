import { useNotes } from "../../../contexts/NotesContext";
import DisplayNotes from "../Note/DisplayNotes";

export default function Archive() {
  const { archiveList } = useNotes();
  return (
    <div className=" ml-72">
      {archiveList.map((note) => (
        <DisplayNotes title={note.title} note={note.note} key={note.id} />
      ))}
    </div>
  );
}
