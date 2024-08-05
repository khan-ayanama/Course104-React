import { render, screen } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/this is application page/i);
//   expect(linkElement).toBeInTheDocument();

//   const imageTitle = screen.getByTitle("Image Title");
//   expect(imageTitle).toBeInTheDocument();
// });

test("Testing Input box", () => {
  render(<App />);
  let checkInput = screen.getByRole("textbox");
  expect(checkInput).toBeInTheDocument();
  let checkInputPlaceholder = screen.getByPlaceholderText("Enter User Name");
  expect(checkInputPlaceholder).toBeInTheDocument();

  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "userId");
  expect(checkInput).toHaveAttribute("type", "text");
  expect(checkInput).toHaveAttribute("value", "ayan khan");
});
