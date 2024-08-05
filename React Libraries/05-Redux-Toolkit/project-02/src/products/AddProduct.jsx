import { useState } from "react";
import { useAddProductMutation } from "./productApi";

function AddProductForm() {
  const [addProduct, { isLoading }] = useAddProductMutation();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleAddProduct = async () => {
    try {
      await addProduct({ name: productName, price: productPrice }).unwrap();
      setProductName("");
      setProductPrice("");
    } catch (error) {
      console.error("Failed to add product: ", error);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <hr />
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Product Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <br />
      <button onClick={handleAddProduct} disabled={isLoading}>
        {isLoading ? "Adding..." : "Add Product"}
      </button>
      <hr />
    </div>
  );
}

export default AddProductForm;
