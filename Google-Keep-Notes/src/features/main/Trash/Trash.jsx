import DisplayNotes from "../Note/DisplayNotes";

export default function Trash({ trashList }) {
  return (
    <div className=" ml-72">
      {trashList.map((note) => (
        <DisplayNotes title={note.title} note={note.note} key={note.id} />
      ))}
    </div>
  );
}
