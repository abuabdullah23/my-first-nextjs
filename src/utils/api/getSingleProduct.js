const getSingleProduct = async (id) => {
    const res = await fetch(`${process.env.BASE_API_URL}/products/${id}`, {
        cache: 'no-cache'
    });
    return res.json();
};

export default getSingleProduct;