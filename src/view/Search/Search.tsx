import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SearchWrapper } from "./Search.style";

export function Search() {
  return (
    <SearchWrapper>
      <h1>Search</h1>
      <SearchBar searchBy={"author"} />
      <SearchBar searchBy={"title"} />
    </SearchWrapper>
  );
}
