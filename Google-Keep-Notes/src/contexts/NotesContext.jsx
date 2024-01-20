import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

function NotesProvider({ children }) {
  const [trashList, setTrashList] = useState([]);
  const [archiveList, setArchiveList] = useState([]);
  const [notesList, setNotesList] = useState([]);
  const [filteredNotesList, setFilteredNotesList] = useState([]);

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
