import { useState, useEffect } from "react";

interface SearchResult {
  edition_key: string;
  title: string;
  author_name: string;
  cover_edition_key: string;
}

export function SearchBar() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult>({
    edition_key: "",
    title: "",
    author_name: "",
    cover_edition_key: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${search}`
      );
      const searchData = await response.json();
      setSearchResults(searchData.docs); // Update to use `docs` instead of `results`
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  useEffect(() => {
    fetch(`https://openlibrary.org/search.json?title=the+lord+of+the+rings`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Loading data error!");
      })
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search title..."
          value={search}
          onChange={handleChange}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              handleSearch(e);
            }
          }}
        />
        <button type="submit">Search</button>
      </form>
      <ol>
        {searchResults.map((result: SearchResult) => (
          <li key={result.edition_key}>
            <div>Title: {result.title} </div>
            <div>Author: {result.author_name}</div>
            <img
              src={`https://covers.openlibrary.org/b/olid/${result.cover_edition_key}-M.jpg `}
            />
          </li>
        ))}
      </ol>
      {/* <ul>
        {data.map(({ id, word, translation }) => (
          <>
            <li>{id}</li>
            <li>{word}</li>
            <li>{translation}</li>
          </>
        ))}
      </ul> */}
    </>
  );
}
