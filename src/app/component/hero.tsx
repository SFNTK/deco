'use client'
import React, { useEffect, useRef } from 'react';
import "./hero.css";
import gsap from 'gsap';




import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from 'split-type'

const Hero = () => {
    const refs = useRef<(HTMLParagraphElement | null)>();

    useEffect(() => {
     
        //Runs only on the first render
       
        let element = document.querySelector('.anim');
        const text = SplitType.create('#content h2')

        const tls = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top 95%",
                end: "top 55%",

                toggleActions: "play none none reverse",
            }
        });
     

    tls.to("#content .char",{
        y:0,
        stagger:.05,
        opacity:1,
        delay:.2,
        duration:1,ease:"power1.inOut"
        },"anim1").fromTo("#explore",{opacity:0}, {
          opacity:1,
          duration:2,
           
            ease: "power1.inOut"
        },"anim1").fromTo("#content span",{opacity:0}, {
            opacity:1,
            duration:2,
             
              ease: "power1.inOut"
          },"anim1")
        






    }, []);
    return (
        <div id='hero'>
            <img src='./bg.jpg' />
            <div id='overlay'></div>
            <div id='content'>
                <h2>
                    Turning Houses into Homes,<br />
                  
                        <p className='anim' id='anim' >
                        One Design at a Time
                        </p>
                        
                    
                </h2>
                <span>
                With every project we undertake, we are committed to turning houses into homes, one design at a time.
                </span>
                <div id='explore'>
               <a href='#categoriapara' style={{color:"white",textDecoration:"none"}}>Explore Our Categories</a>
                  

                </div>
            </div>
        </div>
    );
}

export default Hero;
