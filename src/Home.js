import { useState, useEffect } from "react"
import BlogLists from "./BlogLists";


const Home = () => {
    // const [blogs, setBlogs] = useState([
    //     { title : ' Moyi dan Miyi tebang', body : ' none ', author : 'odo', id : '1'},
    //     { title : ' odo dan Miyi tebang', body : ' none ', author : 'igy', id : 2},
    //     { title : ' Moyi dan odo tebang', body : ' none ', author : 'moyi', id : 3}
    // ])
    const [blogs, setBlogs] = useState(null)
    const [isPending, setPending] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then((res) => {
                if(!res.ok) throw Error('Could not fetch the data from the resource')
                return res.json()
            })
            .then((data) => {
                setBlogs(data)
                setPending(false)
                setError(null)
            })
            .catch((err) => {
                setPending(false)
                setError(err.message)
            })
        },1000);
    },[])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
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