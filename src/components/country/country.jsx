import React, { useState } from 'react';
import './country.css' 
const Country = ({ country,handleVisitedCountry }) => {
    const { name, region, population, flags } = country
    const [visited, setVisited] = useState(false);
    const handleVisit = () => {
        setVisited(!visited);
    }
    
    return (
        <div className='country-container'>
            <h3>Name: {name.common}</h3>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <img src={flags.svg} alt="" />
            <button onClick={handleVisit}>{visited ? 'visited' : 'going'}</button>
            <p>{visited ? 'I have visited this country' : 'I am going to visit this country'}</p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark visited</button>
        </div>
    );
};

export default Country;