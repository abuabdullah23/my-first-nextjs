import getAllCategories from "@/utils/api/getAllCategories";
import SingleCategory from "./SingleCategory";

const Categories = async () => {
    const categories = await getAllCategories();
    return (
        <div>
            <h1>Categories</h1>
            <div className="flex items-center gap-3">
                {
                    categories.map((category) => <SingleCategory
                        key={category.id}
                        category={category}
                    />)
                }
            </div>
        </div>
    );
};

export default Categories;