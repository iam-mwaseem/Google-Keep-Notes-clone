import { useState } from "react";
import Form from "./Form";
import DisplayNotes from "./DisplayNotes";
import { useNotes } from "../../../contexts/NotesContext";

export default function NoteContainer() {
  const { filteredNotesList } = useNotes();
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  return (
    <div className={`  px-auto  w-[100%] `}>
      <div className=" w-[600px] h-auto  mx-auto  border rounded-md shadow-sm  ">
        <Form title={title} setTitle={setTitle} note={note} setNote={setNote} />
      </div>
      <div className="flex flex-row   px-auto flex-wrap gap-3 ml-72">
        {Array.isArray(filteredNotesList) &&
          filteredNotesList?.map((note, i) => (
            <DisplayNotes
              id={i}
              key={note.title}
              title={note.title}
              note={note.note}
            />
          ))}
      </div>
    </div>
  );
}
