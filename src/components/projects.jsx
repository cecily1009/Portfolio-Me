import React, { Component } from 'react'

export default class Projects extends Component {
  
  render() {
    
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 style={{color: "#FA8072"}}className="colorlib-heading animate-box">PROJECTS</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="https://dev-connector-web.herokuapp.com">DevConnector Web Design </a><span>Jun 2020 – Aug 2020</span></h2>
                        <ul>
                          <li>Designed and developed an <span style={{fontWeight:'bold'}}>MERN-Stack</span> social network web application for developers to create a profile, share posts, and make comments on others’ posts. </li>
                          <li>Implemented <span style={{fontWeight:'bold'}}>React-animations, Google Font, Font Awesome</span> to create aesthetic and responsive web pages.</li>
                          <li>Integrated Gravatar API allows users to set their default profile image based on their email address.</li>
                          <li>Connected with GitHub API to fetch user’s basic information based on provided GitHub username and display the information on the user’s profile page.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <a href="https://campdiscover.herokuapp.com"><h2>CampDiscover Web Design<span> Apr 2020 - Jun 2020</span></h2></a>
                        <ul>
                          <li>Designed and developed a <span style={{fontWeight:'bold'}}>full-stack </span>web application which is a Yelp-like website for campsites, with features that users could review, search and recommend campsites to the public.</li>
                          <li>Used <span style={{fontWeight:'bold'}}>EJS, Google Font, Font Awesome tools and Bootstrap framework </span>for the front-end to build elegant responsive web pages.</li>
                          <li>Wrote a <span style={{fontWeight:'bold'}}>RESTful web server in Node.js with Express and used MongoDB</span> for storing data.</li>
                          <li>Integrated Google Maps API for displaying campground location on Google Maps.</li>
                          <li>Implemented integration test using Selenium to cover 10+ most common user workflows.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="https://journal-garden.herokuapp.com">JournalSite Web Application</a> <span>Nov 2019 – Apr 2020</span></h2>
                        <ul>
                          <li>Built a blog-style journal web application for users to keep life moments and ideas using Express and storing data in MongoDB.</li>
                          <li>Created animated and user-friendly interfaces by using <span style={{fontWeight:'bold'}}>Google Font, React-Semantic UI, and React-Bootstrap frameworks</span>.</li>
                          <li>Integrated Cloudinary API to improve image load time on the journal page.</li>
                          <li>Deployed the web application on <span style={{fontWeight:'bold'}}>Heroku</span> and updated it automatically when a new change is pushed to the GIT repository.</li>
                          </ul>                      
                          </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Movie Information System Web Design <span>Spring 2015</span></h2>
                        <ul>
                          <li>Collaborated with a team of 4 people to design and develop a movie information system which is similar to <a href="https://www.fandango.com/">Fandango.com</a>.</li>
                          <li>created responsive web pages with <span style={{fontWeight:'bold'}}>Bootstrap framework</span>, and built back-end database using MySql.</li>
                          <li>Enriched the search results for customers to get real-time movies information, and simplified the processes for checking the accurate movie schedule to help customers purchase tickets online.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>DateEDU Web Application <span>Fall 2014</span></h2>
                        <ul>
                          <li>Collaborated with a team of 3 persons to design and develop an online dating website, which is similar to <a href="https://www.pof.com/">POF.com</a>.</li>
                          <li>Created responsive web pages with <span style={{fontWeight:'bold'}}>Bootstrap framework</span>, and built back-end database using MySql.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                   <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Zombie Crush Saga Game <span>Fall 2013</span></h2>
                        <ul>
                          <li>Implemented and designed UI navigarion and mian functions using <span style={{fontWeight:'bold'}}>Java</span>, this game is the simple version of Candy Crush Saga Game</li>
                          <li>Player could select game from 4 different levels, simply swapped two tiles to satisfy the matches to win the game.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
