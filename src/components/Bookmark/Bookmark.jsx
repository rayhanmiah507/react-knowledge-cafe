import PropTypes from 'prop-types';

const Bookmark = ({ bookmark, handlerRemove }) => {
    const { title, id } = bookmark;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl md:flex justify-between'>

            <div>
                <h3 className='text-2xl'>{title}</h3>
            </div>
            <div>
                <button onClick={() => handlerRemove(id)} className='bg-slate-300'>Remove</button>
            </div>


        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;