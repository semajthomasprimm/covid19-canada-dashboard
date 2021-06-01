import React from "react"
import {fetcher} from '../../fetcher';
import useSWR from 'swr';

const DashboardHeader = () => {
    // Fetches data
    const { data, error } = useSWR("https://api.opencovid.ca/version", fetcher);

    // Checks if data is valid
    const dataValid = !error && data !== undefined;

    return (
        <div className="my-4">
            <h1>COVID-19 overview in Canada</h1>
            <p className="fs-5 text-gray-700">Last updated on {dataValid ? data.version : "N/A"}</p>
        </div>
    )
}

export default DashboardHeader
