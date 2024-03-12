import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);
  // const backend = "http://localhost:3000";

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

  console.log(data)

  const photo = `https://covers.openlibrary.org/a/olid/${img}.jpg`;

  return (
    <>
      <h1>Test</h1>
      <img src={photo} alt="" />
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
