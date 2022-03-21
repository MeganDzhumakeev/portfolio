import React from "react";
import {useState} from "react";
import Popup from "./Popup";
//import lagunaCard from ""


const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  ///////Testing PopUp button///////
const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
{/*/////Testing////////////////////////////*/}
<button onClick={() => setButtonPopup(true)}>Laguna Reef Project - Test</button>

<Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
  <h3>My Laguna Reef PopUp</h3>
  <p>Here is some text explaining the project</p>
</Popup>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
