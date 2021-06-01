import React from 'react'
import { fetcher } from '../../fetcher';
import useSWR from 'swr';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Spinner from '../Spinner';

const StatisticsChart = (selectLocation) => {
    
    // Stores value of select dropdown
    const loc = selectLocation.location.value;
    let chartData = []

    // Fetches most recent date
    const { data: date, error } = useSWR("https://api.opencovid.ca/version", fetcher);
    const dateValid = !error && date !== undefined;
    
    // Fetches covid data from beginning of 2020 to most recent date of selected location
    const {data: canadaData, canDataError} = useSWR(dateValid ? () => `https://api.opencovid.ca/summary?loc=${loc}&before=${date.version.split(" ")[0]}`: undefined)
    const canadaDataValid = !canDataError && canadaData !== undefined && canadaData.summary.length > 1;

    // Clears array
    chartData = [];

    // Populates local array with objects containing date and case
    canadaDataValid && canadaData.summary.forEach(elm => chartData.push({date: elm.date, cases: elm.cases}));

    return (
        <div>
            {canadaDataValid 
            ? 
            <div style={{ width: '100%', height: 350}}>
                <ResponsiveContainer>
                    <AreaChart data={chartData} >
                        <Area type="monotone" dataKey="cases" stroke="#0470DC" fill="#0470DC"/>
                        <CartesianGrid stroke="#ccc" strokeDasharray="4"/>
                        <XAxis dataKey="date" tickCount="6" />
                        <YAxis />
                        <Tooltip />
                    </AreaChart> 
                </ResponsiveContainer>
            </div>
            : <Spinner />}
        </div>
    )
}

export default StatisticsChart
