import CountryInfo from "./CountryInfo";

const Countrylist = ({data}) => {
    
    let firstList = data.slice();
    firstList.sort((a,b)=>b.area-a.area);
    let slicedList = firstList.filter((a) => a.name.common != "Antarctica").slice(0,15);

    return (
       <>
        <div>
        {slicedList.map((country, ind) => (
            <CountryInfo key ={country.cca3} data ={country} detailed = {ind < 5}/>
            )
            )}
        </div>
       </> 
    )
}

   export default Countrylist