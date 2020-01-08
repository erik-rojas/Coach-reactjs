import React, { Component } from "react";

import { SelectTimezone } from 'react-select-timezone';

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="headerbar">
            <div className="headerbar-logo">
              <img src={require("../assets/images/logo.png")} alt="logo" />
            </div>
            <div className="headerbar-register">
              <button className="btn-register">Register Now</button>
            </div>
          </div>
          <div className="header-content">
            <div className="content-text">
              <div className="text-header">
                WBECS presents Coach Master Toolkit Masterclass by Andrew
                Neitlich
              </div>
              <div className="text-content">
                Solve Billion-Dollar Problems For Your Clients And Become The
                Thriving Coach You’ve Always Wanted To Be
              </div>
            </div>
            <div className="content-btn">
              <button className="btn-register_master">
                Register For The Masterclass
              </button>
            </div>
          </div>
        </div>
        <div className="App-content">
          <div className="btn-section">
            <a link="#" className="btn-down">
              <img src={require("../assets/images/btn-down.png")} alt="down" />
            </a>
          </div>
          <div className="discover">
            <div className="discover-header">
              Discover the practical secrets behind the success of coaching
              champions. Deliver measurable results to your clients and
              confidently increase your fees.
            </div>
            <div className="discover-content">
              <div className="content-left">
                There are two kinds of Executive Coaches in the world. Both
                groups are doing their best, and are passionate about coaching
                and its power to change lives. However, one group is signing
                high-paying clients for longer periods and multiple engagements,
                and the other has a
              </div>
              <div className="content-right">
                diary full of short-term engagements with low-paying clients.{" "}
                <br /> <br />
                The panic over where the next lead is coming from in order to
                pay the bills this month is what keeps you on that all-too
                familiar treadmill that all coaches know and dread.
              </div>
            </div>
          </div>
          <div className="advantage">
            <div className="question">
              But, what if there was a way to get off of the treadmill for good?
              &nbsp; Wouldn’t you want to know about it, and use it to your
              advantage?
            </div>
            <div className="answer">
              Sure, you’ve heard that there are solutions out there that can
              help you become a better coach. But what if there were practical,
              turn-key frameworks of structured solutions to some of the most
              common problems your clients face? Well, there is…
            </div>
          </div>
          <div className="cover">
            <div className="cover-header">
              <div className="header-image" />
            </div>
            <div className="cover-content">
              <div className="header-text">
                A Comprehensive Collection of Coaching Tools In The Palm Of Your
                Hand
              </div>
              <div className="content-text1">
                <b className="text-bold">
                  Coach Master Toolkit (or CMT for short)
                </b>{" "}
                is a proven tool with the power to enhance your coaching
                business for the better. A transformative package of frameworks
                containing pre-prepared questions, materials and methodologies
                for a wide variety of scenarios, CMT enables you as a coach to
                attract and sustain new clients naturally, and build value and
                trust by making tangible differences.
              </div>
              <div className="content-text2">
                Developed in 2013 by Andrew Neitlich, Director of the Center for
                Executive Coaching, CMT has allowed Andrew personally to go from
                one client to a thriving 7-figure coaching practice - and now,
                you can gain access to it, taking your coaching practice to a
                whole other level of success.
              </div>
            </div>
          </div>
          <div className="btn-section">
            <a link="#" className="btn-down">
              <img src={require("../assets/images/btn-down.png")} alt="down" />
            </a>
          </div>
          <div className="registerNow">
            <div className="registerNow-header">
              <b className="brownBold">Register now</b> for the “Engage and
              Mobilize Employees: The Power of Coaching Toolkits” Masterclass
              with Andrew Neitlich at <b className="brownBold">no cost</b>
            </div>
            <div className="registerNow-image" />
            <div className="registerNow-content">
              Starting October 29th, Andrew Neitlich will be running LIVE
              in-depth masterclass sessions, plus giving you direct access to
              one of his most popular CMT frameworks, the “Engage and Mobilize
              Employees Tool”, absolutely free, so you can immediately begin
              implementing your learnings and improving your business after you
              attend.
            </div>
          </div>
          <div className="registerForm">
            <div className="btn-section">
              <a link="#" className="btn-down">
                <img
                  src={require("../assets/images/btn-down.png")}
                  alt="down"
                />
              </a>
            </div>
            <form className="form-content">
              <div className="description-header">
                Register For Free <br />
                90 Minute Masterclass
              </div>
              <div className="description-content">
                Fill in your details below & choose your preferred session time
                to secure your spot and receive FREE TOOL:
              </div>
              <div className="input-item">
                <div className="label">
                  First Name <b className="brownText">*</b>
                </div>
                <input className="input-field border-none" placeholder="John" />
              </div>
              <div className="input-item">
                <div className="label">
                  Primary Business Email <b className="brownText">*</b>
                </div>
                <input
                  className="input-field border-none"
                  placeholder="john.smith@mail.com"
                />
              </div>
              <div className="input-item">
                <div className="label">
                  How Many Coaching Engagements Have You Done?{" "}
                  <b className="brownText">*</b>
                </div>
                <input
                  className="input-field border-color1 backColor1 textColor1"
                  placeholder="More than 20 Engagements"
                />
              </div>
              <div className="input-item">
                <div className="label">
                  Your Closest Timezone <b className="brownText">*</b>
                </div>
                {/* <select
                  className="input-field border-color2 backColor1 textColor1"
                  placeholder="Select your nearest time zone?"
                /> */}
                <SelectTimezone value="Select your nearest time zone?" />
              </div>
              <div className="input-item">
                <div className="label">
                  Select your Webinar Time <b className="brownText">*</b>
                </div>
                <input
                  className="input-field border-color2 backColor1 textColor1"
                  placeholder="Select your webinar"
                />
              </div>
              <button className="btn-getStarted">
                <b className="big-font">Get Started</b>
                <br />
                with the Free 90 MIN Workshop
              </button>
            </form>
          </div>
          <div className="about">
            <div className="photo">
              <img
                src={require("../assets/images/Andrew_Neitlich.png")}
                alt="Andrew Neithlich"
              />
              <div className="name">
                Developer, Coach <br />
                Master Toolkit
              </div>
            </div>
            <div className="profile">
              <div className="about-name">About Andrew Neitlich</div>
              <div className="profile-content">
                Andrew Neitlich has a Harvard MBA, a full coaching practice, and
                also runs the Center for Executive Coaching, one of the leading
                training organizations in the world for executive and business
                coaches. He has written a number of books about coaching and
                leadership, including The Way to Coach Executives, Guerrilla
                Marketing for Coaches, and Elegant Leadership: Simple
                Strategies, Remarkable Results.{" "}
              </div>
              <div className="readMore">Read More</div>
              <div className="sign">
                <img
                  src={require("../assets/images/Andrew_Signature@192x72.png")}
                  alt="Andrew Neithlich"
                />
              </div>
              <button className="btn-register_master2">
                Register For The Masterclass
              </button>
            </div>
          </div>
          <div className="App-footer">
            <div className="logo-section">
              <img src={require("../assets/images/footer-logo@201x30.png")} alt="logo" />
            </div>
            <div className="navbar">
              <a link="#" className="link-item">
                Privacy
              </a>
              <a link="#" className="link-item">
                Terms of use
              </a>
              <a link="#" className="link-item">
                Disclaimer
              </a>
              <a link="#" className="link-item">
                Contact
              </a>
            </div>
            <div className="seperate">
              <div className="seperate-content" />
              <div className="createdwith">
                Created with ♥ by the WBECS TEAM
              </div>
            </div>
            <div className="footerbar">
              © Coach Master Toolkit - All rights reserved
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
