import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {

  let valorUno = (data.role === "Henry Bootcamp") ? 320 : 180
  let valorDos = (data.role === "Henry Bootcamp") ? 80 : 90
  
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img width={valorUno} height={valorDos} className=" bg-white mb-3" src={data.companylogo} alt="" />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;