import Link from "next/link";

export const metadata = {
    title: 'Blogs | My First Next Js',
    description: 'My First Next Js',
}
const BlogsPage = () => {
    const blogs = [
        {
            id: 1,
            year: 2016,
            title: 'Title 1'
        },
        {
            id: 2,
            year: 2017,
            title: 'Title 2'
        },
        {
            id: 3,
            year: 2018,
            title: 'Title 3'
        },
        {
            id: 4,
            year: 2019,
            title: 'Title 4'
        },
        {
            id: 5,
            year: 2020,
            title: 'Title 5'
        },
        {
            id: 6,
            year: 2021,
            title: 'Title 6'
        },
    ]
    return (
        <div className="container mx-auto">
            <h1>Blogs Page</h1>
            <div>
                {
                    blogs.map(({ id, year, title }) =>
                        <Link
                            href={{
                                pathname: `/blogs/${year}/${id}`,
                                query: {
                                    title: title
                                }
                            }}
                            key={id}
                            className="block my-3 p-2 border border-gray-500 hover:bg-gray-200"
                        >
                            {title}
                        </Link>)
                }
            </div>
        </div>
    );
};

export default BlogsPage;