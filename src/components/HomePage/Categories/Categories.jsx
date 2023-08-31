import getAllCategories from "@/utils/fetched-data/getAllCategories";
import SingleCategory from "./SingleCategory";

const Categories = async () => {
    const categories = await getAllCategories();
    return (
        <div>
            <h1>Categories</h1>
            <div className="lg:flex items-center lg:gap-6">
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