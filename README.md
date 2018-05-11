# Dots Game

A dots shooting game loosely based on [specifications](https://glitch.com/edit/#!/whispering-elephant?path=README.md:1:0)

* [App URL](#app-url)
* [Screenshots](#screenshots)
* [Notes](#notes)
* [Setup](#setup)
* [Built With](#built-with)
* [Commands](#commands)
* [Tooling](#tooling)
* [Stats](#stats)
* [Influence](#influence)
* [Further Improvements](#further-improvements)

## App URL

[Demo](https://dots-game-zivqtuxvoq.now.sh/)

## Screenshots

<details>
  <summary>Mobile</summary>
  <img src="https://user-images.githubusercontent.com/4706261/39952317-0f1c4954-55cf-11e8-885a-038fe330362a.png" />
  <img src="https://user-images.githubusercontent.com/4706261/39952316-0ef4be16-55cf-11e8-98f6-a8051690c207.png" />
  <img src="https://user-images.githubusercontent.com/4706261/39952315-0ecaba58-55cf-11e8-8240-fee964848d0b.png" />
</details>

<details>
  <summary>Desktop</summary>
  <img    src="https://user-images.githubusercontent.com/4706261/39952320-150ef186-55cf-11e8-89bc-9e84fea858bb.png" />
  <img src="https://user-images.githubusercontent.com/4706261/39952319-14e7a77a-55cf-11e8-8436-f1fb66faec8c.png" />
  <img src="https://user-images.githubusercontent.com/4706261/39952318-14bf28f4-55cf-11e8-82c8-8c117a134c27.png" />
</details>

## Notes

* This app is made using **dom** with **react** and **not canvas** to demonstrate skills specifically in react.
* Although **canvas** can play well with **react**, but to keep things simple **dom** is used.
* Even though dom nodes are used, the performance characteristic of the app is still good enough.
* Although the perceived visual performance can be better with canvas implementation.

## Setup

Clone the repository to your projects folder and change the directory to downloaded folder.

```sh
git@github.com:shrynx/dots-game.git && cd dots-game
```

and install all the dependencies.

```sh
yarn install
```

## Built With

* [React](https://reactjs.org/)

  for managing views.

* [Styled Components](https://www.styled-components.com/)

  for managing component based css via js.

## Commands

* **start**

  ```
  yarn run start
  ```

  start the development server.

* **build**

  ```
  yarn run build
  ```

  build the project.

  **NOTE:** Final build is produced in the `build` folder.

* **test**

  ```
  yarn run test
  ```

  run unit tests the project in watch mode.

* **test:coverage**

  ```
  yarn run test:coverage
  ```

  run unit tests and get test coverage report of the project.

* **test:e2e**

  ```
  yarn run test:e2e
  ```

  run end to end test using cypress.

* **test:viz**

  ```
  yarn run test:viz
  ```

  open cypress ui for manually running e2e test.

* **flow**

  ```
  yarn run flow
  ```

  run [flow](https://flow.org/) to type check javascript.

* **flow:coverage**

  ```
  yarn run flow:coverage
  ```

  outputs flow coverage of src files.

* **lint**

  ```
  yarn run lint
  ```

  [eslint](https://github.com/eslint/eslint) to check all linting errors.

* **format**

  ```
  yarn run format
  ```

  run [prettier](https://github.com/prettier/prettier) and [eslint](https://github.com/eslint/eslint) to format all javascript files.

## Tooling

* [create-react-app](https://github.com/facebook/create-react-app)

  for bootstrapping react based projects.

* [jest](https://facebook.github.io/jest/)

  for unit testing javascript.

* [react-testing-library](https://github.com/kentcdodds/react-testing-library)

  for testing react components.

* [cypress](https://www.cypress.io/)

  for end to end testing application.

* [eslint](https://eslint.org/)

  for enforcing rules for writing javascript.

* [prettier](https://github.com/prettier/prettier)

  for formatting code with specified rules with help of eslint.

* [flow](https://flow.org/)

  for type checking javascript.

* [husky](https://github.com/typicode/husky)

  for adding git hooks.

* [lint-staged](https://github.com/okonet/lint-staged)

  for processing git staged files

## Stats

* **Build Size**

  `55kb (gzipped)`

* **Memory Footprint**

  average: `15mb - 20mb`

  see [notes](#notes)

<details>
  <summary>Details</summary>
  <img src="https://user-images.githubusercontent.com/4706261/39928558-a0f04d58-5570-11e8-859b-62d077aed2f9.png" />
</details>

* **Flow Coverage**

  100% type coverage.

<details>
  <summary>Details</summary>

| filename                      | annotation | percent | total | covered | uncovered |
| ----------------------------- | ---------- | ------- | ----- | ------- | --------- |
| src/App.js                    | flow       | 100 %   | 198   | 198     | 0         |
| src/components/Dot.js         | flow       | 100 %   | 19    | 19      | 0         |
| src/components/GameArea.js    | flow       | 100 %   | 6     | 6       | 0         |
| src/components/GameControl.js | flow       | 100 %   | 27    | 27      | 0         |
| src/components/GameInfo.js    | flow       | 100 %   | 5     | 5       | 0         |
| src/components/GameWrapper.js | flow       | 100 %   | 5     | 5       | 0         |
| src/components/InGameText.js  | flow       | 100 %   | 18    | 18      | 0         |
| src/components/InfoGroup.js   | flow       | 100 %   | 5     | 5       | 0         |
| src/components/InfoLabel.js   | flow       | 100 %   | 5     | 5       | 0         |
| src/components/RangeInput.js  | flow       | 100 %   | 17    | 17      | 0         |
| src/components/Score.js       | flow       | 100 %   | 6     | 6       | 0         |
| src/components/Speed.js       | flow       | 100 %   | 6     | 6       | 0         |
| src/index.js                  | flow       | 100 %   | 12    | 12      | 0         |
| src/styles/colors.js          | flow       | 100 %   | 16    | 16      | 0         |
| src/styles/global.js          | flow       | 100 %   | 2     | 2       | 0         |
| src/utils/calc.js             | flow       | 100 %   | 47    | 47      | 0         |
| src/utils/random.js           | flow       | 100 %   | 80    | 80      | 0         |

| Percent | Total | Covered | Uncovered |
| ------- | ----- | ------- | --------- |
| 100 %   | 474   | 474     | 0         |

</details>

---

* **Test Coverage**

  * Full end to end test coverage

    end to end test coverage using cypress.

    [Open End to End Test Results in Cypress](https://dashboard.cypress.io/#/projects/uq2zq5/runs/9759d1a0-b8aa-48ea-a91c-314a40d2f908/videos)

  * 100 % unit test coverage.

<details>
  <summary>Details</summary>

| File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| -------------- | ------- | -------- | ------- | ------- | ----------------- |
| All files      | 100     | 100      | 100     | 100     |                   |
| src            | 100     | 100      | 100     | 100     |                   |
| App.js         | 100     | 100      | 100     | 100     |                   |
| src/components | 100     | 100      | 100     | 100     |                   |
| Dot.js         | 100     | 100      | 100     | 100     |                   |
| GameArea.js    | 100     | 100      | 100     | 100     |                   |
| GameControl.js | 100     | 100      | 100     | 100     |                   |
| GameInfo.js    | 100     | 100      | 100     | 100     |                   |
| GameWrapper.js | 100     | 100      | 100     | 100     |                   |
| InGameText.js  | 100     | 100      | 100     | 100     |                   |
| InfoGroup.js   | 100     | 100      | 100     | 100     |                   |
| InfoLabel.js   | 100     | 100      | 100     | 100     |                   |
| RangeInput.js  | 100     | 100      | 100     | 100     |                   |
| Score.js       | 100     | 100      | 100     | 100     |                   |
| Speed.js       | 100     | 100      | 100     | 100     |                   |
| src/styles     | 100     | 100      | 100     | 100     |                   |
| colors.js      | 100     | 100      | 100     | 100     |                   |
| global.js      | 0       | 0        | 0       | 0       |                   |
| src/utils      | 100     | 100      | 100     | 100     |                   |
| calc.js        | 100     | 100      | 100     | 100     |                   |
| random.js      | 100     | 100      | 100     | 100     |                   |

</details>

---

## Influence

* color scheme ~~copied~~ inspired from [Two Dots](https://itunes.apple.com/us/app/two-dots/id880178264?mt=8)

## Further Improvements

* Tracking High Scores

* Game Modes
  * Practice Mode ( current implementation )
  * Challenge Mode ( Automatically increase speed based on score and time elapsed )
