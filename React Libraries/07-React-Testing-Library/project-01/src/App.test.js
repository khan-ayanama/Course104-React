import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test First react component", () => {
  render(<App />);
  const componentText = screen.getByText(/First React Test/i);
  expect(componentText).toBeInTheDocument();
});
