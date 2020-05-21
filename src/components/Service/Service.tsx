import React from "react";

interface ServiceProps {
  icon: string;
  title: string;
  message: string;
}
const Service = (props: ServiceProps) => {
  return (
    <div className="col-md-6 col-lg-3 d-flex align-self-stretch">
      <div className="media block-6 services d-block text-center">
        <div className="icon d-flex justify-content-center align-items-center">
          <span className={props.icon}></span>
        </div>
        <div className="media-body py-md-4">
          <h3>{props.title}</h3>
          <p>
            {props.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
