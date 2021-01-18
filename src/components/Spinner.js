import React from "react";

const Spinner = () => {
  return (
    <div className="container min-w-screen min-h-screen flex justify-center items-center ">
      <div className="three col">
        <div className="loader" id="loader-2">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
