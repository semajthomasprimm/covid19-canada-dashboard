import "../css/TableStyling.css"
import useSWR from "swr"
import { fetcher } from "../../fetcher"

let go = []

const DailyStatisticsTable = () => {
  const { data, error } = useSWR("https://api.opencovid.ca/summary", fetcher)
  const dataValid = !error && data !== undefined;

  // Clear array
  go = [];

  // Populates array with array data
  if(dataValid) {
    data.summary.forEach(elm => {
      if (elm.province !== "Repatriated")
        go.push({province: elm.province, cases: elm.cases, deaths: elm.deaths, recovered: elm.recovered})}
    )
    // Sort array of stats table by cases, descending
    go.sort((a, b) => a.cases - b.cases).reverse();
  } else {
    // displays if data isn't loaded properly
    go.push({province: "--", cases: "--", deaths: "--", recovered: "--"});
  }

  return (
    <div className="col-xl-4 col-lg-5">
      <h3 className="mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#0b5ed7"
          className="bi bi-bar-chart-fill mr-2"
          viewBox="0 0 16 16"
        >
          <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
        </svg>
        Daily Statistics
      </h3>
      <table>
        <thead className="table-header">
          <tr>
            <th scope="col" className="w-100">
              Region
            </th>
            <th scope="col">Cases</th>
            <th scope="col">Deaths</th>
            <th scope="col">Recovered</th>
          </tr>
        </thead>
        <tbody>
          {go.map((item) => {
            return (
              <tr className="border bg-white" key={item.province}>
                <td className="region fw-bold">{item.province}</td>
                <td>{item.cases}</td>
                <td className="text-danger">{item.deaths}</td>
                <td className="text-success">{item.recovered}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DailyStatisticsTable
