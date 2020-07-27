# Fitness-Tracker

![badge](https://img.shields.io/badge/license-MIT-blue.svg) ![badge](https://img.shields.io/badge/JavaScript-60%25-yellow) ![badge](https://img.shields.io/badge/HTML-18%25-red) ![badge](https://img.shields.io/badge/CSS-22%25-9cf) ![badge](https://img.shields.io/github/repo-size/gheptig/fitness-tracker)

## Heroku URL

https://tranquil-bayou-84257.herokuapp.com/

## Brief Description

This is a basic fitness-tracker that uses a noSQL database and the Mongoose ORM to allow a user to log multiple resistance/cardio exercises and track the type, name, duration, distance, weight, reps, and sets of a given workout/exercise. A user can also view total exercise data on the "stats" page that is displayed using various charts and graphs.

## Preview

![Preview](https://media.giphy.com/media/JUMcI10M7hN2wJXGLP/giphy.gif)

## Technologies Used

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - This website is written in JavaScript and ES6 JavaScript.

- [Node.js](https://nodejs.org/en/about/) - Used to execute code for application on backend and power noSQL database.

- [Express](https://www.npmjs.com/package/express) - Used to route and build API and make requests/responses between database and client.

- [Mongoose](https://mongoosejs.com/) - ORM library used to connect/interact with MongoDB database, model application schema, and execute mongo queries.

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Used to style the html elements/application.

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Gives application it's structure and DOM elements.

- [Heroku](https://www.heroku.com/) - Used to host working application. (see app link above).

## Local Installation

After a user clones the repository, they will need to install the NPM packages associated with the application by running `npm install`.

The user will then need to initialize the application's database by first by ensuring they are connected to MongoDB, followed by running the `npm run seed` command in their terminal.

Finally, a user can launch the application by running `node server.js` in their terminal, and access the application at `http://localhost:8080`

## License

MIT License

Copyright (c) 2020 Augustus Heptig

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributors/Authors

- Augustus Heptig - Author/Creator
