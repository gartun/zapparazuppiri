import { useState, useEffect } from "react";

const useStorage = () => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(JSON.parse(localStorage.getItem("taxno")) || []);
  }, []);

  return {numbers, setNumbers};
}

export default useStorage;