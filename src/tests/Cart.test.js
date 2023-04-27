import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart";
import { BrowserRouter } from "react-router-dom";
import cardigan from "../images/cardigan.jpg";
import userEvent from "@testing-library/user-event";

test("integration tests", async () => {
  const user = userEvent.setup();
  const dataExample = [
    {
      id: 1,
      pic: cardigan,
      name: "Cardigan",
      price: 47.99,
      quantity: 2,
      added: true,
    },
  ];
  const incrementHandler = jest.fn();
  const decrementHandler = jest.fn();
  const inputHandler = jest.fn();
  const deleteHandler = jest.fn();
  render(
    <BrowserRouter>
      <Cart
        state={[
          dataExample,
          2,
          95.98,
          incrementHandler,
          decrementHandler,
          inputHandler,
          deleteHandler,
        ]}
      />
    </BrowserRouter>
  );

  const input = screen.getByRole("spinbutton");
  expect(input.value).toMatch(/2/i);
  const plusBtn = screen.getByRole("button", { name: "+" });
  await user.click(plusBtn);
  expect(incrementHandler).toHaveBeenCalledTimes(1);
  const minusBtn = screen.getByRole("button", { name: "-" });
  await user.click(minusBtn);
  expect(decrementHandler).toHaveBeenCalledTimes(1);
  const delBtn = screen.getByRole("button", { name: /x/i });
  await user.click(delBtn);
  expect(deleteHandler).toHaveBeenCalledTimes(1);
  await user.clear(input);
  expect(inputHandler).toHaveBeenCalledTimes(1);
});
