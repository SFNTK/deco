'use client'
import React, { useEffect } from 'react';
import "./categoriepara.css";
import gsap from 'gsap';
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Categoriepara = () => {
   
    useEffect(() => {
        //Runs only on the first render

        const tls2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#categoriapara",
                start: "top 80%",
                end: "top 5%",
               
                toggleActions: "play none none reverse",
            }
        });
        tls2.to("#ctpara", {
            opacity: 1,

            duration: 2,
            ease: "power1.inOut"
        },"anim2").to(".aniclass", {
            opacity: 1,

            duration: 2,
            ease: "power1.inOut",
            stagger:.4
        },"anim2")

    }, []);
    return (
        <div id='categoriapara'>
            <div id='ct1' >
                <span id='cth1' className='aniclass'>
                    CATEGORIES
                </span>
                <span id='cth2' className='aniclass'>
                    Architecture Interior.
                </span>

            </div>
            <p id='ctpara'>

                Designing an architectural interior involves integrating functionality, aesthetics, and user experience to create spaces that are both visually appealing and practical. Here is a step-by-step guide to designing an architectural interior
            </p>

        </div>
    );
}

export default Categoriepara;
