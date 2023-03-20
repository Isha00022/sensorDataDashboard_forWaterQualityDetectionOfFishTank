import React from "react";
import Dashboard from "./component/Basics/dashboard";
import Progresser from "./component/Basics/Progresser";
import Dashboard2 from "./component/Basics/Dashboard2";
import OutputPage from "./component/Basics/OutputPage";
import { Routes, Route } from 'react-router-dom';
//npm start
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard2/>} />
      <Route path='/OutputPage' element={<OutputPage/>} />
    </Routes>
  );
}

export default App;
