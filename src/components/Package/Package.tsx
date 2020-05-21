import React from "react";

interface PackageInstructionsProps {
    text: string;
}

interface Packageprops {
  amount: number;
  title: string;
  instructions: Array<PackageInstructionsProps>;
}

const Package = (props: Packageprops) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="block-7">
        <div className="text-center">
          <span className="price">
            <sup>$</sup> <span className="number">{props.amount}</span>{" "}
            <sub>/mo</sub>
          </span>
          <span className="excerpt d-block">{props.title}</span>
          <ul className="pricing-text mb-5">
            { props.instructions.map(instru => (
                <li>
                    <span className="fa fa-check mr-2"></span>{instru.text}
                </li>
            ))}
          </ul>

          <a href="#" className="btn btn-primary d-block px-2 py-2">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Package;
