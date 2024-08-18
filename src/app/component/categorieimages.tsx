'use client'
import React, { useEffect } from 'react';
import "./categorieimage.css";
import gsap from 'gsap';
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Categorieimages = () => {
    useEffect(() => {
        //Runs only on the first render

        const tls3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#images",
                start: "top 80%",
                end: "top 5%",
               
                toggleActions: "play none none reverse",
            }
        });
        tls3.to(".imagecontain", {
            opacity: 1,
y:0,
            duration: 1.5,
            ease: "power1.inOut",
            stagger:.2,
        })

    }, []);
    return (
        <div id='images'>
            <div className='imagecontain' >
                <img src='./modern.jpg' className='imagecate'/>
                <span>MODERN</span>
            </div>
            <div className='imagecontain'>
                <img src='./classic.jpg' className='imagecate'/>
                <span>CLASSIC</span>
            </div>
            <div className='imagecontain'>
                <img src='./minimalist.jpg' className='imagecate'/>
                <span>MINIMALIST</span>
            </div>
            <div className='imagecontain'>
                <img src='./contem.jpg' className='imagecate'/>
                <span>CONTEMPORARY</span>
            </div>
            
        </div>
    );
}

export default Categorieimages;
