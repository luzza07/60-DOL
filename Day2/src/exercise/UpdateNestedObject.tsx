import React, { useState } from "react";

const UpdateNestedObject = () => {
  const [customer, setCustomer] = useState({
    name: "Rocky",
    address: {
      city: "Delhi",
      zipCode: 110001,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 110002 },
    });
  };
  return (
    <div>
      <button onClick={handleClick}>CLick</button>
    </div>
  );
};

export default UpdateNestedObject;
