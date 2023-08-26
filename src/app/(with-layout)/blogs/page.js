import loadBlogsData from "@/utils/api/loadBlogsData";
import Link from "next/link";

export const metadata = {
    title: 'Blogs | My First Next Js',
    description: 'My First Next Js',
}
const BlogsPage = async () => {
    // const blogs = [
    //     {
    //         id: 1,
    //         year: 2016,
    //         title: 'Title 1'
    //     },
    //     {
    //         id: 2,
    //         year: 2017,
    //         title: 'Title 2'
    //     },
    //     {
    //         id: 3,
    //         year: 2018,
    //         title: 'Title 3'
    //     },
    //     {
    //         id: 4,
    //         year: 2019,
    //         title: 'Title 4'
    //     },
    //     {
    //         id: 5,
    //         year: 2020,
    //         title: 'Title 5'
    //     },
    //     {
    //         id: 6,
    //         year: 2021,
    //         title: 'Title 6'
    //     },
    // ]

    const blogs = await loadBlogsData();

    return (
        <div className="container mx-auto">
            <h1>Blogs Page</h1>
            <div>
                {
                    blogs.map(({ id, title }) =>
                        <div
                            key={id}
                            className="my-3 p-2 border border-gray-500 hover:bg-gray-100 rounded-md transition"
                        >
                            <h3 className="text-lg font-semibold">{id}. {title}</h3>
                            <Link
                                // href={{
                                //     pathname: `/blogs/${id}`,
                                //     query: {
                                //         title: title
                                //     }
                                // }}
                                className="inline-block mt-3"
                                href={`/blogs/${id}`}
                            >
                                <button className="hover:text-blue-100 bg-blue-500 text-white py-1 px-2 rounded-md">Details</button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BlogsPage;