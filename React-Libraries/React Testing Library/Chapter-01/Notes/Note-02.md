# Test

```ts
    import { render, screen } from '@testing-library/react';
    import App from './App';

    test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    });
```

## test

`test(name, fn, timeout)`

* The first argument is the test name used to identify the test.
* The second argument is a function that contains the expectation to test.
* The third argument is timeout which is an optional argument for specifying how long to wait before aborting the test. The default timeout value is 5 second.

## Test Driven Development (TDD)

Test driven development is a software development process where you write the test before writing the software code

Once the tests have been written, you then write the code to ensure the test passes.
`Steps:`

1. Create tests the verify the functionality of a specifi feature.
2. Write Software code that will run the test successfully when re-executed.
3. Refactor the code for optimization while ensuring the tests continue to pass

`Note:` It's also called red-green testing as all tests go from a red failed state to a green passed state.

## JEST Watch Mode

Watch mode is an option that we can passto jest asking to watch files that have changed since the last commit and execute tests related only to those changed files.

An optimized designed to make your tests run fast regardless of how many tests you have.
