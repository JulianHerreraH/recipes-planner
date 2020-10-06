import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Icon from '@mdi/react';
import { mdiPin, mdiDelete } from '@mdi/js';

function pinBookmark(evt) {
  evt.preventDefault();
  console.log(evt);
  const target = evt.target;
  target.classList.toggle('main-color');
}

function BookMarkBox({ bookmark }) {
  const context = useContext(ThemeContext);
  const theme = context.isLightTheme ? context.cardLight : context.cardDark;

  return (
    <div className={`box my-2 ${theme}`}>
      <article className="media">
        <div className="media-content">
          <h1 className="is-size-5-tablet is-uppercase">{bookmark.title}</h1>
          <a href={bookmark.link} target="blank">Recipe Link</a> <br />
          <small>{bookmark.date}</small>
        </div>
        <div className="media-right vertical-buttons">
          <div onClick={pinBookmark} role="button" aria-pressed="false">
            <Icon path={mdiPin} size={1} rotate={45} className="my-1" />
          </div>
          <div tabIndex="0">
            <Icon path={mdiDelete} size={1} className="my-1" />
          </div>
        </div>
      </article>
    </div>
  );
}

export default BookMarkBox;
