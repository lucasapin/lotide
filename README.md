# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lucaspin/lotide`

**Require it:**

`const _ = require('@lucaspin/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head() = Function used to retrieve the first element from the array
* tail() = Function used to retrieve every element except the head (first element) of the array.
* middle() = Function used to retrieve the middle elements of an array.
* assertArraysEqual() = Function for asserting that two arrays are equal.
* assertEqual() = Function used to help us test our code, comparing primitive types.
* assertObjectsEqual() = Function used to compare two objects.
* countLetters() = Function that takes in a string and return counts for the specific letter in the string.
* countOnly() = Function that takes in a collection of items and return counts for a specific subset of those items.
* eqArrays() = Function that can compare two arrays for a perfect match.
* eqObjects() = Function used to compare two objects.
* findKey() = Function that takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value.
* findKeyByValue() = Function that help us search for a key on an object where its value matches a given value.
* flatten() = Function that when given an array with other arrays inside, it can flatten it into a single-level array.
* letterPositions() = Function which will return all the indices (zero-based positions) in the string where each character is found.
* map = Function that returns a new array based on the results of the callback function.
* takeUntil() = Function that returns a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* without() = Function used filter our data by removing some unwanted items.