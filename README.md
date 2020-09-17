# HTTP Movies

  - [x] Initial Commit

### Task 1: Project Setup

  - **Fork** this repository, then clone your fork.
  -  [x] npm install and start in root and client directory

### Task 2: MVP

  #### Task 2A: Updating A Movie:

  - 2A [x] Add a route at the path `/update-movie/:id`
  - 2B [x] Create a component with a form to update the chosen movie
  - 2C [x] Add a button in the movie component that routes you to your new route with the movies's id as the URL param
  - 2D [x] The form should make a PUT request to the server when submitted
    - 2D.1 [x] - GET request to fetch data to dynamic ID, Update Route component
      - [x] Update Movie (Get movie w/dynamic id and pass to form where put made)
    - 2D.2 [x] - PUT request to edit movie (reset form state + push to movies) 
      - [x] Update Form 

    Movie object format:

    ```
    {
      id: 5,
      title: 'Tombstone',
      director: 'George P. Cosmatos',
      metascore: 89,
      stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
    }
  ```

  #### Task 2B: Deleting A Movie:

  - [x] Add a delete button in the movie component that makes a DELETE request
  - [x] When the call comes back successfully, route the user to `/movies` where they will see the updated movie list without the deleted movie
  - [x] useEffect dependency array

  #### Task 2C: Adding A Movie:

  - Add a route at the path `/add-movie`
  - Create a component with a form to add a new movie
  - Each created movie should have the following format (notice the array of strings - this will test your JS skills, so work through it methodically)
  - The form should make a POST request to the server when submitted
  - When the call comes back successfully, reset your form state and route the user to `/movies`

  Movie object format:

  ```
  {
    id: 5,
    title: 'Tombstone',
    director: 'George P. Cosmatos',
    metascore: 89,
    stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
  }
  ```

### Task 3: Exit Ticket

  Once you begin, you will have 15 minutes to answer the questions [here](https://app.codesignal.com/public-test/hNvz7zyxgmYobvSwb/HzrJFpaxkxvq86).

  The completion of these questions is mandatory for MVP. However, passing the quiz doesn't affect your standing as a Lambda School student whatsoever. This is Lambda School testing itself! Please answer honestly and to the best of your ability without using external references.

### Task 4: Stretch Problem

  - Add the ability to update the stars of a movie within a single text input field (think about how to change from an array of strings to a single string, then back to an array of strings)
  - See Part 3 above (Adding movies with a POST request)
  - Style the app!

## Task 5: Review/Clean/Submit

  - [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's Repo). **Please don't merge your own pull request**
  - [ ] Fill out your module retrospective form [here](https://forms.lambdaschool.com/module-retrospective) with a link to your PR
