import React from 'react';
import BookMarkBox from './BookMarkBox';

function BookmarkList() {

	const data = [
    {
			id: 0,
      title: 'Honey pork',
      link: 'https://www.notanothercookingshow.tv/post/eggplant-parmigiana',
      date: new Date().toLocaleDateString(),
    },
    {
			id: 1,
      title: 'Lasagna',
      link: 'https://www.notanothercookingshow.tv/post/eggplant-parmigiana',
      date: new Date().toLocaleDateString(),
    },
    {
			id: 2,
      title: 'Tomato chicken',
      link: 'https://www.notanothercookingshow.tv/post/eggplant-parmigiana',
      date: new Date().toLocaleDateString(),
    },
  ];


	return (
    <div className="container mt-3 px-3">
      {data.map(bookmark => {
        return <BookMarkBox bookmark={bookmark} key={bookmark.id} />;
      })}
    </div>
  );
}

export default BookmarkList;
