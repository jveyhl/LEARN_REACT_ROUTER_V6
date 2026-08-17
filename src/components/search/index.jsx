import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createSearchParams } from "react-router-dom";

const Search = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchValue = searchInputRef.current.value.trim();

    if (searchValue === "") {
      setError("Please enter a search term");
      return;
    }

    setError("");

    const searchInputQuery = {
      name: searchValue,
    };

    const query = createSearchParams(searchInputQuery);

    navigate({
      pathname: "/search",
      search: query.toString(),
    });
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <div className="search-row">
        <input
          type="text"
          className={`search ${error ? "searchErrorInput" : ""}`}
          ref={searchInputRef}
        />
        <button type="submit" className="search-button">
          🔎
        </button>
      </div>
      {error && <p className="searchError">{error}</p>}
    </form>
  );
};

export default Search;
