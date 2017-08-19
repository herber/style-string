# style-string [![Build Status](https://travis-ci.org/tobihrbr/style-string.svg?branch=master)](https://travis-ci.org/tobihrbr/style-string)

> Generate inline style strings

## Install

```
$ npm install --save style-string
```

## Usage

```js
const styleString = require('style-string');

styleString({ 'font-site': '18px', color: 'red' });
//=> 'font-site: 18px; color: red'
```

## API

### styleString(styles)

#### styles

Type: `object`

## License

MIT © [Tobias Herber](https://tobihrbr.com)
