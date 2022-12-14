import { Link } from "react-router-dom";

const BlogLists = ({blogs, title, handleDelete}) => {

    return (  
       <div className="blog-list">
        <h2> {title} </h2>
         { blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`blog/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written by : <strong>{blog.author}</strong></p>
                </Link>
                {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
            </div>
        ))}
       </div>
    );
}
 
export default BlogLists;