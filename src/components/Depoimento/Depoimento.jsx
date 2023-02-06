import React, { useRef, useState } from "react";
import './Depoimento.css'
import Montain from '../../images/montain.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import { Pagination } from "swiper";
import { motion } from "framer-motion";

export const Depoimento = () => {
  return (
    <section className="depoimento" id="depoimento">         
            <div className="conteudo-depo">
                    <div className="left-color">
                        <div className="color-rose"></div>
                    </div>
                    <div className="right-color">
                        <div className="white-color"></div>
                        <div className="blue-color"></div>
                    </div>
            </div>        

            <div className="container container-depoimento">
                <motion.img 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8}}
                src={Montain} alt="" />

                <div className='carousel'>
                <Swiper
                pagination={{
                dynamicBullets: true
                }}
                modules={[Pagination]}
                spaceBetween={50}
                autoplay={true}
                className="mySwiper"
                breakpoints={{
                    425: {
                        slidesPerView: 1,
                      },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 2,
                      },
                    1440: {
                        slidesPerView:3,
                    },
                  }}
                >
                    <SwiperSlide>
                        <div className="green-card">
                            <h2>Do something fun</h2>
                            <p>
                            Auctor eu augue ut lectus arcu. Sit 
                            amet tellus cras adipiscing. Malesuada 
                            proin libero nunc consequat interdum. 
                            Urna porttitor rhoncus dolor purus non 
                            enim praesent elementum.
                            </p>
                            <button className='btn-card btn-card2'>read more</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="green-card">
                            <h2>Do something fun</h2>
                            <p>
                            Auctor eu augue ut lectus arcu. Sit 
                            amet tellus cras adipiscing. Malesuada 
                            proin libero nunc consequat interdum. 
                            Urna porttitor rhoncus dolor purus non 
                            enim praesent elementum.
                            </p>
                            <button className='btn-card btn-card2'>read more</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="green-card">
                            <h2>Do something fun</h2>
                            <p>
                            Auctor eu augue ut lectus arcu. Sit 
                            amet tellus cras adipiscing. Malesuada 
                            proin libero nunc consequat interdum. 
                            Urna porttitor rhoncus dolor purus non 
                            enim praesent elementum.
                            </p>
                            <button className='btn-card btn-card2'>read more</button>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="green-card">
                            <h2>Do something fun</h2>
                            <p>
                            Auctor eu augue ut lectus arcu. Sit 
                            amet tellus cras adipiscing. Malesuada 
                            proin libero nunc consequat interdum. 
                            Urna porttitor rhoncus dolor purus non 
                            enim praesent elementum.
                            </p>
                            <button className='btn-card btn-card2'>read more</button>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="green-card">
                            <h2>Do something fun</h2>
                            <p>
                            Auctor eu augue ut lectus arcu. Sit 
                            amet tellus cras adipiscing. Malesuada 
                            proin libero nunc consequat interdum. 
                            Urna porttitor rhoncus dolor purus non 
                            enim praesent elementum.
                            </p>
                            <button className='btn-card btn-card2'>read more</button>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="green-card">
                            <h2>Do something fun</h2>
                            <p>
                            Auctor eu augue ut lectus arcu. Sit 
                            amet tellus cras adipiscing. Malesuada 
                            proin libero nunc consequat interdum. 
                            Urna porttitor rhoncus dolor purus non 
                            enim praesent elementum.
                            </p>
                            <button className='btn-card btn-card2'>read more</button>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="green-card">
                            <h2>Do something fun</h2>
                            <p>
                            Auctor eu augue ut lectus arcu. Sit 
                            amet tellus cras adipiscing. Malesuada 
                            proin libero nunc consequat interdum. 
                            Urna porttitor rhoncus dolor purus non 
                            enim praesent elementum.
                            </p>
                            <button className='btn-card btn-card2'>read more</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="green-card">
                            <h2>Do something fun</h2>
                            <p>
                            Auctor eu augue ut lectus arcu. Sit 
                            amet tellus cras adipiscing. Malesuada 
                            proin libero nunc consequat interdum. 
                            Urna porttitor rhoncus dolor purus non 
                            enim praesent elementum.
                            </p>
                            <button className='btn-card btn-card2'>read more</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="green-card">
                            <h2>Do something fun</h2>
                            <p>
                            Auctor eu augue ut lectus arcu. Sit 
                            amet tellus cras adipiscing. Malesuada 
                            proin libero nunc consequat interdum. 
                            Urna porttitor rhoncus dolor purus non 
                            enim praesent elementum.
                            </p>
                            <button className='btn-card btn-card2'>read more</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div> 
            </div>
    </section>
  )
}
