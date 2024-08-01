import { Hero } from "../../sections/Hero/Hero";
import { StyledHomeWrapper } from "./Home.styled";

export function Home() {
  return (
    <StyledHomeWrapper>
      <h1>Bookstats - Lorem ipsum dolor sit amet.</h1>
      <Hero />
    </StyledHomeWrapper>
  );
}
