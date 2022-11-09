import BlogLists from "./BlogLists";
import useFetch from "./useFetch";


const Home = () => {
    // const [blogs, setBlogs] = useState([
    //     { title : ' Moyi dan Miyi tebang', body : ' none ', author : 'odo', id : '1'},
    //     { title : ' odo dan Miyi tebang', body : ' none ', author : 'igy', id : 2},
    //     { title : ' Moyi dan odo tebang', body : ' none ', author : 'moyi', id : 3}
    // ])
    
    const {isPending, error} = useFetch('http://localhost:8000/blogs')

    const blogs = useFetch('http://localhost:8000/blogs').data

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        // setBlogs(newBlogs)
        console.log(newBlogs)
    }
    return (
        <div className="home">
            {error && <div>{error}</div> }
            {isPending && <div>Loading...</div> }
            {blogs && <BlogLists blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
            {/* <BlogLists blogs={blogs.filter((blog) => blog.Author === 'moyi')} title="Moyi's Blogs"/> */}
        </div>
      );
}
 
export default Home;