import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

const fetchDailyData = async ()=> {

    try {
      const {data} = await axios.get(`${url}/daily`)
      console.log(data);
    } catch (error) {
      
    }
  }