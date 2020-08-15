// write your custom hook here to control your checkout form
import { useState } from "react";


const useForm = () => {
  const [cart, setCart] = useState([]);



  //add a plant to the cart
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

//   // remove a plant from the cart
  const removeFromCart = (plant) => {
    setCart(cart.filter((p) => p.id !== plant.id));
  };

  return [cart, setCart];
};

export default useForm;
