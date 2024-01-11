import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

import Archive from "./features/main/Archive/Archive";
import Trash from "./features/main/Trash/Trash";
import NoteContainer from "./features/main/Note/NoteContainer";

export default function App() {
  const [trashList, setTrashList] = useState([]);
  const [archiveList, setArchiveList] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route
            path="note"
            element={
              <NoteContainer
                trashList={trashList}
                setTrashList={setTrashList}
                archiveList={archiveList}
                setArchiveList={setArchiveList}
              />
            }
          />

          <Route
            path="/archive"
            element={
              <Archive
                archiveList={archiveList}
                setArchiveList={setArchiveList}
              />
            }
          />
          <Route path="/trash" element={<Trash trashList={trashList} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
