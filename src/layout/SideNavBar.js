import React from "react"
import { Link } from "react-router-dom"
import "./SideNavBar.css";

// Icons for Sidebar link
const HomeIcon = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-house-door-fill" viewBox="0 0 16 16">
      <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
    </svg>
  )
}

const ChartIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-graph-up" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"/>
    </svg>
  )
}

const AboutIcon = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
  )
}

// Sidebar nav data
const SideBarData = [
  {
    title: "Dashboard",
    link: "/",
    icon: <HomeIcon />
  },
  {
    title: "Statistics",
    link: "/statistics",
    icon: <ChartIcon />
  },
  {
    title: "About",
    link: "/about",
    icon: <AboutIcon />
  },
]

const SideNavBar = (props) => {
  return (
    <>
      <nav className={`my-navbar ${props.isOpen ? "openNav" : ""}`}>
        <ul>
          <Link to="/">
            <span className={"d-flex align-items-center justify-content-center my-nav-logo"}>
              <span role="img" aria-label="Maple Leaf">🍁</span> COVID-19 Canada Tracker
            </span>
          </Link>
          <hr className="sidebar-divider my-0" />
          {SideBarData.map((item, index) => { 
              return (
                <li className="my-nav-link" key={index} onClick={e => props.onClickCallback(e)}>
                  <Link to={item.link}>
                    {item.icon}
                    <span className="my-nav-text ml-2">{item.title}</span>
                  </Link>
                </li>
              )
            })}
        </ul>
      </nav>
    </>
  )
}

export default SideNavBar