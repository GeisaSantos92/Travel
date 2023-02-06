import React from 'react'
import './News.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img1 from '../../images/img1.jpg'
import Img2 from '../../images/img2.jpg'
import Img3 from '../../images/img3.jpg'
import { easeIn, motion } from "framer-motion";

export const News = () => {
  return (
    <section className="news" id='news'>
        <div className="container container-news">
                <motion.h1 
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                  whileHover={{ scale: 1.2 }}
                >Latest News</motion.h1>

                <div className="grid-news">
                    <Container>
                        <Row>
                            <Col className='news-grid'> 
                               <div className="fundo">
                                    <motion.img
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: easeIn}}
                                    src={Img1} alt="" />
                                    <p className='black'>POST 1 HEADLINE</p>
                                    <p>Fri Jun 19 2020 | Comments (0)</p>
                               </div>
                            </Col>
                            <Col className='news-grid'>
                                <div className="fundo">
                                    <motion.img 
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: easeIn}}
                                    src={Img2} alt="" />
                                    <p className='black'>POST 1 HEADLINE</p>
                                    <p>Fri Jun 19 2020 | Comments (0)</p>
                               </div>
                            </Col>
                            <Col className='news-grid'>
                                <div className="fundo">
                                    <motion.img 
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: easeIn}}
                                    src={Img3} alt="" />
                                    <p className='black'>POST 1 HEADLINE</p>
                                    <p>Fri Jun 19 2020 | Comments (0)</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <button className='btn-news'>learn more </button>
        </div>
    </section>
  )
}
