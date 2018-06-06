import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilepic from './profilepic.JPG';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>

            <a href='profilepic.jpg'>
              <img src={profilepic} alt="profilepic" className="profilepic-img" width='200px' height='100px'/>
          </a>

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | Python | React | NodeJS | Express | MongoDB/MySQL</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/shakur-ahmed-68366b39/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/shakahmed" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="https://learn.freecodecamp.org/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Codepen */}
          <a href="https://codepen.io/shakur/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-codepen" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
