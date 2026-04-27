// import React from 'react';
import './Countries.css';
import { use } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;


    return (
        <div>
            <h2 className="another-style">Total Countries: {countries.length}</h2>

            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;