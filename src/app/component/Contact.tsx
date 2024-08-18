import React from 'react';
import './Contact.css'

const Contact = () => {
    return (

        <div id='contactsection'>
            <img src='./featured-image-interior-design.webp' id='backcpntact' />
            <div id='contactcontainer'>
                <h2>CONTACT US</h2>

                <form >

                    <div className="group">
                        <img src='user(2).png' className='icon'/>
                        <input className="input" type="text" placeholder="FULL NAME" />
                    </div>
                    <div className="group">
                       <img src='./phone-call(2).png' className='icon'/>
                        <input className="input" type="tel" placeholder="ENTER YOUR PHONE NUMBER" />
                    </div>
                    <div className="group">
                       <img src='./mail.png' className='icon'/>
                        <input className="input" type="text" placeholder="ENTER YOUR EMAIL" />
                    </div>
                    <div className="group">
                       <img src='./writing.png' className='icon'/>
                        <textarea className="input"  placeholder="Your Message" />
                    </div>
                    <div id="contactbtn">
                        ENVOYER

                    </div>
                </form>

            </div>
        </div>

    );
}

export default Contact;
