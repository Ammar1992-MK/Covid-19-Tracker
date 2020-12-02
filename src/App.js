import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Cards ,Chart, CountryPicker} from './components';
import styles from './App.css';
import CountUp from 'react-countup';

const App = () => {


 const[covidData, setData] = useState({});
 const [search, setSearch] = useState("");
 const [query, setQuery] = useState("");
 const url = "https://covid19.mathdro.id/api";

 //useEffect runs on the start
 useEffect(() => {
  fetchData();
  fetchDailyData();
 },[query])

 //fetching data from the API
  const fetchData =  async (country) => {

    //if there is no caountry parameter passed, global data will load
    let changableUrl = url;

    if(country){

      changableUrl = `${url}/countries/${country}`
    }

    try {
        const response  = await axios.get(changableUrl);
        
        const data = response.data;
        const modifiedData = {

          confirmedCases : data.confirmed.value,
          recoveredCases : data.recovered.value,
          deathCases : data.deaths.value,
          lastUpdate : data.lastUpdate
        }

        setData(modifiedData);
        setSearch("");
    } catch (error) {
        
    }

};

 const fetchDailyData = async ()=> {

  try {
    const {data} = await axios.get(`${url}/daily`)
    console.log(data);
  } catch (error) {
    
  }
}

//getting the input value
const updateSearch = e =>{
  setSearch(e.target.value);
}

//passing the input value
const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  fetchData(search)
}
    return(

      <div>
        <form className="submit-form" onSubmit={getSearch}>
          <input 
          type="text"
           className="search-bar" 
          placeholder="Enter a Country name"
          value={search}
          onChange={updateSearch}
          >
          </input>
          <button  type="submit"
           className="search-button"
           >
             GET DATA
             </button>
        </form>

        <Cards 
        confirmedCases={covidData.confirmedCases}
        lastUpdate={covidData.lastUpdate}
        recoveredCases={covidData.recoveredCases}
        lastUpdate={covidData.lastUpdate}
        deathCases={covidData.deathCases}
        lastUpdate={covidData.lastUpdate}
        />
      </div>
      

    )
  }


export default App;