import './SearchResultsComponent.css'

function SearchResults({ searchResults, onLocationSelect }) {

  const hasResults = searchResults && searchResults.length > 0;

  return (
    <>
      {hasResults && (
        <ul className="search-results">
          {searchResults.map((location, index) => (
            <li
              key={index}
              onClick={(lat, lon) => onLocationSelect(location.lat, location.lon)}>
              {location.name && (
                <strong>{location.name}</strong>
              )}<span className="coma">,</span>
              {location.state && (location.state)}<span className="coma">,</span>
              {location.country && (
                <strong>{location.country}</strong>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default SearchResults;