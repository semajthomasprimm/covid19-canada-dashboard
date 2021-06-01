import React from "react"

const Arrow = (props) => {
  let arrowColour = ""
  let arrowType = ""


  // Returns green/red, up/down arrow based on data type
  if (props.title === "Vaccinated") {
    if (props.count > 0) {
        arrowColour = "#27ad60"
        arrowType = "UP"
    } else{
        arrowColour = "#E14938"
        arrowType = "DOWN"
    }
  } else {
    if (props.count > 0){
        arrowColour = "#E14938"
        arrowType = "UP"
    } 
    else{
        arrowColour = "#27ad60"
        arrowType = "DOWN"
    } 
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      { arrowType === "UP" ? <IncreasingArrow colour={arrowColour} /> : <DecreasingArrow colour={arrowColour}/>}
      <p className="mt-3 ml-1" style={{ color: arrowColour, fontWeight: "bold" }}>
        {parseInt(props.count).toLocaleString("en-US")}
      </p>
    </div>
  )
}

export default Arrow

const IncreasingArrow = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill={props.colour}
      className="bi bi-arrow-up-circle-fill"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
    </svg>
  )
}

const DecreasingArrow = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill={props.colour}
      className="bi bi-arrow-down-circle-fill"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
    </svg>
  )
}
