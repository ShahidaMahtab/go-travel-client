import React from "react";

const Title = ({ titleStart, titleEnd, smallTitle }) => {
  return (
    <div className="text-center">
      <p className="mb-1 text-center text-secondary fw-bold">
        <small className="">{smallTitle}</small>
      </p>
      <h2 className="text-center mb-4 fw-bold text-capitalize">
        {titleStart} <span className="mainText ">{titleEnd}</span>
      </h2>
    </div>
  );
};

export default Title;
