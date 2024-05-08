import { useGetProductsQuery } from "./productSlice";

const ProductList = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery();

  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  if (isError) {
    throw new Error(error);
  }

  if (isSuccess) {
    return data.products.map((product) => (
      <div key={product.id}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <hr />
      </div>
    ));
  }
};

export default ProductList;
