import React from 'react';
import './navbar.css'
export default function Navbar(history){
    return (
        <>
            <div className="Navbar">
                <div className="Nav left">
                <div className="NavbarText hvr-underline-from-center Work">
                    Work
                </div>
                    <div className="Dropdown WorkDrop">
                        <div className="Dropdownitem dropdowntext1">
                            <img style={{width:"20px"}} className="dropdownicon iconspin1" src={require("C:/Users/henry/Programming/Projekte/personal-page/src/Assets/web.svg")}></img>
                            <span className="dropdowntext1">Webdevelopment</span><br/><br/>
                        </div>
                        <div className="Dropdownitem">
                            <img style={{width:"20px"}} className="dropdownicon iconspin2" src={require("C:/Users/henry/Programming/Projekte/personal-page/src/Assets/3d.svg")}></img>
                            <span className="dropdowntext">3D Graphics</span><br/><br/>
                        </div>
                        <div className="Dropdownitem">
                            <img style={{width:"20px"}} className="dropdownicon iconspin3" src={require("C:/Users/henry/Programming/Projekte/personal-page/src/Assets/calculator.svg")}></img>
                            <span className="dropdowntext">Mathematical Coding  </span><br/><br/>
                        </div>
                        <div className="Dropdownitem">
                            <img style={{width:"20px"}} className="dropdownicon iconspin4" src={require("C:/Users/henry/Programming/Projekte/personal-page/src/Assets/neural.svg")}></img> 
                            <span className="dropdowntext">Machine Learning</span>
                        </div>
                    </div>
             
                <div className="NavbarText hvr-underline-from-center" onClick={()=>window.location.href = '/aboutme'}>
                    About Me
                </div>
                <div className="NavbarText hvr-underline-from-center" onClick={()=>window.location.href = '/contact'}>
                    Contact
                </div>

                </div>
                <div className="Nav spacer">
                    <img className="NavbarBrand" onClick={()=>window.location.href = '/home'}src={require("C:/Users/henry/Programming/Projekte/personal-page/src/Assets/fuji.svg")}>
                    </img>
                </div>
                <div className="Nav spacing right">

                    
                    <span className="jam navbaricon iconspin jam-github"></span>
                    
                    
                    <span className="jam navbaricon iconspin jam-medium"></span>
                    
                    
                    <span className="jam navbaricon iconspin jam-linkedin"></span>
                    
                </div>
            </div>
        </>
        )
}