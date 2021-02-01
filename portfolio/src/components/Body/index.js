import React from "react";
import "./styleB.css";
import logo from "./GitHubLogo.png";
import gif1 from "./HikeLocalGif.gif";
import resumeImg from "./ResumeLogo.png"

function Body() {
    return (

        <main className="container">
        <div className="row insideBackground">
          <div className="col-md-10 ml-5 mb-5 mt-5 bg-light cardShadow">

            <div className="row insideBackground">
                <div className="cardShadow cardBackground col-md-4 ml-3 mt-3">
                    <h1>Project1</h1>
                    <a href="#">
                        <img class="img-fluid" src="portfolio\public\HikeLocalGif.gif" alt="project1" height="350" width="350"></img>
                    </a>
                    <small><a href="https://github.com/snelson-seattle/HikeLocal/tree/develop">GitHub repo</a></small>
                    <p class="hikeP">Hike Local is a website that locates hiking trails based on a user's location and desired difficulty.  I worked with a team to create this site and mostly focused on the front end development.  This app uses API calls from three different sources to display the trail information the user desires.</p>
                </div>

                <div className="cardShadow cardBackground col-md-4 ml-3 mt-3">
                    <h1>Project1</h1>
                    <a href="#">
                        <img class="img-fluid" src="portfolio\public\HikeLocalGif.gif" alt="project1" height="350" width="350"></img>
                    </a>
                    <small><a href="https://github.com/snelson-seattle/HikeLocal/tree/develop">GitHub repo</a></small>
                    <p class="hikeP">Hike Local is a website that locates hiking trails based on a user's location and desired difficulty.  I worked with a team to create this site and mostly focused on the front end development.  This app uses API calls from three different sources to display the trail information the user desires.</p>
                </div>
                
                </div>
                <div className="row">
                <div className="cardShadow cardBackground col-md-4 ml-3 mt-3">
                    <h1>Project1</h1>
                    <a href="#">
                        <img class="img-fluid" src={gif1} alt="project1" height="350" width="350"></img>
                    </a>
                    <small><a href="https://github.com/snelson-seattle/HikeLocal/tree/develop">GitHub repo</a></small>
                    <p class="hikeP">Hike Local is a website that locates hiking trails based on a user's location and desired difficulty.  I worked with a team to create this site and mostly focused on the front end development.  This app uses API calls from three different sources to display the trail information the user desires.</p>
                </div>
                <div className="cardShadow cardBackground col-md-4 ml-3 mt-3">
                    <h1>Project1</h1>
                    <a href="#">
                        <img class="img-fluid" src="portfolio\public\HikeLocalGif.gif" alt="project1" height="350" width="350"></img>
                    </a>
                    <small><a href="https://github.com/snelson-seattle/HikeLocal/tree/develop">GitHub repo</a></small>
                    <p class="hikeP">Hike Local is a website that locates hiking trails based on a user's location and desired difficulty.  I worked with a team to create this site and mostly focused on the front end development.  This app uses API calls from three different sources to display the trail information the user desires.</p>
                </div>
                    </div> 

                    <div className="row">
                    <div className="cardShadow cardBackground col-md-4 ml-3 mt-3">
                    <h1>Project1</h1>
                    <a href="#">
                        <img class="img-fluid" src="portfolio\public\HikeLocalGif.gif" alt="project1" height="350" width="350"></img>
                    </a>
                    <small><a href="https://github.com/snelson-seattle/HikeLocal/tree/develop">GitHub repo</a></small>
                    <p class="hikeP">Hike Local is a website that locates hiking trails based on a user's location and desired difficulty.  I worked with a team to create this site and mostly focused on the front end development.  This app uses API calls from three different sources to display the trail information the user desires.</p>
                </div>
                <div className="cardShadow cardBackground col-md-4 ml-3 mt-3">
                    <h1>Project1</h1>
                    <a href="#">
                        <img class="img-fluid" src="portfolio\public\HikeLocalGif.gif" alt="project1" height="350" width="350"></img>
                    </a>
                    <small><a href="https://github.com/snelson-seattle/HikeLocal/tree/develop">GitHub repo</a></small>
                    <p class="hikeP">Hike Local is a website that locates hiking trails based on a user's location and desired difficulty.  I worked with a team to create this site and mostly focused on the front end development.  This app uses API calls from three different sources to display the trail information the user desires.</p>
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

export default Body;