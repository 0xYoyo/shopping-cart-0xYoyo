import { render, screen } from "@testing-library/react";
import Catalog from "../components/Catalog";
import { BrowserRouter } from "react-router-dom";
import itemData from "../helper";

test("renders all images and make sure they are different", () => {
  const dataCopy = [...itemData];
  render(
    <BrowserRouter>
      <Catalog state={[dataCopy]} />
    </BrowserRouter>
  );
  const images = screen.getAllByRole("img");
  expect(images.length).toBe(8);
  const cardigan = screen.getByAltText("Cardigan");
  const hoodie = screen.getByAltText("Hoodie");
  expect(cardigan).toBeInTheDocument();
  expect(hoodie).toBeInTheDocument();
});
