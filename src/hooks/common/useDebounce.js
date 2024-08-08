import React from 'react'
import { useRef, useEffect } from "react";

const useDebounce = (func, delay) => {
   let timer=useRef(null);

const debounceFunction = (...args)=>{
  clearTimeout(timer.current);
  timer.current=setTimeout(()=>{
func(...args);



  },delay);
};

useEffect(()=>{
  return()=>{
    clearTimeout(timer.current);
  };
},[]);

return debounceFunction;

  
}

export default useDebounce;


