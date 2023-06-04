import React, { useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";
import emailjs from '@emailjs/browser';
import "../css/formulario.css";

const Leadership = ({ heading, message, img, imageSize }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      {/* <Jumbotron
      id="contactame"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="row">
        <div className="col-md-5">
          <p className="lead">{message}</p>
        </div>
        <div className="col-md-7">
          <Carousel>
            {img.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={value.img}
                    alt="First slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                  <Carousel.Caption>
                    <h3>{value.label}</h3>
                    <p>
                      {value.paragraph}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Jumbotron> */}
      <form id="contactame" ref={form} onSubmit={sendEmail} className="field">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        {/* <label>Name</label> */}
        <input type="text" name="user_name" placeholder="Name..." />
        {/* <label>Email</label> */}
        <input type="email" name="user_email" placeholder="Email..." />
        {/* <label>Message</label> */}
        <textarea name="message" placeholder="Message..."/>
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default Leadership;
