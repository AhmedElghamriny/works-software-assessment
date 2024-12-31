import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NewNote from './pages/NewNote';
import HomePage from './pages/HomePage';
import EditNote from "./pages/EditNote";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/new" element={<NewNote />} />
      <Route path="/edit" element={<EditNote />} />
      <Route path="*" element={<Navigate to="/"/>} />
      <Route path="/:id">
        <Route index element={<h1>Show</h1>}/>
        <Route path="edit" element={<h1>Edit</h1>}/>
      </Route>
    </Routes>
  );
}

export default App;
