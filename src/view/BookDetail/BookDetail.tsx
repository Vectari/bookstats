import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OPEN_LIBRARY_API } from "../../api";

// interface BookDetailProps {
//   edition_key: string;
// }

interface BookDetail {
  title: string;
  authors: { name: string }[];
  cover: string;
  publish_date: string;
  publishers: string[];
}

export function BookDetail() {
  const { edition_key } = useParams<{ edition_key: string }>();
  const [bookDetail, setBookDetail] = useState<BookDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetail = async () => {
      try {
        const response = await fetch(`${OPEN_LIBRARY_API}?q=${edition_key}`);
        const data = await response.json();
        setBookDetail(data.docs);
        setLoading(false);
        console.log(`${OPEN_LIBRARY_API}?q=${edition_key}`);
        console.log(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetail();
  }, [edition_key]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!bookDetail) {
    return <div>No details available</div>;
  }

  return (
    <div>
      <h1>Book detail</h1>
      {/* <h1>{bookDetail[0].title}</h1> */}
      {/* <p>Authors: {bookDetail.authors.map(author => author.name).join(', ')}</p>
      <p>Publish Date: {bookDetail.publish_date}</p>
      <p>Publishers: {bookDetail.publishers.join(', ')}</p>
      <img src={`https://covers.openlibrary.org/b/olid/${edition_key}-L.jpg`} alt={bookDetail.title} />  */}
      {bookDetail.map((result) => (
        <>
          <div>Title: {result.title} </div>
          <div>Author: {result.author_name}</div>
          <div>ID: {result.edition_key}</div>
        </>
      ))}
    </div>
  );
}
