import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import ukpic from './ukpic.JPG';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Shakur Ahmed</h2>

          <img src={ukpic} alt="ukpic" className="ukpic-img"
            alt="ukpic"
            style={{height:'250px'}}
          />
          
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Highly motivated and hardworking individual whose been exposed to number of Full-Stack technologies such as HTML, CSS, FlexBox, KeyFrame, JavaScript, jQuery, React, Node, Express, AJAX, JSX, MySQL, MongoDB and more. Super hunger and eager to learn as much as possible from piers and rest of the people around me.</p>

        </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                  (415) 926-1183
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                  ashakur1999@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                  LinkedIn
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
