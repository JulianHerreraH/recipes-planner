import React, { useState, useEffect } from 'react';
import BookMarkBox from './BookMarkBox';
import NewBookmarkForm from './NewBookmarkForm';

function BookmarkList() {
  const [bookmarks, setBookmarks] = useState(() => {
    const localMarks = localStorage.getItem('bookmarks');
    return localMarks ? JSON.parse(localMarks) : [];
  });

  const [isModalOpen, setModal] = useState(false);

  let sortedBookMarks = [...bookmarks];
  sortedBookMarks.sort((a, b) => {
    return a.isPinned === b.isPinned ? 0 : a.isPinned ? -1 : 1;
  });
  
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  function addBookmark(bookmark) {
    const id = bookmarks.length;
    const date = new Date().toLocaleDateString();
    setBookmarks(prevState => ([...prevState, {...bookmark, id, date}]))
  }

  function removeBookmark(id) {
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
  }

  function pinBookmark(id) {
    console.log(id)
    setBookmarks(
      bookmarks.filter(bookmark => {
        if (bookmark.id === id) bookmark.isPinned = !bookmark.isPinned;
        return bookmark;
      })
    );
  }

	return (
    <div className="container mt-3 px-3">
      <NewBookmarkForm
        isModalOpen={isModalOpen}
        setModal={setModal}
        addBookmark={addBookmark}
      />
      {sortedBookMarks.map(bookmark => 
        <BookMarkBox 
          bookmark={bookmark} 
          key={bookmark.id} 
          removeBookmark={removeBookmark} 
          pinBookmark={pinBookmark}/>
      )}
      <button
        onClick={() => setModal(!isModalOpen)}
        className="button is-danger is-rounded is-medium floating"
      >
        New
      </button>
    </div>
  );
}

export default BookmarkList;
