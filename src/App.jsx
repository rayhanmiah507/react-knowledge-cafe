import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingtime] = useState(0);

  const handlerAddToBookmark = blog => {
    const newbookmark = [...bookmarks, blog]
    setBookmarks(newbookmark)

  }

  const handlerRemove = id => {
    const removedata = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(removedata)

  }

  const handlerTime = time => {
    const newreadingTime = readingTime + time
    setReadingtime(newreadingTime)

  }


  return (
    <>
      <div className='max-w-screen-2xl mx-auto'>
        <Header></Header>
        <main className='flex'>
          <Blogs handlerAddToBookmark={handlerAddToBookmark} handlerTime={handlerTime}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime} handlerRemove={handlerRemove}></Bookmarks>
        </main>
      </div>


    </>
  )
}

export default App
