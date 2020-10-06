import React, {useContext, useState} from 'react';
import { ThemeContext } from '../context/ThemeContext';

const initialState = {
	title: '',
	link: '',
	isPinned: false
}

function NewBookmarkForm(props) {
	const { isModalOpen, setModal, addBookmark } = props;
	const context = useContext(ThemeContext);
	const theme = context.isLightTheme ? context.cardLight : context.cardDark;
	const modalActive = isModalOpen ? 'is-active ' : '';

	const [bookmark, setBookmark] = useState(initialState);

	function resetForm(e) {
		e.preventDefault();
		setBookmark({ ...initialState });
		setModal(!isModalOpen);
	}

	function handleSubmit(e) {
		e.preventDefault();
		addBookmark(bookmark);
		resetForm(e);
	}

	function onChange (e) {
		const { name, value } = e.target;
		setBookmark(prevState => ({ ...prevState, [name]: value }));
	}

	return (
    <div className={`modal ${modalActive}`}>
      <div className="modal-background"></div>
      <div className={`modal-card`}>
        <header
          className={`has-background-danger has-text-white modal-card-head`}
        >
          <p className="modal-card-title has-text-white">New bookmark</p>
          <button
            className="delete"
            aria-label="close"
            onClick={resetForm}
          ></button>
        </header>
        <section className={`${theme} modal-card-body`}>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className={`${theme} label`}>Title</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="title"
                  required
                  value={bookmark.title}
                  onChange={onChange}
                  placeholder="Enter bookmark title"
                />
              </div>
            </div>
            <div className="field">
              <label className={`${theme} label`}>Link</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="link"
                  required
                  value={bookmark.link}
                  onChange={onChange}
                  placeholder="Enter bookmark link"
                />
              </div>
            </div>

            <footer
              className={`modal-card-foot ${theme}`}
              style={{ justifyContent: 'center' }}
            >
              <input className="button is-danger is-rounded" type="submit" />
              <button
                className="button is-rounded"
                aria-label="close"
                onClick={resetForm}
              >
                Cancel
              </button>
            </footer>
          </form>
        </section>
      </div>
    </div>
  );
}

export default NewBookmarkForm
