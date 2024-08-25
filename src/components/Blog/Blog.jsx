import PropTypes from 'prop-types';

import { PiBookmarkSimpleLight } from "react-icons/pi";

const Blog = ({ blog, handlerAddToBookmark, handlerTime }) => {

    return (
        <div className='my-10 mb-20 border-b-3'>

            <img src={blog.cover} alt="" />

            <div className='flex justify-between mb-4 my-4'>
                <div className='flex'>
                    <img className='w-14' src={blog.author_img} alt="" />
                    <div className='ml-6'>
                        <h4 className='font-bold text-2xl'>{blog.author}</h4>
                        <p>{blog.posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{blog.reading_time} min read</span>
                    <button onClick={() => handlerAddToBookmark(blog)} className='ml-2 text-2xl'><PiBookmarkSimpleLight></PiBookmarkSimpleLight></button>
                </div>
            </div>

            <h1 className='text-4xl mb-4'>{blog.title}</h1>
            <p className=''>
                {
                    blog.hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>

            <button className='text-blue-700 underline mt-4 font-bold' onClick={() => handlerTime(blog.reading_time)}>Mark as read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handlerAddToBookmark: PropTypes.func,
    handlerTime: PropTypes.func
}

export default Blog;