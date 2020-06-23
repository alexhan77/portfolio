import React from 'react';
import logo from './logo.svg';
import './App.css';
import LangIcons from './components/LangIcons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/41539666_2315322235161813_6283484562173460480_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_oc=AQk1K2wcH0TBvDxxO6k9MPT_j97SeX7kv4oEgu5EvRIdJiN0vJ61821W28NAqKOMGrgejmPKNzWbvsp3JufDFYEc&_nc_ht=scontent-sea1-1.xx&oh=19a5cca7a61847937f25a4f55900515a&oe=5F13DC9B" className="App-logo" alt="logo" />
        <p>
          Welcome to my site.
        </p>
        <a
          className="App-link"
          href="https://res.cloudinary.com/jummay/image/upload/v1592891869/Screen_Shot_2020-06-22_at_10.57.55_PM_sdn4ep.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </a>
        <a
          className="App-link"
          href="https://linkedin.com/in/alexhan77 "
          target="_blank"
          rel="noopener noreferrer"
        >
          My LinkedIn
        </a>
        <a
          className="App-link"
          href="https://github.com/alexhan77 "
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>

      </header>
      <div>
        <h1><strong>ALEX S. HAN</strong></h1>
        <nav class="nav-center">
          <div class="nav-wrapper blue-grey">
            <a href="#" class="brand-logo"> </a>
            <ul id="nav-mobile" className="center-align">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#lAndS">Languages & Skills</a></li>
            </ul>
          </div>
        </nav>
        <div>
          <h3 id="about">ABOUT</h3>
          <p> Hello, my name is Alex Han. I am a full stack develop that exccel in JavaScript, Python, Sql, and many more. I recently worked at Microsoft and had a lot of experience working with individuals that had lots of exposure with tecnology and coding.I have a passion for gaming and coding, bascially the peanut butter and jelly of coding. I would love to expand my experiences across different industries. Welcome to my site. </p>
        </div>
        <hr />
        <div class="right-align">
          <h3 id="projects"><strong>PROJECTS</strong></h3>
          <p><strong>ALL MY FAVORITE PROJECTS</strong></p>
          <h2>Animania</h2>
          <img class="animania" src="https://res.cloudinary.com/jummay/image/upload/v1592893885/Screen_Shot_2020-06-22_at_11.30.39_PM_iccl9r.png" />
          <p>Languages Used:</p>
          <p>
            Javascript , Mongoose, React, CSS, React BootStrap </p>
          <p>
            Collaborated with two great developers, creating a MERN Stack application. This project allowed users to search specific genres, create specific preferences such as commenting / adding to the playlist.
            Routing: 
            <li>Developed and created a small portion of the backend routes</li>
            <li>Rendered music and gifs to the site: Autoplay was implemented and different moving background gifs.</li>
            <li>GitMaster: Merging and resolving conflicts</li>
          </p>
          <br /> 
          <h2>Rick v.s Morty</h2>
          <img class="project1" src="https://res.cloudinary.com/jummay/image/upload/v1592894648/Screen_Shot_2020-06-22_at_11.43.56_PM_okk4n2.png" /> 
          <p>Languages Used:</p>
          <p>
            Javascript & CSS</p>
          <p>
            Small minigame that I have created. This was my very first project, and one of my favorites. This project bascailly is the backbone of my coding experience. 
            <li>Developed and created a map</li>
            <li>Rendered characters to move and created an automated bot to move at random</li>
          </p>
        </div>
        <hr />
        <div>
          <h3 id="resume">RESUME</h3>
          <hr/>
          <img src="https://res.cloudinary.com/jummay/image/upload/v1592891869/Screen_Shot_2020-06-22_at_10.57.55_PM_sdn4ep.png" />
          <div>
            My Resume
          </div>
        </div>
        <hr />
        <div class="right-align">
          <h3 id="lAndS">LANGUAGE & SKILLS</h3>
          <p>MY ELEGANT LANGUAGES AND SKILLS</p>
        </div>
        <LangIcons />
      </div>
    </div>
  );
}

export default App;
