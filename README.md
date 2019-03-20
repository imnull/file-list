# filels
Get file-list of a path

## Install

    $ npm i --save filels

## Quick start

    const { info } = require('filels');
    const path = './';
    const option = {
        filters: [
            '*.js',
        ],
        // ignores: [],
    };
    let pathInfo = info('./');
    console.log(pathInfo);

## API

    const { list, size, info } = require('filels');

### list

Return only the file-list of the path.

### size

Return only the size of the file-list of the path.

### info

Return both list and size.

## Path Name Filter

The `filters` and `ignores` only check the name part of the path.

- **String**: as a wildcard string,  `*` and `?` are both supported. ex: `*.js` `abc.*` `data.js*` `nu?ber.*`

- **RegExp**

- **Function**: (pathName) => boolean


