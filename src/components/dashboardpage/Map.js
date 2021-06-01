import React from "react"
// eslint-disable-next-line
import coordinates from "./coordinates"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import geoUrl from "../../assets/canada_map.json"
// eslint-disable-next-line
import useSWR from "swr"

const Map = (props) => {

  // TODO: Implementing MAP

  /* let regions = coordinates;

  regions.map((region) => {
    const {data, error} = useSWR(`https://api.opencovid.ca/summary?loc=${region.name}&after=${props.prevSevenDaysDate}`);
    const dataValid = !error && data !== undefined && data.summary.length > 1;
    if(dataValid){
      let casesCount = 0;
      data.summary.forEach(elm => casesCount += elm.cases);
      region["cases"] = casesCount;
    }
    console.log(region);
  }); */

  return (
    <div className="col-xl-8 col-lg-7">
      <h3 className="mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#6610f2"
          className="bi bi-map-fill mr-2"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"
          />
        </svg>
        Map of reported cases of provinces/territories within 7 days
      </h3>
      <div className="border rounded bg-white">
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            scale: 800,
            rotate: [60, -30, 30],
            center: [-32, 23],
          }}
        >
          <Geographies geography={geoUrl} fill="#9998A3" stroke="#ccc">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
      <h6><i><b>[In Development]</b></i></h6>
    </div>
  )
}

export default Map
