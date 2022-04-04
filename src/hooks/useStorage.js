import { useState, useEffect } from "react";

const useStorage = () => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(JSON.parse(localStorage.getItem("newtaxno")) || []);
  }, []);

  return {numbers, setNumbers};
}

export default useStorage;