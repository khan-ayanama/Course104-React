# part-02

## Testing input element

```js
// App.js
export default function App() {
  return (
    <>
      <input
        type="text"
        placeholder="Enter User Name"
        name="username"
        id="userId"
        value="ayan khan"
      />
    </>
  );
}

// App.test.js
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
```
