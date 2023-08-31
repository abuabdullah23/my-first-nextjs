import wait from "../function/wait";

const getSingleProduct = async (id) => {
    await wait();
    const res = await fetch(`${process.env.BASE_API_URL}/products/${id}`, {
        cache: 'no-cache'
    });
    return res.json();
};

export default getSingleProduct;