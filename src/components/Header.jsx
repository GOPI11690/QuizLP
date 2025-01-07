// import React from 'react'

function Header() {
  return (
    <div className="container">
        <div className="logo">
            <a href="#">< img src="https://img.freepik.com/premium-vector/gob-logo-design-initial-letter-gob-monogram-logo-using-hexagon-shape_1101554-23167.jpg" alt="logoPic" /><h1>GOB SITE</h1></a>
        </div>
        <div className="navigation">
            <ul id="nav">
                <li><a href="#" >Solutions</a></li>
                <li><a href="#" >Templates</a></li>
                <li><a href="#" >Resources</a></li>
                <li><a href="#" >Pricing</a></li>
            </ul>
        </div>
        <div className="login">
            <a href="#" >LogIn</a>
            <a id="signUp" href="#" >Sign Up</a>
        </div>
    </div>
  )
}

export default Header