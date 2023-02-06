import React from 'react'
import './Travel.css';
import Travels from '../../images/travel.png'
import { motion } from "framer-motion";

export const Travel = () => {
  return (
    <section className="travel">
        <div className="container container-travel">                
            <div className="cards">
                <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8}}
                src={Travels} alt="" />
                <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5}}
                className="box-cards">
                    <h1>Travel with us</h1>
                    <div className="txt-cards">
                    Duis aute irure dolor in reprehenderit in  <br />
                    voluptate velit esse cillum dolore eu fugiat <br />
                    nulla pariatur. Excepteur sint occaecat cupidatat  <br />
                    non proident, sunt in culpa qui officia deserunt  <br />
                    mollit anim id est laborum.
                    </div>
                    <button className='btn-card'>learn more</button>
                </motion.div>
            </div>
        </div>
    </section>
  )
}
