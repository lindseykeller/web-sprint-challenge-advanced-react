// write your custom hook here to control your checkout form
import { useState } from "react";
// import { useLocalStorage } from "./useLocalStorage";

const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

const useForm = () => {
  const [cart, setCart] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValue);



  //add a plant to the cart
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

//   // remove a plant from the cart
  const removeFromCart = (plant) => {
    setCart(cart.filter((p) => p.id !== plant.id));
  };

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [cart, setCart];
};

export default useForm;
