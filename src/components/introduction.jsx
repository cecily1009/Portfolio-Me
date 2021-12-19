import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/img_bg.jpeg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{color: "#FA8072"}}>Hi! <br />I'm Irene</h1>
                          <p ><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1BpFNsXLGfYG71pwECj1Deo_4oTFaL0DW2SfIwKWb62E/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold'}}>View My Resume<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpeg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{color: "#FA8072"}}>Check what I've <br/>created... </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/cecily1009" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold'}}>View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
