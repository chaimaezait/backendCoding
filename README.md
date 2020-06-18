# Fetching trending languages from github API
this REST microservice handels web fetching using[node-fetch].
As REST microservice the server is running on port 4000 so make sure the port is free.
### Dev Dependencies
+ nodemon
+ node version 8 or above

### Using local Node.js
```bash
cd dws
npm install
nodemon src/rest.js 

## Project Layout

### Directory tree
``` bash
.
├── resolver
├── routes
└── providers
    └── github
        └── trnding
            └── languges
```
### API End points schema
All endpoints should respect the following template:

```bash
/:provider/:service/:template
```
- - The __provider__ stands for the brand or the entity providing a given service.
- The __service__ is any unique product belonging to a given provider 
- The __template__ is a script file that describes the set of actions to follow for scrapping a given service.

For the actual template (github trending) ,i follow this logic:
```bash
.
└── templates
    └── github
        └── trending
            └── languges
                ├── postprocessing.js
                ├── main.js
                ├── index.json
                └── swagger.yml
```
- The __main.js__ stands for the function main() that handles data fetching from github API ,then  i process the extraction of languages used and calculate the number of repo who use each language .the extraction is handled by __fetchData()__ function from __postprocessing.js__.
- The __postprocessing.js__ stands for the function __fetchData()__  who lists the trending languages (in items liste);and it returns a json object .In this json object you can find the number of use for each language.
- __index.json__ in this json file i store data(from fetch) ;every time this service will be running,this file remove exusting data and rewrite the new data .
- __swagger.yml__ stands for swagger api documentation.
#### {template}.spec.int.js

This file can be named anything as long as it has the .spec.int.js suffix.

## Tests

During unit & integration tests, an env var _NODE_ENV_ is set to __test__

```bash
NODE_ENV=test
```

### Unit Tests

As a convention unit test files should be suffixed with __.spec.unit.js__.

To run unit tests:

```bash
npm run test:unit
```

### Integration Tests

As a convention integration test files should be suffixed with __.spec.int.js__.

To run integration tests:

```bash
npm run test:integration
```
## REST microservice
To run the microservice:
```bash
npm run start:dev
```
run it from root directory
### Bonus
 you can specify the number of trending repo(either 100 or something else ) in swagger ui
## what was missed
- The list of repos using the language