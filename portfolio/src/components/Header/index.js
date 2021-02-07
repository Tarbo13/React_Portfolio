import React from "react";
import "./styleH.css";
import bonzi from "./BigBonzi.jpg"



function Header() {
    return (
        
          <div style={{ backgroundImage: `url(${bonzi})`}} className="row">
            
              <div className="col-md-12 mt-5">
                  <h1 className="h1">Portfolio</h1>
                  <h2 className="h2">Current Projects</h2>
                  <hr/>
                </div>  
                   
              </div>
    )            
}

export default Header;