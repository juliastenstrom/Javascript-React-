import { Link } from 'react-router-dom';


import { } from 'react-router-dom';


const CountryInfo = ({ data, detailed }) => {

    const highest = 17098242;
    let barlength = data.area / highest;
    const totalbar = 700;
    let bar = totalbar * barlength;


    const barstyle = {
        width: bar + 'px',
        height: '7px',
        backgroundColor: '#FF3399',
    };

    return (

        <><div className="country-info">
            <Link to={"/country/" + data.cca3}><p className="Country-name">{data.name.common}</p></Link>
            <p>Area: {data.area}km<sup>2</sup> </p>
            {detailed && <p>{data.capital}</p>}
        </div>



            <div style={barstyle}></div></>

    );
};

export default CountryInfo