import { useEffect, useState } from "react";
import React from "react";
import {Blogpost} from "./blogpost"


export function Blog() {
    const [blogs, setBlogs] = useState([]);


    useEffect(()=>{
        const fetchpost= async()=>{
            const response= await fetch("https://blog-backend-ankit723.onrender.com/getallposts")
            const data=await response.json()
            setBlogs(data)
        }
        fetchpost()
    }, [])

return (
    <div className="App mx-5">
        {blogs&&blogs.length>0?
            (blogs.map((blog)=>
                <Blogpost key={blog._id} type={blog.type} title={blog.title} para={blog.para}/>
            )):
            console.log("No post to Show")
        }
    
    </div>
);
}
  
  export default Blog;