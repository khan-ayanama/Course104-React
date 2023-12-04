# Testing

* As a developer, our primary goal is to build software that works.
* To ensure our software works, we test teh application.
* We check if our software works as expected

## Manual Testing

An individual will open the website, interact with the website and ensure everything works as intended.

If a new feature is released, you repeat the same steps.

You may have to test not only the new feature but also the existing feature.

`Drawback:`

1. Time consuming
2. Complex repetitive tasks has a risk of human error.
3. You may not get a chance to test all the fature you should

## Automated Testing

Automated tests are programs that automate the task of testing your software.

Write code to test the software code.
Additional effort required when you develop a feature.

`Advantages:`

* Not time consuming
* Reliable, consistent and not error prone.
* Easy to indentify and fix the features that breaks tests.
* Give confidence when shipping software.

## JEST

* Jest is a javascript testing framewok.
* Jest is a test runner that finds tests, runs the tests, determines whether the tests passed of failed and reports it back in a human readable manner.

## React Testing Library

* Javascript testing library that provides virtual DOM for testing React component.
* React Testing Library provides a virtual DOM when we can use to interact and verify the behaviour of a react component.
* Testing Library is infact a family of packages which helsp test UI component.
* The core library is called DOM Testing Libarry and RTL is simply a wrapper around this core library to test React applications in an easier way.

## Types of Tests

`Unit Tests:`

* Focus on testing the individual building blocks such as a class or a function or a component.
* Each unit or building block is tested in isolation, independent of other units.
* Dependencies are mocked.
* Run in a short amount of time an make it very easy to pinpoint failures

`Integration Tests:`

* Focus is on testing a combination of untis and ensuring they work together
* Take longer than unit tests

`E2E Tests:`

* Focus is on testing the entire application flow and ensuring it works as designed from start to finish.
* Involives in a real UI, a real backend database, real services etc.
* Take the longest as they cover the most amount of code.
* Have a cost implication as you interact with real APIs that may charge based on the number of requests.

## RTL Philosophy

* The more your tests resemble the way your software is used, the more confidence they can give you.
* Tests are going to learn to write in this series strike a balance between unit tests in the sense tehy aer at a component level and easy to write and maintain and E2E tests in the sense they resemble the way a use would interact with the component.
* With React Testing Library, we are not concerened about the impletation details of a component.
* Instead we are testing how the componetn behaves when a suer interacts with it.
* Instead we are testing how the component behaves when a user interacts with it.
* RTL will not care if you add 4+4 or 5+3 to display the number 8.
* Refactoring will not affect your tests as long as the end result is the same.
