// write your custom hook here to control your checkout form
import { useLocalStorage } from "./useLocalStorage";


const useForm = (initialValues, cb) => {
  const [values, setValues] = useState('');

//   const handleChanges = (e) => {
//     console.log(e.target.name, e.target.value);
//     setValues({
//       ...values,
//       [e.target.name]: e.target.value
//     });
//   };

  // add a plant to the cart
//   const addToCart = (plant) => {
//     setCart([...cart, plant]);
//   };

//   // remove a plant from the cart
//   const removeFromCart = (plant) => {
//     setCart(cart.filter((p) => p.id !== plant.id));
//   };

  return [values, setValues];
};

export default useForm;
