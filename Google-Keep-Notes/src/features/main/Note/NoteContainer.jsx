import { useState } from "react";
import Form from "./Form";
import DisplayNotes from "./DisplayNotes";

export default function NoteContainer() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notesList, setNotesList] = useState([]);
  return (
    <div className={`  px-auto  w-[100%] `}>
      <div className=" w-[600px] h-auto  mx-auto  border rounded-md shadow-sm  ">
        <Form
          title={title}
          setTitle={setTitle}
          note={note}
          setNote={setNote}
          notesList={notesList}
          setNotesList={setNotesList}
        />
      </div>
      <div className="flex flex-row   px-auto flex-wrap gap-3 ml-72">
        {notesList.map((note) => (
          <DisplayNotes key={note.title} title={note.title} note={note.note} />
        ))}
      </div>
    </div>
  );
}
