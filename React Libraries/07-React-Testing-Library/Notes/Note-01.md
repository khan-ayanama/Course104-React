# React Testing Library

## Testing

- Software testing is the process of finding errors in a software product before it is launched.
- Validate function and feature.

## Types of Testing

1. Manual Testing
2. Automatic Testing

## Testing by Developers

`Unit Testing`: Testing individual units or components.
`Integrated Testing`: Testing between two units or component.
`E-2-E Testing`: Test Start to end complete project.

## React Testing Tools

`Jest Framework`
`React Testing Library`

## Writing First jest Test

Create a file name file.test.js and then import the function you want to test and then write test case.

```js
import sum from "./sum";

test("testing sum function", () => {
  expect(sum(10, 5)).toBe(15);
});
```

## Writing first react test

```js
// App.test.js
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```
