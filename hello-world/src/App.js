import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../../semantic/dist/semantic.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="blurbg">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Herzlich Willkommen auf meiner Website - Fzoozai</h2>

                <div className="ui inverted compact stackable menu">
                    <div className="item">
                        <img src={require('../../img/flash.png')}alt="logo" />
                    </div>
                    <a className="item">About me</a>
                    <a className="item">My works</a>
                    <a className="item">Skills</a>
                    <a className="item">Contact</a>
                </div>
            </div>
        </div>

          {/*Start of main section*/}

          <div className="flex-container">

              <div className="ui link cards">
                  <div className="card">
                      <div className="image">
                          <img src={require('../../img/fzoozai.png')}  alt="me"/>
                      </div>
                      <div className="content">
                          <div className="header">Fabian Soosaithasan</div>
                          <div className="meta">
                              <a>Frontend Developer</a>
                          </div>
                          <div className="description">
                              #React <i className="diamond icon" />
                          </div>
                      </div>
                      <div className="extra content">
                      <span className="right floated"><i className="student icon" /> RWTH</span>
                      </div>
                  </div>
              </div>
          </div>

          <div className="bottomSec">
          <h3>My Work's</h3>
          <div className="ui last container">
              <div className="ui three steps">
                  <div className="step">
                      <div className="content">
                          <div className="title">fzoozai.github.io</div>
                          <div className="description">Personal website</div>
                      </div>
                  </div>
                  <div className="active step">
                      <div className="content">
                          <div className="title"><a href="https://github.com/fzoozai/hausarzt">hausarzt</a></div>
                          <div className="description">stack: React</div>
                      </div>
                  </div>
                  <div className="disabled step">
                      <div className="content">
                          <div className="title">more...</div>
                          <div className="description">https://github.com/fzoozai</div>
                      </div>
                  </div>
              </div>
          </div>
          </div>

      </div>
    );
  }
}

export default App;
