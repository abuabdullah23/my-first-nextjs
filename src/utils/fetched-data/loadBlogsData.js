const loadBlogsData = async () => {
    // Data fetching in next.js
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: "force-cache",
    });
    return res.json();
};

export default loadBlogsData;