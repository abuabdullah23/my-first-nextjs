import getAllProducts from "@/utils/api/getAllProducts";
import SingleProduct from "./SingleProduct";

const ProductsPage = async ({ searchParams }) => {
    const products = await getAllProducts(searchParams.categoryId)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {
                products.map((product) => <SingleProduct
                    key={product.id}
                    product={product}
                />)
            }
        </div>
    );
};

export default ProductsPage;