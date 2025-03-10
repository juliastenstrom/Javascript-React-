import React, {useState} from 'react';
import './App.css'
import countries from 'world-countries';
import Search from './Search';
import Countrylist from './Countrylist';

function NotApp({}) {

  const [searchString, setSearchString] = useState("");


  const matchSearch = (country) => {
  const LowerCaseCountries = country.name.common.toLowerCase();
  const LowerCaseSearchString = searchString.toLowerCase();

  return LowerCaseCountries.indexOf(LowerCaseSearchString) === 0;
}
const result = countries.filter((country) => matchSearch(country));
const filteredList = result; // data.filter(matchSearch);



  return (
    <>

    <Search searchString={searchString} setSearchString={setSearchString}/>
 
    <Countrylist data ={filteredList}/>
    </>
  )


}

export default NotApp