import React from 'react'
import './WithUs.css'
import Img from '../../images/ImgTravelWith.png'
import { motion } from "framer-motion";

export const WithUs = () => {
  return (
    <section className="with">
        <div className="container container-with">
            <img src={Img} alt="" />
            <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8}}
            className="modal-card">
                <h1>Travel With Us</h1>
                <p>
                    Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                </p>
                <button className='btn-card'>read more</button>
            </motion.div>
        </div>
    </section>
  )
}
