import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Create from './Create';
import Navbar from './Navbar';
import AllTasks from './AllTasks';
import Update from './Update';
function App() {
  return (
<div className='main'>
   <Navbar/>
      <Routes>
        <Route path="/Create" element={<Create />} />
        <Route path="/" element={<AllTasks />} />
        <Route path="/Update" element={<Update />} />
      
        
       
      
      </Routes>
</div>
  );
}

export default App;
