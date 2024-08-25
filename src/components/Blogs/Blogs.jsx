import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({ handlerAddToBookmark, handlerTime }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog key={blog.id}
                    handlerAddToBookmark={handlerAddToBookmark}
                    handlerTime={handlerTime}
                    blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    blogs: PropTypes.array.isRequired,
    handlerAddToBookmark: PropTypes.func,
    handlerTime: PropTypes.func
}

export default Blogs;