import React, {useState, useEffect,useRef} from 'react';
import './Homepage.css';
import NET from 'vanta/dist/vanta.net.min';
// import THREE from 'vanta/vendor/three.r119.min.js';
import * as THREE from 'vanta/vendor/three.r119.min'


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
          scale:1.2,
          scaleMobile: 1.00,
          color: 0x8c0000,
          backgroundColor: 0x0,
          points: 20.00,
          maxDistance: 31.00,
          spacing: 30.00
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])
    return (

    <div className="Page home"   >

        <div id="GreetingCompound"  ref={zero}>
          <div id="Greeting">
            <h1 id="GreetingText">
            <br/>
            <br/>
            <br/>
              We are <br/>
              <span style={{color:"#f07178"}}>Flowsense</span><br/>
            </h1>
            <span id="GreetingSubText">
              Making sense of your data with<br/>
              State of the Art <span style={{color:"#f07178"}}>Artificial Intellence</span> and <span style={{color:"#f07178"}}>Data Science</span>.
            </span>
          </div>
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

