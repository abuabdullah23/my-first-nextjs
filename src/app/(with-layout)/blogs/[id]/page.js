const SingleBlog = ({ params }) => {
    // const [year, id] = params.segments || [];
    return (
        <div>
            <h3>Id: {params.id}</h3>
            <p>{params.body}</p>
        </div>
    );
};

export default SingleBlog;