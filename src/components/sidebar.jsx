import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpeg)'}} />
              <h1 id="colorlib-logo" ><a href="index.html" style={{color: "#FA8072"}}>Irene He</a></h1>
              <span className="email"><a href="mailto:irene_he2020@hotmail.com"><i className="icon-mail"></i>irene_he2020@hotmail.com </a></span>
            </div>
            <hr/>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
           
                  <li><a href="#timeline" data-nav-section="timeline">Projects</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/irene-he/" style={{color: "#FA8072"}}><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/cecily1009" style={{color: "#FA8072"}} ><i className="icon-github"></i></a></li>
               </ul>
            </nav>
            
          </aside>
        </div>
      </div>
    )
  }
}
