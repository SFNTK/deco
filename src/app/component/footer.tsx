import React from 'react';
import "./footer.css"

const Footer = () => {
    return (


        <div className="pg-footer">
            <footer className="footer">
                <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                    <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
                </svg>
                <div className='footer-content'>

                    <img src='./logo2.png' id='footerlogo' />
                    <div id='footercontent2'>
                        <div className='subdiv'>
                            <span>LOCATION</span>
                            <span>624 12th Ave S Nampa Illinois </span>
                        </div>

                        <div id='socialcontainer'>
                            <div>
<img className="socialicon" src='./instagram(1).png'/>
                            </div>

<div>
<img className="socialicon" src='./facebook.png'/>
</div>
<div>
<img className="socialicon" src='./twitter.png'/>
</div>

<div>
<img className="socialicon" src='./linkedin.png'/>
</div>
                        </div>
                        <div id='contactinfo'>
                            <div>
                                <img src='./footerphone.png'/>
                                <span>+1 (359) 536-8411</span>
                            </div>
                            <div>
                                <img src='./footermail.png'/>
                                <span>testfakeemail@gmail.com</span>
                            </div>
                        </div>

                    </div>


                </div>
                <div className="footer-copyright">
                    <div className="footer-copyright-wrapper">
                        <p className="footer-copyright-text">
                            <a className="footer-copyright-link" href="#" target="_self"> ©2024. | Designed By: SOUFIANE TAKI | All rights reserved. </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>


    );
}

export default Footer;
