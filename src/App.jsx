import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home';
import Test from './views/Test';
import Error from './views/Error';
import './App.css'

function App() {

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
