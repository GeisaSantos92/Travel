import React from 'react'
import './Grid.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GiCommercialAirplane } from 'react-icons/gi';
import { FaHotel } from 'react-icons/fa';
import { FaCarSide } from 'react-icons/fa';
import { MdDownhillSkiing } from 'react-icons/md';
import { TbMapSearch } from 'react-icons/tb';
import { GiCastle } from 'react-icons/gi';
import { FaCampground } from 'react-icons/fa';
import { GiMountainClimbing } from 'react-icons/gi';
import { MdDirectionsBike } from 'react-icons/md';
import { motion } from "framer-motion";


export const Grid = () => {
  return (
    <section className="grid">
        <div className="container container-grid">
            <Container>
                <Row>
                    <Col>
                        <motion.div 
                
                          initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5}}
                          whileHover={{ scale: 1.1 }}
                        className="container-cards">
                            <div className="container-svg">
                                 <GiCommercialAirplane />
                            </div>
                            <p>FLIGHTS</p>
                        </motion.div>
                    </Col>
                    <Col>
                        <motion.div
                       
                          initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5}}
                          whileHover={{ scale: 1.1 }}
                        className="container-cards">
                             <div className="container-svg">
                                <FaHotel/>
                            </div>
                            <p>HOTELS</p>
                        </motion.div>
                    </Col>
                    <Col>
                        <motion.div 
                        
                          initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5}}
                          whileHover={{ scale: 1.1 }}
                        className="container-cards">
                            <div className="container-svg">
                                <FaCarSide/>
                            </div>
                            <p>TRANSFERS</p>
                        </motion.div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                         <motion.div                   
                       
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5}}
                          whileHover={{ scale: 1.1 }}
                         className="container-cards">
                            <div className="container-svg">
                                <MdDownhillSkiing/>
                            </div>
                            <p>ACTIVITIES</p>
                        </motion.div>
                    </Col>
                    <Col>
                        <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5}}
                        whileHover={{ scale: 1.1 }}
                        className="container-cards">
                            <div className="container-svg">
                                <TbMapSearch/>
                            </div>
                            <p>HIKKING</p>
                        </motion.div>
                    </Col>
                    <Col>
                        <motion.div                         
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5}}
                        whileHover={{ scale: 1.1 }}
                        className="container-cards">
                            <div className="container-svg">
                                <GiCastle/>
                            </div>
                            <p>ATTRACTIONS</p>
                        </motion.div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <motion.div                         
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5}}
                        whileHover={{ scale: 1.1 }}
                        className="container-cards">
                            <div className="container-svg">
                                <FaCampground/>
                            </div>
                            <p>ADVENTURE</p>
                        </motion.div>
                    </Col>
                    <Col>
                        <motion.div                        
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5}}
                        whileHover={{ scale: 1.1 }}
                        className="container-cards">
                            <div className="container-svg">
                                <GiMountainClimbing/>
                            </div>
                            <p>CLIMBING</p>
                        </motion.div>
                    </Col>
                    <Col>
                     <motion.div                      
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5}}
                    whileHover={{ scale: 1.1 }}
                     className="container-cards">
                        <div className="container-svg">
                            <MdDirectionsBike/>
                        </div>
                            <p>CYCLING</p>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
  )
}
