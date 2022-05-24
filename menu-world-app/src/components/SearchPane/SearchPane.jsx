import './Style.scss';

function SearchPane() {
  return (
    <div className='search-pane'>
      <h2>Browser</h2>
      <input type="text" />
      <select>
        <option value="date" selected>Sort by: Date</option>
        <option value="name">Sort by: Name</option>
      </select>
      <button>Search</button>
    </div>
  );
}

export default SearchPane;