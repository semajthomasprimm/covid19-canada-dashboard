import React from "react"
import useSWR from "swr"
import Spinner from '../Spinner';
import { fetcher } from "../../fetcher"
import Arrow from "./cardhelpers/Arrow"

const Card = (props) => {
  const { data, error } = useSWR("https://api.opencovid.ca/", fetcher)
  const dataValid = !error && data !== undefined

  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card shadow h-100 p-2 rounded-3 text-center">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col-auto">
              <i className="fas fa-calendar fa-2x text-gray-300"></i>
            </div>
            <div className="col mr-2 px-4">
              <div className="text-md text-uppercase mb-1">{props.title}</div>
              <div className="d-inline-flex py-4 h5 mb-0 fs-2">
                {dataValid ? (parseInt(data.summary[0][props.statsType]).toLocaleString("en-US")) : <Spinner />}
              </div>
              <div><Arrow title={props.title} count={dataValid ? data.summary[0][props.dailyStatsType] : <Spinner />} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
