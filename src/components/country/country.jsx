import React from 'react';
import './country.css' 
const Country = ({ country }) => {
    const {name, region, population,flags} = country
    return (
        <div className='country-container'>
            <h3>Name: {name.common}</h3>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <img src={flags.svg} alt="" />
        </div>
    );
};

export default Country;