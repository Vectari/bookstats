import { useState } from "react";
import { Loader } from "../Loader/Loader";
import { OPEN_LIBRARY_API } from "../../api";

// interface SearchByProps {
//   searchBy: string;
// }
interface SearchResult {
  edition_key: string;
  title: string;
  author_name: string[];
  cover_edition_key: string;
  format: string;
  language: string;
  publish_date: string;
  publisher: string;
}

interface SearchSelect {
  searchBy: string;
}
// export function SearchBar({ searchBy }: SearchByProps) {
export function SearchBar() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchSelect, setSearchSelect] = useState<SearchSelect>("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("Loading");
      setLoading(true);
      const response = await fetch(`${OPEN_LIBRARY_API}?${searchSelect}=${search}`);
      const searchData = await response.json();
      setSearchResults(searchData.docs);
      setLoading(false);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
    setSearchSelect(e.target.value);
  };

  return (
    <>
      <label htmlFor="searchBy">Search by: </label>
      <select
        name="searchBy"
        id="searchBy"
        value={searchSelect}
        onChange={handleSelect}
      >
        <option value="author">author</option>
        <option value="title">title</option>
      </select>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          // placeholder={`Search by ${searchBy}...`}
          value={search}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <Loader />}
      <ol>
        {searchResults.map((result) => (
          <li key={result.edition_key}>
            <div>Title: {result.title} </div>
            <div>Author: {result.author_name}</div>
            <div>Format: {result.format}</div>
            <div>Language: {result.language}</div>
            <div>Publish Date: {result.publish_date}</div>
            <div>Publisher: {result.publisher}</div>
            <img
              src={`https://covers.openlibrary.org/b/olid/${result.cover_edition_key}-M.jpg `}
            />
          </li>
        ))}
      </ol>
    </>
  );
}
