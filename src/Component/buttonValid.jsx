import React from "react";
const ButtonValid = ({ value, onMinus, onPlus }) => {
  return (
    <>
      <button onClick={onMinus} className="btn btn-warning">
        <i className="bi bi-dash-lg"></i>
      </button>
      <span className="m-3">{value}</span>
      <button onClick={onPlus} className="btn btn-warning ">
        <i className="bi bi-plus-lg"></i>
      </button>
    </>
  );
};

export default ButtonValid;
