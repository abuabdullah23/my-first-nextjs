const SingleBlog = ({params}) => {
    const [year, id] = params.segments || [];
    return (
        <div>
           SingleBlog {year || new Date().getFullYear()} for {id}
        </div>
    );
};

export default SingleBlog;