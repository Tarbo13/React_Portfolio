import React from "react";
import "./styleB.css";
import logo from "./GitHubLogo.png";
import hikeGif from "./HikeLocalGif.gif";
import resumeImg from "./ResumeLogo.png";
import elfGif from "./ElfGif.gif";
import burgerGif from "./BurgerGif.gif";
import weatherGif from "./WeatherGif.gif";
import employeeGif from "./EmployeeGif.gif";
import budgetGif from "./BudgetTrackerGif.gif";

function Project() {
    return (

        <main className="mainBody container">
        <div className="row insideBackground">
          <div className="col-md-10 ml-5 mb-5 mt-5 bg-light cardShadow">

            <div className="row insideBackground">
                <div className="cardShadow cardBackground col-md-4 ml-3 mt-3">
                    <h1>Hike Local</h1>
                    <a href="https://snelson-seattle.github.io/HikeLocal/">
                    <img class="img-fluid" src={hikeGif} alt="project1" height="350" width="350"></img>
                    </a>
                    <small><a href="https://github.com/snelson-seattle/HikeLocal/tree/develop">GitHub repo</a></small>
                    <p class="hikeP">Hike Local is a website that locates hiking trails based on a user's location and desired difficulty.  I worked with a team to create this site and mostly focused on the front end development.  This app uses API calls from three different sources to display the trail information the user desires.</p>
                </div>

                <div className="cardShadow cardBackground col-md-4 ml-3 mt-3">
                    <h1>Your Digital Elf</h1>
                    <a href="https://fast-anchorage-28495.herokuapp.com/">
                    <img class="img-fluid" src={elfGif} alt="project1" height="350" width="350"></img>
                    </a>
                    <small><a href="https://github.com/yourDigitalElf/yourDigitalElf">GitHub repo</a></small>
                    <p class="hikeP">This is a full stack web application that uses MVC. This site requires a user to create an account and log on before use.  Once logged on user data is stored to a mysql database to be used later.  This seasonal themed app creates and saves Christmas lists.</p>
                </div>
                
                </div>
                <div className="row">
                <div className="cardShadow cardBackground col-md-4 ml-3 mt-3">
                    <h1>Burger Joint</h1>
                    <a href=" https://thawing-dusk-33345.herokuapp.com/">
                        <img class="img-fluid" src={burgerGif} alt="project1" height="350" width="350"></img>
                    </a>
                    <small><a href="https://github.com/Tarbo13/burger">GitHub repo</a></small>
                    <p class="hikeP"> This is a simple full stack web application that stores and deletes data using a mysql database. </p>
                </div>
                <div className="cardShadow cardBackground col-md-4 ml-3 mt-3">
                    <h1>Weather Dashboard</h1>
                    <a href="https://tarbo13.github.io/Weather_Dashboard/">
                    <img class="img-fluid" src={weatherGif} alt="project1" height="350" width="350"></img>
                    </a>
                    <small><a href="https://github.com/Tarbo13/Weather_Dashboard">GitHub repo</a></small>
                    <p class="hikeP">This web site is able to take in a user's city and display the current weather and a future five day forecast.  I had to use three separate API calls here to generate the current weather, five day forecast, and uv information for the page.</p>
                </div>
                    </div> 

                    <div className="row">
                    <div className="cardShadow cardBackground col-md-4 ml-3 mt-3">
                    <h1>React Employee Directory</h1>
                    <a href="https://tarbo13.github.io/Employee_Directory/">
                    <img class="img-fluid" src={employeeGif} alt="project1" height="350" width="350"></img>
                    </a>
                    <small><a href="https://github.com/Tarbo13/Employee_Directory">GitHub repo</a></small>
                    <p class="hikeP">This is an application that is able to list and sort employees using personal information.  Users are able to search for employees by first name using the search input, which updates the page with each keystroke.  Users may also sort employees alphabetically by first name</p>
                </div>
                <div className="cardShadow cardBackground col-md-4 ml-3 mt-3">
                    <h1>Budget Tracker</h1>
                    <a href="https://sleepy-wave-24018.herokuapp.com/">
                    <img class="img-fluid" src={budgetGif} alt="project1" height="350" width="350"></img>
                    </a>
                    <small><a href="https://github.com/Tarbo13/Budget_Tracker">GitHub repo</a></small>
                    <p class="hikeP">This is a budget tracking app.  Users are able to enter expenses and deposits which are tracked by date and time.  This application is able to function when a user is offline as well as online.  When offline, data is stored in local memory, then the app is updated once a connection is reestablished.</p>
                </div>

              
                        </div> 
                        <div className="row mt-3">
                <div className=" ml-3 mb-3 LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="ben-robinson-815a41171"><a class="LI-simple-link" href='https://www.linkedin.com/in/ben-robinson-815a41171?trk=profile-badge'>Ben Robinson</a></div>
                <div className="col-2">
                    <a className="col-md-6" href="https://github.com/Tarbo13">
                        <img class="mt-3" src={logo} alt="logo"></img>
                        <p>GitHub Portfolio</p>
                    </a>                   
                    
                        <a href="https://tarbo13.github.io/resume/.">
                            <img src={resumeImg} alt="resume" height="100px" width="100px"></img>
                        </a>
                        </div>
                </div>            
                       
              </div>  
                    

          </div>
          </main>
    )
}

export default Project;