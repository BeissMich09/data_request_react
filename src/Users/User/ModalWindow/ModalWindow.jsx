import React from "react";

const ModalWindow = (props) => {
  const { city, state, streetAddress, zip } = props.address;

  return (
    <div>
      <p>{props.description}</p>
      <p>{`${city} ${state} ${streetAddress} ${zip}`}</p>
    </div>
  );
};

export default ModalWindow;
