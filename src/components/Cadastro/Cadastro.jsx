import React, {useState, useRef} from 'react'
import './Cadastro.css'
import Circle from '../../images/form.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { motion } from "framer-motion"; 
import emailjs from '@emailjs/browser';


export const Cadastro = () => {

 
    const [validated, setValidated] = useState(false);
    const form = useRef();
    const [successMessage, setSuccessMessage] = useState(false);
    const inputRefs = {
        name: useRef(null),
        email: useRef(null),
        message: useRef(null),
    }
   

     function functionOne(){
            emailjs.sendForm('service_r6ek2j4', 'template_57qpqv3', form.current, 'qdvKZZ-KflbS-qgSK')
                .then((result) => {
                    setSuccessMessage(true);
                    
                    setTimeout(() =>{
                        setSuccessMessage(false)
                        Object.values(inputRefs).forEach((input) => {
                            input.current.value = '';
                        });
                    }, 5000);
                }, (error) => {
                    console.log(error.text);
                });
            }
    
           
        function handleSubmit (e){
            e.preventDefault();             
            
            const form = e.currentTarget;
                if (form.checkValidity() === false) {
                  e.preventDefault();
                  e.stopPropagation();
                
                } else{
                    functionOne();
                    setTimeout(() =>{
                      setValidated(false)
                    }, 5000);             
            
                }  
                
                setValidated(true); 
            
        }

       

  return (
    <section className="cadastro" id='cadastro'>
        <div className="container container-cadastro">
             <img src={Circle} alt="" />
             <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8}}
             className="container-form">
                <h1>Join Our Newsletter</h1>
                <Form ref={form} noValidate validated={validated} onSubmit={handleSubmit}   >
                    <Form.Group className="mb-3" controlId="validationCustom01">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required defaultValue="" type="text" name='user_name' placeholder="Enter your email"  ref={inputRefs.name}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required defaultValue="" name="user_email" type="email" placeholder="Enter a valid email adress"ref={inputRefs.email} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control name="message" required defaultValue="" as="textarea" type="text" placeholder="Enter your message" ref={inputRefs.message} />
                    </Form.Group>
    
                    <Button variant="primary" value="Send" type="submit">
                        SUBMIT
                    </Button>
                </Form>
                { successMessage && (
                <div className='ok' >
                    Email sent successfully!
                </div>
            )}
             </motion.div>            
        </div>
    </section>
  )
}

