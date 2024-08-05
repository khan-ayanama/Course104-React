import AddProductForm from "./products/AddProduct";
import Product from "./products/Product";
import Products from "./products/Products";
import Users from "./users/Users";

export default function App() {
  return (
    <>
      <Users />
      <Product />
      <AddProductForm />
      <h2>Application</h2>
      <Products />
    </>
  );
}
