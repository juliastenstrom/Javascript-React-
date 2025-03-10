import React, {useState} from 'react';
import './App.css'
import { useParams } from 'react-router-dom';
import data from 'world-countries';
import CountryInfo from './CountryInfo';


function getCountryByCca3(cca3){

    const found = data.find(item => item.cca3 === cca3);
    return (found)
}


function CountryDetails() {

let {cca3} = useParams(); //data från URL

const mainCountry = getCountryByCca3(cca3);

const borders = mainCountry.borders;
const borderCountries = borders.map(element => getCountryByCca3(element))

//<CountryInfo data = {borderCountries.map()} detailed> </CountryInfo>
  return (
    <>
    <h2>Country</h2>
    <CountryInfo key ={mainCountry.cca3} data ={mainCountry} detailed = {true}/>
    <br></br>
    <h2>Border Countries</h2>
    {borderCountries.map((element) => <CountryInfo key ={element.cca3} data ={element} detailed={true}></CountryInfo>)}
<a href="http://localhost:5173/">Back</a>
    </>
  )
}

export default CountryDetails