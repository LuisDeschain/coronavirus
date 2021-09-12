import React, { useState, useEffect } from 'react';
import { Chart } from './Chart';

export const CoronavirusApp = () => {

    const [data, setData] = useState([]); 

    useEffect( () => {
         getData()      
    }, [])

    const getData = async () => {
        const url = 'https://api.coronavirus.data.gov.uk/v1/data?'
        const filter = 'filters=areaType=nation;areaName=england&'
        const structure = 'structure={"date":"date","newCases":"newCasesByPublishDate"}'
        const response = await fetch(url + filter + structure)

        const { data }  = await response.json()

        setData(data.reverse())
    }

    return (
        
        <>
            <h2>CoronavirusApp</h2>
            <h3>Covid New Cases at England per day</h3>
            <hr />
            {
                Chart(data)
            }
        </>
    )
}