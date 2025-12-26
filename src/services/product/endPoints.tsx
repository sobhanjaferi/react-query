import axios from "axios";

export async function getProduct() {
  const { data } = await axios("https://fakestoreapi.com/products");

  return data;
}
