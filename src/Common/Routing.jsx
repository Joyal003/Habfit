import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Postpartum from '../components/Postpartum';
import HomeLand from '../components/HomeLand';
import CustomProgram from '../components/CustomProgram';
import Natural from '../components/Natural';
import Budget from '../components/Budget';
import GroupClass from '../components/GroupClass';

const Routing = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomeLand />} />
      <Route path="/post" element={<Postpartum />} />
      <Route path="/custom" element={<CustomProgram />} />
      <Route path="/natural" element={<Natural />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/group" element={<GroupClass />} />
    </Routes>
  </Router>
  )
}

export default Routing