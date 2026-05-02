import './SearchComponent.css'

function Search({searchQuery,setSearchQuery,handleReset}) {

  return (
    <div className="search-component">
      <p className="input-container">
        <input
          type="text"
          value={searchQuery}
          onChange={(ev) => setSearchQuery(ev.target.value)} />
        <span
          className="clear-input"
          onClick={() => handleReset() }
        >
          &times;
        </span>
      </p>
    </div>
  )
}

export default Search;