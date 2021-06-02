import React from 'react'
import {ReactComponent as ReactJSLogo} from '../assets/react.svg';
import {ReactComponent as BootstrapLogo} from '../assets/bootstrap.svg';

const About = () => {
    return (
        <div className="my-4 text-center app-body">
            <h1>About this project</h1>
            <div className="my-5">
                <p className="fs-3 font-weight-bold">DEVELOPER + TECH STACK</p>
                <p>Developed by <a href="https://semajprimm.com" target="_blank" rel="noopener noreferrer">Semaj Primm</a><span role="img" aria-label="Waving hand"> 👋</span> with <ReactJSLogo width={30} height={30} className="mr-6"/> <b>+</b> <BootstrapLogo width={30} height={30} className="mr-6"/>.</p>
                <p>Data is sourced from API of <a href="https://opencovid.ca/" target="_blank" rel="noopener noreferrer">COVID-19 Canada Open Data Working Group</a>.</p>
                <p>How I Built This <b>[COMING SOON]</b></p>
                <p><a href="https://github.com/semajthomasprimm/covid19-canada-dashboard" target="_blank" rel="noopener noreferrer">View the Source Code</a></p>
            </div>
            <div className="my-5">
                <p className="fs-3 font-weight-bold">PROJECT DESCRIPTION</p>
                <p>This is a COVID-19 data reporting dashboard for Canada, including provinces and territories. <br />The data is sourced from <a href="https://opencovid.ca/" target="_blank" rel="noopener noreferrer">COVID-19 Canada Open Data Working Group</a>.</p>
            </div>
            <div className="my-5">
                <p className="fs-3 font-weight-bold">FUTURE ROADMAP<span role="img" aria-label="Robot"> 🤖</span></p>

                <div className="text-left d-flex justify-content-center">
                    <ul>
                        <input type="checkbox" disabled={true}/> The Canadian map displays the last 7 days worth of cases for each province and territory<br/>
                        <input type="checkbox" disabled={true}/> Add select buttons to display either cases, deaths, vaccinations, or tests on Statistics page Chart<br/>
                        <input type="checkbox" disabled={true}/> Add Pie chart showing cases distribution amongst provinces and territories<br/>
                        <input type="checkbox" disabled={true}/> Refactor CSS to a concise custom theme<br/>
                        <input type="checkbox" disabled={true}/> Fix x-axis ticks in cases chart on Statistics page<br/>
                        <input type="checkbox" disabled={true}/> Make sidebar responsive<br/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
