import {React, useEffect, useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from "../../constants/pages";

import "./contact.scss";
import fetchData from "../../constants/fetchData";
export const Contact = ({SocialMedia}) => {
  const [Information, setInformation] = useState([])
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [errors, seterrors] = useState({})

  useEffect(() => {
    fetchData().then((res)=> setInformation(res.data.Information))
  }, [])
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    let errorsData = {}
    seterrors({})
    if (!name) {
      errorsData.name = "Name is requiered"
    }

    if (!email) {
      errorsData.email = "Email is requiered"
    }

    if (!message) {
      errorsData.message = "Message is requiered"
    }

    seterrors(errorsData)

    if (Object.keys(errorsData).length === 0) {
      emailjs.sendForm('service_pb9dh92', 'template_rqqhe92', form.current, '0rGElvJZ7SrDltwk9')
      .then((result) => {
          console.log(result.text);
          toast.success('Message send succesfuly', {
              style: {
                border: '1px solid rgb(255, 180, 0)',
                padding: '16px',
                color: '#ffffff',
                background : 'rgb(24, 24, 24)',
                borderRadius : '20px'
              },
              iconTheme: {
                primary: 'rgb(255, 180, 0)',
                secondary: 'rgb(24, 24, 24)',
              },
          });
          setname('')
          setemail('')
          setmessage('')
          seterrors({})
      }, (error) => {
          console.log(error);
          toast.error("Message not sended", {
            style: {
              border: '1px solid rgb(255, 180, 0)',
              padding: '16px',
              color: '#ffffff',
              background : 'rgb(24, 24, 24)',
              borderRadius : '20px'
            },
            iconTheme: {
              primary: 'rgb(255, 180, 0)',
              secondary: 'rgb(24, 24, 24)',
            },
          });
      });
    }
  };
  return (
    <section id="Contact" className="pt-5 pb-3">
      <Toaster />
      <div className="container container-sm container-lg container-xl container-xxl">
        <main className="d-flex flex-column justify-content-md-center align-items-center">
          <h1 className="col-12 text-center">Contact ME</h1>
          <div className="content d-flex flex-column flex-lg-row py-5 align-items-center col-12">
            
            <div className="information d-flex flex-column row justify-content-between col-12 col-lg-5">

              {Information?.map((item, index) => (
                <div key={index} className="col-12 mb-4">

                  <div className="info-box d-flex">

                    <div className="col-2 col-xl-3 d-flex align-items-start justify-content-start justify-content-sm-center justify-content-lg-start justify-content-xl-center">
                      <i style={{fontSize : "33px"}} className={item.icon}></i>
                    </div>

                    <div className="info col-10 col-md-9">
                      <p className="header mb-1">{item.key}</p>
                      <p className="text mb-0">{item.value}</p>
                    </div>

                  </div>

                </div>
              ))}

              <div className="comptes col-12 d-flex d-xl-none justify-content-center justify-content-lg-start">
                {SocialMedia?.map((item, index) => (
                  <div key={index} className="compte">
                    <a href={item.lien}>
                      <i className={`fa-brands ${item.icon}`}></i>
                    </a>
                  </div>
                ))}
              </div>

            </div>

            <div className="form-contact mt-5 col-12 col-lg-7">
              <form ref={form} onSubmit={sendEmail} className="d-flex flex-column">

                <div className="col-12">
                    <input
                      type="text"
                      className={`col-12 ${errors?.name ? 'error' : ''}`}
                      placeholder="You Name"
                      name="user_name"
                      onChange={(e)=> setname(e.target.value)}
                    />
                    {
                      errors?.name && <p className="mt-1 mb-0 text-danger ms-4">{errors.name}</p>
                    }
                </div>

                <div className="col-12">
                    <input
                      type="email"
                      className={`col-12 ${errors?.email ? 'error' : ''}`}
                      name="user_email"
                      placeholder="Your Email"
                      onChange={(e)=> setemail(e.target.value)}
                    />
                    {
                      errors?.email && <p className="mt-1 mb-0 text-danger ms-4">{errors.email}</p>
                    }
                </div>

                <div className="col-12">
                  <textarea
                    rows={9}
                    name="message"
                    className={`col-12 ${errors?.message ? 'error' : ''}`}
                    placeholder="Your message"
                    onChange={(e)=> setmessage(e.target.value)}
                  />
                  {
                    errors?.message && <p className="mt-1 mb-0 text-danger ms-4">{errors.message}</p>
                  }
                </div>

                <div className="col-12 col-sm-10 col-md-8 col-lg-9 col-xl-6">
                  <Button children={"Send Message"} />
                </div>

              </form>
            </div>

          </div>
        </main>
      </div>
    </section>
  );
};
