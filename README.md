<h1 align="center">
    Giphy
</h1>

## :bulb: Deploy

- [Link Giphy](https://gihpy.vercel.app/)

## :bookmark: About

**Giphy** is a simple web app that, with Giphy Public API, renders a layout of random gifs with infinite scrolling. The user can search for different gifs and also see the details of a gif when clicking on them.

The app also contains mock functions to simulate what a contact with a API would look like to delete, save and edit a gif.

## :rocket: Technologies

- [Typescript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)
- [NextJS](https://nextjs.org/)
- [Giphy API](https://developers.giphy.com/)

## :boom: How to execute

- ### **Prerequisites**

  - It is **necessary** to have **[Node.js](https://nodejs.org/en/)** installed in the computer
  - It is **necessary** to have **[Git](https://git-scm.com/)** installed in the computer
  - Also, it is **necessary** to have a package manager, either **[NPM](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/)**.

1. Clone the repo:

```sh
  $ git clone https://github.com/Camie-M/gihpy.git
```

2. Executing:

```sh
  $ cd giphy
  $ npm install # ou yarn
  $ npm start # ou yarn dev
```

## :jigsaw: Improvements
A couple of things can be done to make the project even better:
- Research a better way for the giphy API to work with Typescript. Due to the lack of typing, explicts type "any" happened throughout the code
- Implement unit testing
-  Research on how to make the giphy api/NEXTJS work with environment variables (it did not work even using NEXT_PUBLIC), so the user api key would not be explicit.
-  Further research to configure Docker in MacOS 

## :email: Contact

<p>Camila Miranda de Moura</p>
camila.miranda.moura@gmail.com
