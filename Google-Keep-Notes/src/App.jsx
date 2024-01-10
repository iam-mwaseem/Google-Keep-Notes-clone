import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";

import Reminders from "./features/main/Reminders/Reminders";
import Label from "./features/main/Label/Label";
import Archive from "./features/main/Archive/Archive";
import Trash from "./features/main/Trash/Trash";
import NoteContainer from "./features/main/Note/NoteContainer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="note" element={<NoteContainer />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/label" element={<Label />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/trash" element={<Trash />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
