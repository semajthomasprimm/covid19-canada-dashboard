import { useState } from 'react'
import Select from 'react-select'
import useSWR from 'swr'
import StatisticsChart from '../components/statspage/StatisticsChart'
import { fetcher } from '../fetcher'
import locationsOptions from '../components/statspage/locationsOptions'

const Statistics = () => {

    // Fetches data
    const { data, error } = useSWR("https://api.opencovid.ca/version", fetcher);

    // Checks if data is valid
    const dataValid = !error && data !== undefined;

    // By default sets selected dropdown option to Canada
    const [locationValue, setLocationValue] = useState(locationsOptions[0]);
    
    // Sets locationValue to selected dropdown
    const handleChange = (selectedOption) => setLocationValue(selectedOption);

    return (
        <div className="my-4 app-body row">
            <h1>Statistics</h1>
            {/*Change breakpoint to md, when sidebar is responsive */}
            <div className="col-lg-4 col-12">
                <p className="fs-5 text-gray-700">Last updated on {dataValid ? data.version : "N/A"}</p>
                <p>Select location:</p>
                <Select defaultValue={locationValue} options={locationsOptions} onChange={handleChange}/>
            </div>
            {/*Change breakpoint to md, when sidebar is responsive */}
            <div className="col-lg-8 col-12">
                <h2>Daily Cases Count for {locationValue.label}</h2>
                <StatisticsChart location={locationValue}/>
                <div className="row my-5">
                    <p>Data is sourced from API of <a href="https://opencovid.ca/" target="_blank" rel="noopener noreferrer">COVID-19 Canada Open Data Working Group</a></p>
                </div>
            </div>
        </div>
    )
}

export default Statistics
