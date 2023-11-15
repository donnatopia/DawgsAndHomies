# Dawgs & Homies

<div align="center">
  <img src="https://github.com/donnatopia/fetch/blob/main/client/dist/logo.png?raw=true" alt="Dawgs & Homies Logo" width="250">
</div>

# About
A web application designed for dog enthusiasts to explore and filter through an extensive database of shelter dogs to find their perfect furry companion!

# Tech Stack

## Langugage
<div>
  <img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' />
</div>

## Front-End
<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/static/v1?style=for-the-badge&message=React+Router&color=CA4245&logo=React+Router&logoColor=FFFFFF&label=">
  <img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' />
  <img src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' />
  <img src="https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white" />
  <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white" />
  <img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white" />
</div>

## Back-End
<div>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />
</div>

## Other
<div>
  <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
  <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white" />
</div>

# Features

## Authentication
- To access the website, users can login with their name and email, which is handled with the API endpoint, `/auth/login`
- To end access to the website, users can log out with the API endpoint, `/auth/logout`

## Dashboard

### General Display

- Default displays all dog cards from every breed, age, and location
    - Includes information regarding a dog’s image, name, breed, age, and location
- Results are paginated, with a default of 25 results at once

### Filter

- **Breed Type**: users can filter by breed type for up to 80 different breeds
  - Search results are standardized to be title case
  - Users are able to remove their breed choice if inserted incorrectly
  - Error will be thrown if the user enters the same breed twice, no breed exists, or maximum filter breeds entered
- **Age**: users can filter for ages between 0-14 years old
  - This feature utilizes a range slider
- **Location**: users can filter by location zip code
  - Error wil be thrown if the user does not enter in a valid zip code

### Settings

- **Breed Alphabetical Sort**: users can opt to sort their dashboard alphabetically increasing or decreasing by breed name
  - This is A-Z sort by default
- **Number of Results**: users can toggle the number of results that show up on a page
  - This ranges from 2 - 100 results at a time, with a default of 25 results
  - This feature utilizes a slider

## Match
- On each dog card within the dashboard, users have the ability to favorite a dog
- Of all the dogs that are favorited, "Dawgs & Homies" will generate a matched dog for the user
  - If no dogs have been favorited, there will be an error screen that appears that will redirect the users to favorite the dogs in the dashboard

## Back-End
- Database information is sourced from the Fetch API database: `https://frontend-take-home-service.fetch.com`

## Custom Logo
Logo was created with Canvas by Donna Wong.

# Getting Started

1. Clone the Project to Your Local Environment
    ```
    git clone https://github.com/donnatopia/DawgsAndHomies.git
    ```
2. Install All Local Dependencies
    ```
    npm install
    ```
3. Create a `.env` file using the `example.env` file as a template
4. Open a new terminal and compile webpack
    ```
    npm run client-dev
    ```
5. Open another terminal and run the server
    ```
    npm run server-dev
    ```
6. Run ESLint for Code Consistency
    ```
    npm run lint
    ```
7. Open `localhost:3000` (or with your respective local url and server port)