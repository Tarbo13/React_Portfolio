import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import ProfImg from "./IMG_1527.jpg";

const styles = {
    h1Style: {
        color: "#bb8e07da"
    },
    picSize: {
        width: "175px",
        height: "180px",
        borderRadius: "50%",
        border: "5px solid #032603"
    }
}

function About() {
    return (
        <div>
            

            <main className="conatiner">
                <div class="row">
                    <div className="col-md-8 mt-5 ml-5 bg-light">
                        <h1 style={styles.h1Style}>About Me</h1>
                        <hr/> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 mb-5 ml-5 bg-light">
                        <div className="float-left">
                            <img className="mr-2" src={ProfImg} alt="headShot" style={styles.picSize}></img>
                        </div>
                        <p>Hi there, I'm Ben Robinson and I was born and raised in Salem Oregon.  Growing up I spent a lot of time in the state parks.  My family was big into camping, waterskiing, and hiking.  When I hit my highschool years I became very active in our school music program.  I play percussion.  My passion for drums followed me all the way through college where I played for several school jazz quiors and bands.  After college I moved to Seattle Washington where my love for drumming followed me.  I played in several groups, including a rock band and a church gospel choir.  I've lived in Seattle for the past eighteen years and have worked in project management for several logistics companies.  While in this profession I have learned how to use EDI systems that manage communication between our customers and their customers.  Recently I completed the UW full stack coding boot camp.  I have learned some of the fundamentals and I'm looking forward to putting my new skills to use.  During the course I learned to code using HTML, CSS JavaScript, JQuery, Node.js MongoDB, Angular.js and React. I have posted some of my current projects here.  Please take a look.  Deployed web pages and links to my GitHub repo pages are in the portfolio tab above.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About;