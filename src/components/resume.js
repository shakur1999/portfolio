import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import unpic from './unpic.JPG'


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>

              <img src={unpic} alt="unpic" className="unpic-img"
                alt="unpic"
                style={{height:'400px'}}
              />

              {/* <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 /> */}
            </div>

            <h2 style={{paddingTop: '2em'}}>Shakur Ahmed</h2>
          <h4 style={{color: 'grey'}}>Up Coming Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Highly motivated and hardworking individual whose been exposed to number of Full-Stack technologies such as HTML, CSS, FlexBox, KeyFrame, JavaScript, jQuery, React, Node, Express, AJAX, JSX, MySQL, MongoDB and more. Super hunger and eager to learn as much as possible from piers and rest of the people around me..</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
          <p>550 18th St Oakland, CA 94612</p>
            <h5>Phone</h5>
          <p>(415) 926-1183</p>
            <h5>Email</h5>
          <p>ashakur1999@gmail.com</p>
            <h5>Web</h5>
          <p><a href="https://c9.io/shakurahmed">https://c9.io/shakurahmed</a></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
              <h2>Experience</h2>

            <Experience
              startYear={2011}
              endYear={2018}
              jobName="IT"
              jobDescription=""
              />

              <Experience
                startYear={2018}
                endYear={2019}
                jobName="DevOps Engineer"
                jobDescription=""
                
                startYear={2017}
                endYear={2018}
                jobName="Web Developer"
                jobDescription=""
                />
              <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Education</h2>


              <Education
                startYear={2017}
                endYear={2018}
                schoolName="Udemy, Free code-Camp, KickStart Coding School"
                schoolDescription=""
                 />

                 <Education
                   startYear={2014}
                   endYear={2017}
                   schoolName="San Francisco State University"
                   schoolDescription=""
                    />

              <Education
                startYear={2007}
                endYear={2011}
                schoolName="City College of San Francisco"
                schoolDescription=""
                 />
                   <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={50}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={85}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={45}
                    />
                    <Skills
                      skill="React"
                      progress={20}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
