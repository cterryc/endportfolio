import React, { useRef } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import { Jumbotron } from "./migration";
import emailjs from '@emailjs/browser';
import "../css/formulario.css";
import swal from "sweetalert";

const Leadership = ({ heading }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("esto es E", e.target[0].value)
    console.log("esto es E", e.target[1].value)
    console.log("esto es E", e.target[2].value)
    if (e.target[0].value === "" || e.target[1].value === "" || e.target[2].value === "") {
      return swal({
        title: "Completar",
        text: `Rellenar todos los campos`,
        icon: "warning",
        button: "Aceptar"
      })
    }
    emailjs.sendForm('service_0adwdjy', 'template_lctd95a', form.current, '_5ExaijvsWGq6P6Km')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    swal({
      title: "Correo enviado",
      text: `${e.target[1].value}`,
      icon: "success",
      button: "Aceptar"
    })
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  };
  return (
    <>
      <form id="contactame" ref={form} onSubmit={sendEmail} className="field">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        {/* <label>Name</label> */}
        <input id="name" type="text" name="user_name" placeholder="Name..." />
        {/* <label>Email</label> */}
        <input id="email" type="email" name="user_email" placeholder="Email..." />
        {/* <label>Message</label> */}
        <textarea id="message" name="message" placeholder="Message..." />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default Leadership;

/* <Jumbotron
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
    </Jumbotron> */