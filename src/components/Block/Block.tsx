import React, { ReactNode } from "react";
interface BlockProps {
  children: ReactNode;
  heading: string;
  caption: string;
}
const Block = (props: BlockProps) => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center mb-5">
            <span className="subheading">{props.heading}</span>
            <h2 className="mb-2">{props.caption}</h2>
          </div>
        </div>
        <div className="row d-flex">{props.children}</div>
      </div>
    </section>
  );
};

export default Block;
