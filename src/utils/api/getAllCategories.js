const getAllCategories = async () => {
   const res = await fetch(`${process.env.BASE_API_URL}/categories`, {
    next:{
        revalidate: 5
    }
   });
   return res.json();
};

export default getAllCategories;