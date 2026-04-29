// import React from 'react';
import { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {

    const [visited, setVisited] = useState(false)

    // console.log(handleVisitedCountries);
    console.log(handleVisitedFlag);
    // console.log(country.area.area);

    const handleVisited = () => {

        // primary system

        if (visited) {
            setVisited(false);
            alert("Try To Visit This Country");

        }
        else {
            setVisited(true);
            alert("Let's Explore New Country");
        }

        // second system

        // setVisited(visited ? false : true);

        // third system

        // setVisited (!visited);

        handleVisitedCountries(country);

    }
    return (
        <div className={`country ${visited && `country-visited`}`}>
            <img className="image-style" src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h4>Name: {country.name.common}</h4>
            <p>Population: {country.population.population}</p>
            <p>Capital City: {country.capital.capital}</p>
            <p>Region name: {country.region.region} </p>
            <p>Area: {country.area.area} <br />
                <span className='red-text'>
                    {country.area.area > 300000 ? "Big Country" : "Small Country"}
                </span>
            </p>
            <button onClick={handleVisited} className='premium-btn button-setting'>
                {visited ? "VISITED" : "NOT VISITED"}
            </button>
            <button onClick={() => { handleVisitedFlag(country.flags.flags.png) }} className='premium-btn'>ADD VISITED FLAG</button>

        </div>
    );
};

export default Country;