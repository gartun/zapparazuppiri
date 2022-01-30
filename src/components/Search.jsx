
const Search = ({ setKeyword }) => {

  const handleChange = e => {
    setKeyword(e.target.value);
    
    sessionStorage.setItem("turmob-keyword", e.target.value);
  }

  return (
    <div className="search">
      <label>Aranacak Kelime: </label>
      <input
        value={sessionStorage.getItem("turmob-keyword")}
        onChange={handleChange}
      />
    </div>
  )
}

export default Search;
