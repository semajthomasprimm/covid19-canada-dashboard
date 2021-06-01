import Card from "../components/dashboardpage/Card"
import Map from "../components/dashboardpage/Map"
import DailyStatisticsTable from "../components/dashboardpage/DailyStatisticsTable"
import useSWR from 'swr'
import {fetcher} from '../fetcher'

const Dashboard = () => {

  // Fetches data
  const { data, error } = useSWR("https://api.opencovid.ca/version", fetcher);

  // Checks if data is valid
  const dataValid = !error && data !== undefined;

  // Stores date of 7 days ago; empty for now
  var prevWeekDateObj = new Date();
  var prevWeekDate = "";

  // Sets 7 week date to 1 week from the most recent API update
  if(dataValid){
    prevWeekDateObj = new Date(data.version.split(" ")[0].replaceAll("-", "/"));
    prevWeekDateObj.setDate(prevWeekDateObj.getDate() - 7);
    prevWeekDate = prevWeekDateObj.toLocaleDateString().replaceAll("/", "-");
  }
      
  return (
    <div className="app-body">
      <div className="my-4">
          <h1>COVID-19 overview in Canada</h1>
          <p className="fs-5 text-gray-700">Last updated on {dataValid ? data.version : "N/A"}</p>
      </div>
      <div className="row">
        <Card title="Confirmed Cases" statsType="cumulative_cases" dailyStatsType="cases"/>
        <Card title="Tests" statsType="cumulative_testing" dailyStatsType="testing" />
        <Card title="Deaths" statsType="cumulative_deaths" dailyStatsType="deaths" />
        <Card title="Vaccinated" statsType="cumulative_avaccine" dailyStatsType="avaccine" />
      </div>
      <div className="row mb-5">
        <Map prevSevenDaysDate={prevWeekDate}/>
        <DailyStatisticsTable />
      </div>
      <div className="row">
        <p>Data is sourced from API of <a href="https://opencovid.ca/" target="_blank" rel="noopener noreferrer">COVID-19 Canada Open Data Working Group</a></p>
      </div>
    </div>
  );
}

export default Dashboard