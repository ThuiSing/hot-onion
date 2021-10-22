import { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("/foodItems.json");
      const data = await res.json();
      setItems(data);
      //   setNewItems(data);
    };
    fetchdata();
  }, []);

  return [items, setItems];
};

export default useItems;
