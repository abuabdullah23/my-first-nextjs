const getAllCategories = async () => {
   const res = await fetch(`${process.env.BASE_API_URL}/categories`, {
    cache: 'force-cache'
   });
   return res.json();
};

export default getAllCategories;