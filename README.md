# Rock Tracks #

A reactjs implementation of a web app that connects to an Apple REST web service.
The solution is split into the following high level components
  - Track Grid : A page that displays a list of rock tracks
  - Track Detail : A page that displays an individual track's details along with 3 random tracks

The web app contains the following features:

  - Using redux to manage the Store
  - Bulma for styling
  - React Router for SPA support
  - Localisation support

## Demo ##

https://cc278.github.io/rock-tracks

## To run app locally ## 

- npm install
- npm start
- http://localhost:3000 to access the web app ( this is usually happens automatically via your default browser)

## To run tests ##

- npm test 

## Improvements

* Better test coverage
* Mock fetch
* Decouple apple api from component containers
* Better feedback - Loading spinner for async etc
* Better UI elements - Navigation breadcrumb, paging  etc
* Better error handing for failed requests
* Optimise Shuffle
* Better caching strategy - either cache bust each call or implement intelligence
* Decouple router from components


