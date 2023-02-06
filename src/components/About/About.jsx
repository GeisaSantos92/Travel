import React, {useEffect, useRef} from 'react'
import './About.css'
import NumberCounter from 'number-counter';

export const About = () => {



  return (
    <section className='about' id='about'>
        <div className="container container-about" >
            <div className='about-left'>
                <span>about us</span>
               <div className="title-about">
                    <h1>Working with a</h1>
                    <h1>reputable travel agent</h1>
                    <h1>takes the stress out of</h1>
                    <h1>travel</h1>
               </div>
                <span>WORKING WITH A REPUTABLE TRAVEL AGENT </span> <br />
                <span>TAKES THE STRESS OUT OF TRAVEL</span>
            </div>
            <div className='about-right'>
                <p>
                    Everything that can be necessary to create and manage new projects (startups) 
                    in modern conditions. From development of concept, business plan and project 
                    management plan, to marketing strategy and tactics, as well as the system of 
                    customer attraction via the Internet and sales system.
                </p>
                <div className="numbers">
                    <div className="number-1" >
                        <NumberCounter end={50} delay={30} className="number-2" postFix="%"/>
                        <span>
                            Sample text. Click to select the 
                            text box. Click again or double click to start editing the text.
                        </span>
                    </div>
                    <div className="number-1" >
                        <NumberCounter start={30} end={99} delay={30} className="number-2" postFix="%"/>
                        <span>
                            Sample text. Click to select the 
                            text box. Click again or double click to start editing the text.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
