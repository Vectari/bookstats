import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const backend = "http://localhost:3000";

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = async (e) => {
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
        setImg(res.docs[0].author_key);
      });
  }, []);
  //
  //
  //

  console.log(data);
  console.log(searchResults);

  const photo = `https://covers.openlibrary.org/a/olid/${img}-S.jpg`;

  return (
    <>
      <h1>Test</h1>
      <img src={photo} alt="" />
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search title..."
          value={search}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(e);
            }
          }}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map((result, key) => (
          <>
            <li key={key}>
              Title: {result.title} Author: {result.author_name}
            </li>
            <img
              src={`https://covers.openlibrary.org/b/olid/${result.cover_edition_key}-M.jpg `}
            />
          </>
        ))}
      </ul>
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

export default App;
