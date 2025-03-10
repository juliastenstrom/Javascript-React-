

import React, { useState } from 'react';
import './App.css'
import data from 'world-countries';
import CountryInfo from './CountryInfo';
import Countrylist from './Countrylist';

function Search({ searchString, setSearchString }) {


  const handleinput = (event) => {
    setSearchString(event.target.value);
  }



  return (
    <>
      <input
        type="text"
        value={searchString}
        onChange={handleinput}
        placeholder="Type country...."
      />
    </>
  )


}

export default Search