import { useGetProductsQuery } from "./productApi";

export default function Products() {
  const { data, isSuccess, isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;
  if (isSuccess) {
    const products = data.products;

    return products.map((product) => (
      <div className="product" key={product.id}>
        <img
          className="product-image"
          src={product.images[0]}
          alt={product.title}
        />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
    ));
  }
}
