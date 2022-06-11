
function SearchBox({onSearchChangeHandeler,placeholder}) {
    return(       
    <div className="search-box">
        <input 
        type='search'
        placeholder={placeholder}
        onChange={onSearchChangeHandeler}
        />
  </div>)
}

export default SearchBox