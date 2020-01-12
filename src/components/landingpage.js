import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Front-End Web Developer</h1>
              <hr />
              <p>
                <i class="fab fa-html5"> HTML</i> /{" "}
                <i class="fab fa-css3-alt"> CSS</i> |{" "}
                <i class="fab fa-js"> JavaScript</i> |{" "}
                <i class="fab fa-bootstrap"> Bootstrap</i> |{" "}
                <i class="fab fa-react"> React</i> |{" "}
                <i class="fab fa-angular"> Angular</i>
              </p>
              <div className="social-links">
                {/* Facebook */}
                  <a href="https://www.facebook.com/GabrielBundea" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-facebook-square"> Facebook</i>
                  </a>
                {/* Github */}
                <a href="https://github.com/Gabrielish" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"> Github</i>
                  </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
