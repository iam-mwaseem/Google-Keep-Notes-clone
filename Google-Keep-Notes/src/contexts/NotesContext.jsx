import { createContext, useContext, useState, useEffect } from "react";

const NotesContext = createContext();

function NotesProvider({ children }) {
  // Initialize notes from localStorage or set default values
  const initialNotes = JSON.parse(localStorage.getItem("notes")) || [];
  const [trashList, setTrashList] = useState([]);
  const [archiveList, setArchiveList] = useState([]);
  const [notesList, setNotesList] = useState(initialNotes);
  const [filteredNotesList, setFilteredNotesList] = useState([]);

  useEffect(() => {
    // Save notes to localStorage whenever notesList is updated
    localStorage.setItem("notes", JSON.stringify(notesList));
  }, [notesList]);

  return (
    <NotesContext.Provider
      value={{
        trashList,
        archiveList,
        notesList,
        filteredNotesList,
        setArchiveList,
        setNotesList,
        setFilteredNotesList,
        setTrashList,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

function useNotes() {
  const context = useContext(NotesContext);
  return context;
}

export { NotesProvider, useNotes };
