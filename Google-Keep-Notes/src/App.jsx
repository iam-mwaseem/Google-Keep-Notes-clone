import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotesProvider } from "./contexts/NotesContext";
import AppLayout from "./ui/AppLayout";
import NoteContainer from "./features/main/Note/NoteContainer";
import Archive from "./features/main/Archive/Archive";
import Trash from "./features/main/Trash/Trash";
import { AppLayoutProvider } from "./contexts/AppLayoutContext";

export default function App() {
  return (
    <NotesProvider>
      <AppLayoutProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="note" element={<NoteContainer />} />

              <Route path="/archive" element={<Archive />} />
              <Route path="/trash" element={<Trash />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppLayoutProvider>
    </NotesProvider>
  );
}
