import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../services/firebase";

function useCategories() {
  const [categories, setCategories] = useState([]);

  const fetchQueryCategories = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "categories"));
      const _cats = [];
      querySnapshot.forEach((doc) => {
        _cats.push(doc.data());
      });

      setCategories(_cats);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQueryCategories();
  }, []);

  return { categories };
}

export default useCategories;
