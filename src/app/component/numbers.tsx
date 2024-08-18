"use client"
import React, { useEffect } from 'react';
import "./numbers.css";
import gsap from 'gsap';
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Numbers = () => {
    useEffect(() => {
        //Runs only on the first render

        const tls4 = gsap.timeline({
            scrollTrigger: {
                trigger: "#numbers",
                start: "top 80%",
                end: "top 5%",
               
                toggleActions: "play none none reverse",
            }
        });
        tls4.to(".number", {
            opacity: 1,
y:0,
            duration: 1.5,
            ease: "power1.inOut",
            stagger:.2,
        })

    }, []);
    return (
        <div id='numbers'>
            <div className='number'>
                <div id='numberheadline'>8<span>K</span></div>
                <span id='numbermini'>INTERIOR PROJECTS</span>
                <p id='numberpara'>Designing spaces that inspire, delight</p>
            </div>
            <div className='number'>
                <span id='numberheadline'>30</span>
                <span id='numbermini'>Years of Works</span>
                <p id='numberpara'>Mastering expertise, innovation</p>
            </div>
            <div className='number'>
                <span id='numberheadline'>16K</span>
                <span id='numbermini'>Satisfied Clients</span>
                <p id='numberpara'>Happy clients building lifelong relationships</p>
            </div>
            <div className='number'>
                <span id='numberheadline'>99%</span>
                <span id='numbermini'>Happy Rate</span>
                <p id='numberpara'>Satisfaction rate, expectations</p>
            </div>
            
        </div>
    );
}

export default Numbers;
