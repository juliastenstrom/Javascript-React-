import React, {useState} from 'react';
import './App.css'
import NotApp from './NotApp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountryDetails from './CountryDetails';



function App({}) {



  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element = {<NotApp/>}/>
          <Route index element={<NotApp/>}/>
          <Route path="country/:cca3" element={<CountryDetails/>}/>
        </Route>
    </Routes>
  </BrowserRouter>


    </>
  )


}


export default App