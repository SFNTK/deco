import React, { useEffect, useRef, useState } from 'react';
import "./testicaro.css"
const Testicaro = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const arrow = useRef<HTMLImageElement>(null);
    const[caro,setcaro]=useState<Number>(75)
    const[carotest,setcarotest]=useState<Number>(20)
    useEffect(() => {
        //Runs only on the first render

      }, []);
    return (
        <div id='bigg'>
            <div id='firstdv'>
          
                <p>
                    Explore client feedback on our latest project 
                </p>

                <div>
        
           <img src='./left-arrow.svg' id='arrowrightcaro' 
           onClick={()=>{
              if(carotest<65){
                setcarotest(carotest+20)
              }else{
                setcarotest(0)
              }
              divRef.current.style.transform=`translateX(-${carotest}%)`;
              

          }}/>
           </div>
            </div>
           
            <div id='container3' ref={divRef}>
            <div  className='caro' >
               <img className='imagecaro' src='./modern.jpg'/>
               <p className='pcaro'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
               <div>
                <img className='userimagecaro' src='./pexels-andrew-personal-training-697509.jpg'/>
                <span className='nameusercaro'>arsene kolaya </span>
               </div>
            </div>
            <div  className='caro' >
               <img className='imagecaro' src='./modern.jpg'/>
               <p className='pcaro'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
               <div>
                <img className='userimagecaro' src='./person2.jpg'/>
                <span className='nameusercaro'>fernando tolea </span>
               </div>
            </div>
            <div  className='caro' >
               <img className='imagecaro' src='./modern.jpg'/>
               <p className='pcaro'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
               <div>
                <img className='userimagecaro' src='./person3.jpg'/>
                <span className='nameusercaro'>alberto machland </span>
               </div>
            </div>
            <div  className='caro' >
               <img className='imagecaro' src='./modern.jpg'/>
               <p className='pcaro'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
               <div>
                <img className='userimagecaro' src='./person4.jpg'/>
                <span className='nameusercaro'>rafa munier </span>
               </div>
            </div>
            <div  className='caro' >
               <img className='imagecaro' src='./modern.jpg'/>
               <p className='pcaro'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
               <div>
                <img className='userimagecaro' src='./person5.jpg'/>
                <span className='nameusercaro'>john doe </span>
               </div>
            </div>

            </div>
           
            
        </div>
    );
}

export default Testicaro;
