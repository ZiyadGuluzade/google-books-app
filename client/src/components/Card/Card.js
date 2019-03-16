import React from "react";

const Card = props => (
  <div className="card mt-4">
    <div className="card-header">
      <h3>
        {props.title}
      </h3>
    </div>
    <div className="card-body">{props.children}</div>
  </div>
);

export default Card;
