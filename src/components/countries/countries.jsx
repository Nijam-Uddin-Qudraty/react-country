
import React, { useEffect, useState } from 'react';
import Country from '../country/country';
import './countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all').then(res=> res.json()).then(data=>setCountries(data))
    }, [])
    
    const handleVisitedCountry = country => {
        // console.log(visitedCountry);
        setVisitedCountry([...visitedCountry,country]);
        // console.log(country);
    }
    return (
        <div>
            <h3>Countries : {countries.length} </h3>
            <h4>Visited country: {visitedCountry.length}</h4>
            <div>
                {
                    visitedCountry.map(country => <li>{ country.name.common}</li>)
                }
            </div>
            <div className='container'>
                {
                    countries.map(country => <Country country={country} key={country.cca3} handleVisitedCountry={handleVisitedCountry} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;