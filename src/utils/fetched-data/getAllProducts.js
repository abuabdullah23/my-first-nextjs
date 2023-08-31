const getAllProducts = async (categoryId) => {
    let url = `${process.env.BASE_API_URL}/products`;

    if(categoryId){
        url+= '?categoryId='+ categoryId;
    }

    const res = await fetch(url, {
        cache: 'no-cache'
    });
    return res.json();
 };
 
 export default getAllProducts;