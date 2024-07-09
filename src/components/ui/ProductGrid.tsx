// components/ProductGrid.jsx
import ProductCard from "./ProductCard";

const ProductGrid = ({
  products,
  sidebarVisible,
}: {
  products: any;
  sidebarVisible: any;
}) => {
  return (
    <div
      className={`grid gap-4 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-4 
      px-6
      lg:${sidebarVisible ? "grid-cols-4" : "grid-cols-5"} 
      xl:${sidebarVisible ? "grid-cols-4" : "grid-cols-5"}`}
    >
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
