import React, { useState , useRef } from 'react';
import emailjs from '@emailjs/browser';
import supportImg from '../support.svg';
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

toast.configure()
const Support = () => {
    const [loading , setLoading] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)

        emailjs
          .sendForm('service_m3q93s9', 'template_ujzvhxb', form.current, {
            publicKey: 'user_RvJc8jGZHcvRhq2eLKKJf',
          })
          .then(
            () => {
                toast.info("Message submitted, support will contact you shortly!");
                setLoading(false)

            },
            (error) => {
                toast.warning("Something went wrong, Please try again in a while");
                setLoading(false)

            },
          );
      };
    
  return (
    <>
    <div className="container">
        <div className="row m-3">
            <div className="col-lg-6 d-block mx-auto" >
                <div className="card custom-support-card">
                    <h2 className='text-center mt-2 mb-4' >Contact Support</h2>
                    <img className='img-fluid rounded-pill mx-auto' src={supportImg} alt="" width={200}/>
                    <div className="card-body">
                    <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name*</label>
                        <input type="text" className="form-control" name="user_name" id="exampleFormControlInput11" placeholder="Enter name..." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email*</label>
                        <input type="email" className="form-control" name="user_email" id="exampleFormControlInput1" placeholder="Subject..." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message*</label>
                        <textarea className="form-control" name="message" id="exampleFormControlTextarea1" placeholder="Start here..." rows={5} defaultValue={""} />
                    </div>

                    <div className="d-grid gap-2 col-6 mx-auto mb-3">
                    <button className="btn btn-outline-info" value="Send" type="submit"
                    >
                        {loading === true ? "....": "Submit"}
                    
                    </button>
                    </div>
                    </form>
                
                    </div>

                  
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Support