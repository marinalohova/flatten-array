# flatten-array

Flatten an array of arbitrarily nested arrays of integers into a flat array of integers

## Getting Started

There are two ways to flatten the array that I came up with. One uses recursion and can be found in features/flatten.js
Another one uses Array.toString and the fact that the built-in method returns the flattened string of nested arrays in the target Array.
It can be found in features/hackerFlatten.js

### Prerequisites

Install node Version >=8.1.4
```
nvm use 8.1.4
```

Install dependencies
```
npm i
```

## Running the tests

Two sets of tests are provided for both methods. The tests can be found in test folder. To run the tests

```
npm test
```