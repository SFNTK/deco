'use client'
import "./gallerypara.css"
import React, { useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallerypara = () => {
    useEffect(() => {
        //Runs only on the first render

        const tls2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#gallerypara",
                start: "top 80%",
                end: "top 5%",
               
                toggleActions: "play none none reverse",
            }
        });
        tls2.to("#ctpara2", {
            opacity: 1,

            duration: 2,
            ease: "power1.inOut"
        },"anim4").to(".aniclass2", {
            opacity: 1,

            duration: 2,
            ease: "power1.inOut",
            stagger:.4
        },"anim4")

    }, []);
    return (
        <div id='gallerypara'>
            <div id='ct12' >
                <span id='cth12' className='aniclass2'>
                GALLERY
                </span>
                <span id='cth22' className='aniclass2'>
                Interior Design Gallery
                </span>

            </div>
            <p id='ctpara2'>

            Develop a concept or theme that will guide the design process. This could be inspired by the clients preferences, the buildings architecture, or a specific design style.
             </p>

        </div>
    );
}

export default Gallerypara;
