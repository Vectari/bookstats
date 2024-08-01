import { useState } from "react";
import { Loader } from "../Loader/Loader";
import { OPEN_LIBRARY_API } from "../../api";
import { StyledSearchBarWrapper } from "./SearchBar.style";
import { useNavigate } from "react-router-dom";

interface SearchResult {
  edition_key: string;
  title: string;
  author_name: string[];
  cover_edition_key: string;
}

export function SearchBar() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchSelect, setSearchSelect] = useState("title");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `${OPEN_LIBRARY_API}?${searchSelect}=${search}`
      );
      const searchData = await response.json();
      setSearchResults(searchData.docs);
      setLoading(false);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
    setSearchSelect((e.target as HTMLSelectElement).value);
  };

  const handleCleanSearch = () => {
    setSearchSelect(searchSelect);
    setSearch("");
  };

  return (
    <StyledSearchBarWrapper>
      <button onClick={handleCleanSearch}>clean</button>
      {/* SELECT SECTION */}
      <label htmlFor="selectSearchBy">Search by: </label>
      <select
        name="selectSearchBy"
        id="selectSearchBy"
        value={searchSelect}
        onChange={handleSelect}
      >
        <option value="author">author</option>
        <option value="title">title</option>
      </select>

      {/* FORM SECTION */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder={`Search by ${searchSelect}`}
        />
        <button type="submit">Search</button>
      </form>

      {/* LOADER SECTION */}
      {loading && <Loader />}

      {/* SEARCH RESULT SECTION */}
      <ol>
        {searchResults.map((result) => (
          <li
            key={result.edition_key}
            onClick={() => navigate(`/detail/${result.edition_key}`)}
            style={{ cursor: "pointer" }}
          >
            <div>Title: {result.title} </div>
            <div>Author: {result.author_name}</div>
            <div>ID: {result.edition_key}</div>
            <img
              src={`https://covers.openlibrary.org/b/olid/${result.cover_edition_key}-M.jpg`}
              alt={result.title}
            />
          </li>
        ))}
      </ol>
    </StyledSearchBarWrapper>
  );
}
