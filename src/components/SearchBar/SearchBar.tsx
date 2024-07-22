import { useState } from "react";

interface SearchResult {
  edition_key: string;
  title: string;
  author_name: string[];
  cover_edition_key: string;
}

export function SearchBar() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${search}`
      );
      const searchData = await response.json();
      setSearchResults(searchData.docs);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search title..."
          value={search}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <ol>
        {searchResults.map((result) => (
          <li key={result.edition_key}>
            <div>Title: {result.title} </div>
            <div>Author: {result.author_name}</div>
            <img
              src={`https://covers.openlibrary.org/b/olid/${result.cover_edition_key}-M.jpg `}
            />
          </li>
        ))}
      </ol>
    </>
  );
}
