import { useState, useEffect } from "react";
import { QUOTES_API } from "../../api";
import { StyledRandomQuoteWrapper } from "./RandomQuote.style";

interface Quote {
  text: string;
  author: string;
}

export function RandomQuote() {
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const fetchQuotes = () => {
      fetch(QUOTES_API)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data: Quote[]) => {
          selectRandomQuote(data);
        })
        .catch((error) => {
          console.error("Error fetching quotes:", error);
        });
    };

    fetchQuotes();
  }, []);

  const selectRandomQuote = (quotes: Quote[]) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  return (
    <>
      {randomQuote && (
        <StyledRandomQuoteWrapper>
          <p className="quote">{randomQuote.text}</p>
          <p className="author">
            ~{" "}
            {randomQuote.author
              .replace(", type.fit", "")
              .replace("type.fit", "Dale Carnegie")}
          </p>
        </StyledRandomQuoteWrapper>
      )}
    </>
  );
}
