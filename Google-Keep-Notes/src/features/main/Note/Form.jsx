import { useRef, useState, useEffect } from "react";
import { useNotes } from "../../../contexts/NotesContext";

export default function Form({ title, setTitle, note, setNote }) {
  const { notesList, setNotesList } = useNotes();
  const [showTitleField, setShowTitleField] = useState(false);

  const [textAreaStyle, setTextAreaStyle] = useState({
    width: "100%",
    height: "100%",
  });

  const formRef = useRef();

  function handleTitle(e) {
    const value = e.target.value;
    setTitle(value);
  }
  function handleTask(e) {
    const value = e.target.value;
    setNote(value);
    // Resize the textarea based on its scroll height
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  function handleAddNotes() {
    if (title !== "" || note !== "") {
      const newNote = { title, note };

      setNotesList([...notesList, newNote]);

      setTitle("");
      setNote("");
      setShowTitleField(false);
    }
  }

  function handleTextAreaClick() {
    setShowTitleField(true);
    setTextAreaStyle({
      width: "100%",
      height: "auto",
    });
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        // Click outside the form, submit the task
        handleAddNotes();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleAddNotes]);
  return (
    <div className={`  px-auto mx-auto h-17 `}>
      <form className="flex flex-col " ref={formRef}>
        {showTitleField && (
          <input
            placeholder="Title"
            className=" border-none focus:outline-none  w-full h-[44px] py-[10px] px-[15px]  mb-1"
            value={title}
            onChange={handleTitle}
          />
        )}
        <textarea
          placeholder="Take a note..."
          className={`border-none focus:outline-none overscroll-none w-full   h-auto ${
            showTitleField
              ? " mb-1 py-[20px] px-[15px] h-auto"
              : "  w-full h-11 py-[10px] px-[15px]"
          } resize-none`}
          value={note}
          onClick={handleTextAreaClick}
          onChange={handleTask}
        />
      </form>
    </div>
  );
}
