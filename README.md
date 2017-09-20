OTT (Object transform tool)
==============

Tool for transform javascript object


Setup
-----

1. Install [Node.js](http://nodejs.org). Should use [NVM](https://github.com/creationix/nvm) and defined a version in .nvmrc file with the version `6.9.1`

2. Run `npm install` to install the npm dependencies.


Unit Tests
-------

To run unit tests (generated xml output is stored in `test-results/unit` directory)

    grunt test

debugging unit tests

    grunt karma:debug
    # quickly open developer tools in chrome
