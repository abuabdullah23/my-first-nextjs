import getAllProducts from "@/utils/api/getAllProducts";
import ManageProducts from "./ManageProducts";

export const metadata = {
    title: 'Manage Product | Dashboard | My First Next Js',
    description: 'My First Next Js',
}

// get all products for manage products in dashboard
const ManageProductPage = async () => {
    const products = await getAllProducts();

    return (
        <div className="w-full">
            <h2 className="text-2xl font-semibold mb-4">Manage Products</h2>
            <ManageProducts products={products} />
        </div>
    );
};

export default ManageProductPage;