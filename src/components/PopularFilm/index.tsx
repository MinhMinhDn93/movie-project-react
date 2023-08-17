import React from "react";
import useGetdata from "../../hooks/useGetdata";

const PopularFilm = () => {
  const { products, isLoading, fetchProducts } = useGetdata();

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>PopularFilm</h1>
      {isLoading && <div>Loading.....</div>}
      {products.map((product) => {
        return <li>{product.id}</li>;
      })}
    </div>
  );
};

export default PopularFilm;
