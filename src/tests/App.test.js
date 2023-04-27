import { render, screen } from "@testing-library/react";
import App from "../components/App";
import { BrowserRouter } from "react-router-dom";

test("renders heading and button", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const heading = screen.getByRole("heading");
  const btn = screen.getByText("Shop now");

  expect(heading.textContent).toMatch(/enhance your wardrobe/i);
  expect(btn).toBeInTheDocument();
});
