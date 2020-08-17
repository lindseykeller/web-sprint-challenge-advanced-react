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
  // const [value, setValue] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValue);


  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log("handle changes")
  };

  const handleSubmit = (e) => {
    console.log("submit")
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [ values, showSuccessMessage, handleChanges, handleSubmit];
};

export default useForm;
