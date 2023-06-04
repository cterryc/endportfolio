import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {

  let valor = (data.role === "Henry Bootcamp") ? 400 : 230
  
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img width={valor} height={100} className=" bg-white mb-3" src={data.companylogo} alt="" />
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