// import React from 'react';
import './Country.css';

const Country = ({ country }) => {
    console.log(country.area.area);

    const handleVisited = () => {
        alert ("Let's Explore New Country");
        console.log("button clicked")

    }
    return (
        <div className='country'>
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
            <button onClick={handleVisited} className='premium-btn'>NOT VISITED</button>

        </div>
    );
};

export default Country;