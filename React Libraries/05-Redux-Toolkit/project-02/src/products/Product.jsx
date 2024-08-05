import { useState } from "react";
import { useGetProductQuery } from "./productApi";

export default function Product() {
  const [id, setId] = useState(1);
  const { data, isSuccess } = useGetProductQuery(id);

  function generateRandomNumber() {
    const number = Math.floor(Math.random() * 30) + 1;
    setId(number);
  }
  if (isSuccess) {
    const { title, description, images } = data;
    return (
      <div>
        <img className="product-image" src={images[0]} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={generateRandomNumber}>New Product</button>
      </div>
    );
  }
}
