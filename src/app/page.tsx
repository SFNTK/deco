'use client'
import Image from "next/image";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import { useEffect, useRef, useState } from "react";
import Categoriepara from "./component/categoriepara";
import Categorieimages from "./component/categorieimages";
import Numbers from "./component/numbers";
import Gallerypara from "./component/gallerypara";
import Gellery from "./component/gellery";
import Bigimage from "./component/bigimage";
import Testicaro from "./component/testicaro";
import Test from "./component/test";
import Faq from "./component/faq";
import Contact from "./component/Contact";
import Footer from "./component/footer";

export default function Home() {
  const [isopen, setopen] = useState(false)
  const menuphone = useRef();
  useEffect(() => {
    //Runs only on the first render
    if (isopen) {
      menuphone.current.style.transform = "scaleY(1)";


    } else {
      menuphone.current.style.transform = "scaleY(0)";
    }

  }, [isopen]);
  return (
    <>
      <div id="frstview">
        <div id='phonemenu' ref={menuphone}>
          <img src="./close.png" id="close" onClick={() => {
            setopen(false)
          }} />
          <ul>
          <li onClick={()=>{
            setopen(false)
          }}><a href='#categoriapara'>Categories</a></li>
                <li onClick={()=>{
            setopen(false)
          }}> <a href="#gallerypara">Gallery</a></li>
                <li onClick={()=>{
            setopen(false)
          }}><a href="#bigg">FEEDBACK</a> </li>
          </ul>
        </div>
        <Navbar setopen={setopen} isopen={isopen} />
        <Hero />
        <Categoriepara />
        <Categorieimages />
        <Numbers />
        <Gallerypara />
        <Gellery />
        <Bigimage />
        <Testicaro />
        <Contact />
        <Footer />

      </div>

    </>
  );
}
