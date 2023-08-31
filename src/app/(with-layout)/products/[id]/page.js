/* eslint-disable @next/next/no-img-element */
import getSingleProduct from "@/utils/fetched-data/getSingleProduct";

const SingleProductPage = async ({ params }) => {
    const product = await getSingleProduct(params.id);
    const { title, price, imageUrl } = product;
    return (
        <div>
            <img
                className="h-64"
                src={imageUrl} alt="Product Image" />
            <h2 className="text-xl font-bold">{title}</h2>
            <p>Price: ${price}</p>

        </div>
    );
};

export default SingleProductPage;