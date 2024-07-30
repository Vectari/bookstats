import { RandomQuote } from "../../components/RandomQuote/RandomQuote";
import { StyledHeroWrapper } from "./Hero.style";

export function Hero() {
  return (
    <>
      <StyledHeroWrapper>
        <RandomQuote />
      </StyledHeroWrapper>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis
        provident corrupti! Omnis ipsam harum expedita illo adipisci excepturi
        facere tenetur laborum? Cupiditate molestias id alias eos earum suscipit
        quaerat quis odit dolorem illum nam, ea mollitia nisi excepturi porro,
        saepe culpa ipsum, neque animi repellat! Necessitatibus ea rem neque!
      </h1>
    </>
  );
}
