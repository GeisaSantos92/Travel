import React from 'react'
import { Bar } from '../Bar/Bar'
import './Header.css'
import { motion } from "framer-motion";


export const Header = () => {
  return (
        <header className='header'>
           
            <motion.div 
            whileInView={{ x: [50, 150, 0], opacity: 1, scale: 1 }}
            transition={{
                duration: 5,
                delay: 0.3,
                ease: [0.5, 0.71, 1, 1.5],
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.2 }}
            className="container container-header ">
                <h2>IN NATURE, NOTHING IS PERFECT</h2>
                <h1>and everything is perfect</h1>
            </motion.div>
        </header>
  )
}
