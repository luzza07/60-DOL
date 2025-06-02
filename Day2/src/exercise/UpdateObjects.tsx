import  { useState } from "react";

const UpdateObjects = () => {
  const [drink, setDrink] = useState({
    title: "apple juice",
    price: 50,
  });

  const handleClick = () => {
    
    setDrink({...drink,price:60}); 
  }
    
  return <div>{drink.price}
    <button onClick={handleClick}>Update Drink</button>
  </div>;
};

export default UpdateObjects;
