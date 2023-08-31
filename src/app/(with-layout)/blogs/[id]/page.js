import loadBlogsData from "@/utils/fetched-data/loadBlogsData";
import loadSingleBlogData from "@/utils/fetched-data/loadSingleBlogData";

export const generateMetadata = async ({ params }) => {
    const { title } = await loadSingleBlogData(params.id)
    return {
        title: title,
    }
}

// generateStaticParams statically
export const generateStaticParams = async () => {
    const blogs = await loadBlogsData();

    return blogs.map(({ id }) => ({
        id: id.toString(),
    }))
}

const SingleBlog = async ({ params }) => {
    // load single blogs data from api
    const { id, title, body } = await loadSingleBlogData(params.id);
    return (
        <div>
            <h3 className="text-lg">{id}. {title} </h3>
            <p>{body}</p>
        </div>
    );
};

export default SingleBlog;