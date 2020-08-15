// import { useState } from "react";

// // setup state property, just like we do with useState
// // capture values
// // if there is localStorage data, use that, else use initial data
// // update localStorage when needed
// // Don't forget to:
// //   1. parse data from localStorage (JSON.parse)
// //   2. stringify new data before storing it (JSON.stringify)

// export const useLocalStorage = (key, initialValue) => {
//   const [storedValue, setStoredValue] = useState(() => {
//     // branching logic to define the initial value, reading from localStorage if it's there
//     if (window.localStorage.getItem(key)) {
//       // is the key already in local storage?
//       return JSON.parse(window.localStorage.getItem(key)); // if so, return it
//     }
//     // otherwise, use the initial value passed in
//     window.localStorage.setItem(key, JSON.stringify(initialValue));
//     return initialValue;
//   });
//   // the whole block above ^ is just defining the init value for useState

//   const setValue = (value) => {
//     // implement localStorage write functionality
//     setStoredValue(value);
//     window.localStorage.setItem(key, JSON.stringify(value));
//   };

//   return [storedValue, setValue];
// };
