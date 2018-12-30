# tiny-chunk

[![source](https://badgen.net/npm/v/@ngard/tiny-chunk)](https://www.npmjs.com/package/@ngard/tiny-chunk)
[![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-chunk)](https://bundlephobia.com/result?p=@ngard/tiny-chunk)
[![build status](https://badgen.net/travis/NickGard/tiny-chunk)](https://travis-ci.org/NickGard/tiny-chunk)
[![license](https://badgen.net/badge/license/MIT/blue)](https://badgen.net/badge/license/MIT/blue)

A minimal-weight utility similar to `lodash.chunk`. For when every byte counts!
The only difference is that `tiny-chunk` has a minimum chunk size of `1` instead of `0`.

<hr/>

lodash.chunk [![bundle size](https://badgen.net/bundlephobia/minzip/lodash.chunk)](https://bundlephobia.com/result?p=lodash.chunk)
<br/>
tiny-chunk [![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-chunk)](https://bundlephobia.com/result?p=@ngard/tiny-chunk)

<hr/>

## Syntax

```js
chunk(/* array [, chunkSize] */)
```

## Parameters

`array` - An array to chunk
<br/>
`chunkSize` - [optional] A positive numerical value that designates the size of the chunks to be created. Non-numeric values will default to `1`. Non-integer values will round down to the nearest integer.

## Return

An array of elements split into groups the length of `chunkSize`. If the array can't be split evenly, the final chunk will be the remaining elements.

## Example

```javascript
import { chunk } from '@ngard/tiny-chunk';

const value = chunk([1, 2, 3, 4, 5], 2);
// value is [[1, 2], [3, 4], [5]]
```
