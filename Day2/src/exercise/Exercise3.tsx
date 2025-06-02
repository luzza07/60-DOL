import { useState } from "react";

const Exercise3 = () => {
  const [cart, setCart] = useState({
    items: [
      { id: 1, title: "Product 1", quantity: 2 },
      { id: 2, title: "Product 2", quantity: 3 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Increase Quantity of Product 1</button>
    </div>
  );
};

export default Exercise3;
