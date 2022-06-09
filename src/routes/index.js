import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing';
const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />}></Route>
    </Routes>
  )
}

export default Router;