import { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./App.css"
import Dashboard from "./pages/Dashboard"
import NotFound404 from "./pages/NotFound404"
import SideNavBar from "./layout/SideNavBar"
import Statistics from "./pages/Statistics"
import About from './pages/About'
import useMediaQuery from "./useMediaQuery"

function App() {

  const [isOpen, setIsOpen] = useState(false);

  let isMobile = useMediaQuery('(max-width: 800px)');

  const toggleOpen = () => setIsOpen(prev => !prev);

  const handleClosingNav = (e) =>{
    e.preventDefault();
    setIsOpen(false);
  }

  return (
    <BrowserRouter>
      <div id="wrapper">
        <SideNavBar isOpen={isOpen} onClickCallback={handleClosingNav}/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="hamburger-menu">
            {isMobile && (
              <button onClick={toggleOpen} style={{ position: "absolute", border: 0, backgroundColor: "transparent"}}>
                <svg viewBox="0 0 100 80" width="30" height="40">
                  <rect width="100" height="10"></rect>
                  <rect y="20" width="100" height="10"></rect>
                  <rect y="40" width="100" height="10"></rect>
                </svg>
              </button>
            )}
          </div>
          <div id="content">
            <div className="container-fluid">
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/statistics" component={Statistics} />
                <Route path="/about" component={About} />
                <Route component={NotFound404} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
