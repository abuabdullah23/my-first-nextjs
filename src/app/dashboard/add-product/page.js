import getAllProducts from "@/utils/api/getAllProducts";
import AddProductsForm from "./AddProductsForm";

export const metadata = {
    title: 'Add Product | Dashboard | My First Next Js',
    description: 'My First Next Js',
  }
const AddProductPage = async () => {

    const products = await getAllProducts();

    return (
        <div className="w-full">
             <h2 className="text-2xl font-semibold mb-4">Add new product Page</h2>
            <AddProductsForm products={products}/>
        </div>
    );
};

export default AddProductPage;