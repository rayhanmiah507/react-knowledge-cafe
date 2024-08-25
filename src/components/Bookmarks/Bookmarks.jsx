import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'


const Bookmarks = ({ bookmarks, readingTime, handlerRemove }) => {


    return (
        <div className="md:w-1/3">
            <div className=" bg-gray-300 my-10 ml-4 p-4">
                <h3 className="text-2xl font-bold text-center">Spent time on read: {readingTime}</h3>
            </div>
            <div className=" bg-gray-300 my-10 ml-4 p-4">

                <h2 className="text-3xl font-bold text-center">Bookmarked Blogs: {bookmarks.length}</h2>


                <h3>
                    {
                        bookmarks.map((bookmark, idx) => <Bookmark key={idx}
                            handlerRemove={handlerRemove}
                            bookmark={bookmark}></Bookmark>)
                    }
                </h3>

            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;