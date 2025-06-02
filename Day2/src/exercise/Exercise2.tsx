import { useState } from "react";

const Exercise2 = () => {
  const [pizza, setPizza] = useState({
    name: "Margherita",
    toppings: ["cheese", "tomato sauce"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "basil"] });
  };

  return (
    <div>
      <h2>{pizza.name}</h2>
      <ul>
        {pizza.toppings.map((topping, index) => (
          <li key={index}>{topping}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Add topping</button>
    </div>
  );
};

export default Exercise2;
