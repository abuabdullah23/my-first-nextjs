'use client'

const AddProductsForm = ({ products } ) => {

    // Handle Add New Product
    const handleAddProduct = async (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const categoryId = form.categoryId.value;
        const category = form.category.value;
        const imageUrl = form.imageUrl.value;

        const product = {
            id: products.length += 1,
            title,
            price,
            categoryId,
            category,
            imageUrl
        }
        console.log(product);


        // ${process.env.BASE_API_URL}
        try {
            const res = await fetch("http://localhost:5000/products", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(product)
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await res.json();
            form.reset();
            console.log(result);
        } catch (error) {
            console.error("Error during POST request:", error);
        }

    }

    return (
        <div>
            <form onSubmit={handleAddProduct}>
                <div>
                    <p>Products Name</p>
                    <input
                        className='w-full mb-2 p-2 focus:outline-none border rounded-md'
                        type="text"
                        placeholder='Products Name'
                        name='title'
                    />
                </div>
                <div>
                    <p>Products Price</p>
                    <input
                        className='w-full mb-2 p-2 focus:outline-none border rounded-md'
                        type="number"
                        placeholder='Price'
                        name='price'
                    />
                </div>
                <div>
                    <p>Products Image Url</p>
                    <input
                        className='w-full mb-2 p-2 focus:outline-none border rounded-md'
                        type="text"
                        placeholder='Paste Products Image Url'
                        name='imageUrl'
                    />
                </div>
                <div>
                    <p>Category Id</p>
                    <input
                        className='w-full mb-2 p-2 focus:outline-none border rounded-md'
                        type="number"
                        placeholder='Category Id'
                        name='categoryId'
                    />
                </div>
                <div>
                    <p>Category</p>
                    <input
                        className='w-full mb-2 p-2 focus:outline-none border rounded-md'
                        type="text"
                        placeholder='Category'
                        name='category'
                    />
                </div>
                <button type='submit' className='py-1 px-3 rounded-md bg-gray-300 hover:bg-gray-200 mt-3'>Add Product</button>
            </form>
        </div>
    );
};

export default AddProductsForm;