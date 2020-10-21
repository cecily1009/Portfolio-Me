import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 style={{color: "#FA8072"}} className="colorlib-heading">Who Am I?</h2>
                    <p> I was graduated from Stony Brook University with a Bachelor's degree in Computer Science. Specializing in software design and full-stack web development. Have experiences with modern web development technologies like ReactJS, NodeJS, Bootstrap, Selenium. I love exploring new technologies and applied to my projects.</p>
                   
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 style={{color: "#FA8072"}} className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development</h3>
                    <p>I have experience building full-stack web applications using <span style={{fontWeight:'bold'}}>JavaScript, React,Redux, HTML5, CSS3, MongoDB, Node.js</span>.</p>
                    
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>With Bachelor’s degree in Computer Science, I have good grasp over fundamental concepts of Data Structures and Algorithms</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Web Application Testing</h3>
                    <p>I learned <span style={{fontWeight:'bold'}}>automation testing</span> using Selenium and TestNG by myself, also the <span style={{fontWeight:'bold'}}>unit testing</span> with jest and enzyme for react based web application.Then, I wrote some test cases to cover common user workflows in my previous project. </p>
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </section>
      </div>
    )
  }
}
