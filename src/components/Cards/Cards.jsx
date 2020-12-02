import { configure } from '@testing-library/react';
import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.css';


const Cards = (props) => {
    
    return(

        <div className="card-div">
            <div className="infected">
            <h2> Infected </h2>
            <h1>{props.confirmedCases}</h1>
            <p> {new Date (props.lastUpdate).toDateString()} </p>
            <p>Number of active cases of COVID-19</p>
            </div>

            <div className="recovered">
            <h2>Recovered</h2>
            <h1>{props.recoveredCases}</h1>
            <p> {new Date (props.lastUpdate).toDateString()}</p>
            <p>Number of recoveries from COVID-19</p>
            </div>

            <div className="deaths">
            <h2> Deaths </h2>
            <h1>{props.deathCases}</h1>
            <p> {new Date (props.lastUpdate).toDateString()} </p>
            <p>Number of deaths caused by COVID-19</p>
            </div>
            
        </div>
        
        
    )
}

export default Cards;