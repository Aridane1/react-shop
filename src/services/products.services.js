import { get, ref } from "firebase/database";
import database from "../firebase";

const productsRef = ref(database, "/products");

const getAllProducts = () => {
  return get(productsRef);
};

export default { getAllProducts };
