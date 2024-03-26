import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

const SearchBar = ({ onSearch, searchQuery }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const inputValue = form.elements.searchInput.value;
    if (inputValue.trim() === '') {
      toast('Please enter search term!', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: 'rgb(216, 124, 49)',
          color: '#fff',
        },
      });
      return;
    }
    onSearch(inputValue);
    form.reset();
  };
  return (
    <div>
      {' '}
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <input
            className={css.input}
            defaultValue={searchQuery}
            type="text"
            name="searchInput"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </label>
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default SearchBar;
