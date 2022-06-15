import React, {useState, useEffect,useRef} from 'react';
import './Homepage.css';
import NET from 'vanta/dist/vanta.net.min';
// import THREE from 'vanta/vendor/three.r119.min.js';
import * as THREE from 'three'


export default function Home() {
    const zero = useRef(null);
    const first = useRef(null);
    const second = useRef(null);
    const third = useRef(null);
    const fourth = useRef(null);

    const [vantaEffect, setVantaEffect] = useState(0)
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(NET({
          THREE,
          el: zero.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 120.00,
          minWidth: 200.00,
          scale: 0.8,
          scaleMobile: 1.00,
          color: 0x8c0000,
          backgroundColor: 0x0,
          points: 20.00,
          maxDistance: 21.00,
          spacing: 20.00
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])
    return (

    <div className="Page"   >

        <div id="GreetingCompound" ref={zero} >
          <div id="Greeting">
            <h1 id="GreetingText">
              Hi,<br/>
              I'm <span style={{color:"#f07178"}}>Henry</span><br/>
              and I do <br/>
              all sorts <br/>
              of things.
            </h1>
            <span id="GreetingSubText">
              Studying Data Science.<br/>
              Mostly interested in Design, Math and Machine Learning.
            </span>
          </div>
          {/* <div id="GreetingPicDiv">
           <div id ="anim">
           <div class = "row row0">
            <div id ="origin" class ="circle"></div>
            <div id ="origin" class ="circle"></div>
            <div id ="origin" class ="circle"></div>
            </div>
            <div class = "row row1">
            <div id ="origin" class ="circle"></div>
            <div id ="origin" class ="circle"></div>
            <div id ="origin" class ="circle"></div>
            <div id ="origin" class ="circle"></div>

            </div>
            <div class = "row row2">
            <div id ="origin" class ="circle"></div>
            <div id ="origin" class ="circle"></div>
            <div id ="origin" class ="circle"></div>
            <div id ="origin" class ="circle"></div>
            <div id ="origin" class ="circle"></div>


            </div>
            <div class = "row ">
            <div id ="origin" class ="circle"></div>
            <div id ="origin" class ="circle"></div>
            <div id ="origin" class ="circle"></div>
            </div>

            <div class = "row row3">
            <div id ="origin" class ="circle"></div>
            </div>
           </div>
          </div> */}
        </div>

        <div className="ContentCard hvr-grow-shadow" ref={first}>
          <a href="/work/shape/" className="c-tile c-tile--shape" aria-label="Shape Case Study">
            <span className="CCategory">3D Graphics / Math</span>
            <h2 className="CTitle">3D Animation Compression</h2>
            <div className="CPicDiv">
              <img className="Cpic"style={{width:'50%'}}src={require("C:/Users/henry/Programming/Projekte/personal-page/src/Assets/workmock.png")}>
              </img>
            </div>
          </a>
        </div>
        <div className="ContentCard hvr-grow-shadow" ref={second}>
          <a href="/work/shape/" className="c-tile c-tile--shape" aria-label="Shape Case Study">
            <span className="CCategory">Data Science / Math</span>
            <h2 className="CTitle">Datascience from Scratch</h2>
            <div className="CPicDiv">
              <img className="Cpic"style={{width:'50%'}}src={require("C:/Users/henry/Programming/Projekte/personal-page/src/Assets/workmock.png")}>
              </img>
            </div>
          </a>
        </div>
        <div className="ContentCard hvr-grow-shadow" ref={third}>
          <a href="/work/shape/" className="c-tile c-tile--shape" aria-label="Shape Case Study">
            <span className="CCategory">Web App / Mobile</span>
            <h2 className="CTitle">Treatment Tracking</h2>
            <div className="CPicDiv">
              <img className="Cpic"style={{width:'50%'}}src={require("C:/Users/henry/Programming/Projekte/personal-page/src/Assets/collage.png")}>
              </img>
    
            </div>
          </a>
        </div>
        <div className="ContentCard hvr-grow-shadow" ref={fourth}>
          <a href="/work/shape/" className="c-tile c-tile--shape" aria-label="Shape Case Study">
            <span className="CCategory">3D Graphics / Math</span>
            <h2 className="CTitle">3D Line Smoothing</h2>
            <div className="CPicDiv">
              <img className="Cpic"style={{width:'50%'}}src={require("C:/Users/henry/Programming/Projekte/personal-page/src/Assets/workmock.png")}>
              </img>
            </div>
          </a>
        </div>
    </div>
    )    
}

