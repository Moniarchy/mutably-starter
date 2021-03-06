# Mutably Starter Project
For goal #383

## To get this project running
1. `npm install`
2. `npm start` to run (uses nodemon)

## Specifications
-[X] Your repo is a fork of mutably-starter.
-[X] Your repo has a README with instructions for how to run your project.
-[] Your app is SPA (single page app). All CRUD actions take place on the same page, preferably the root (/) route.
-[] All interaction with the API happens with the fetch API -- don't submit data via forms. You can use form html tags, but do all your form submission in your js. Make use of jQuery's event.preventDefault().
-[X] A user can read and display all the data for a resource.
-[] A user can create a new item via a create form. When the user creates a new item, that item should either get appended to the page or all the items should get re-retrieved in the js. No full page refresh.
-[] A user can update an existing item. Updating happens inline. This means that there is an edit button next to each item that, when clicked, causes the item text to be replaced with a pre-populated, editable input field. And the edit button becomes a save button. Once the save button is clicked and a success message comes back from the server, then the input gets replaced with the updated text. No page refresh.
-[] A user can delete an existing item via a delete button next to each item. No page refresh.
-[] Use a UI library to make your site look nice.
-[] The artifact produced is properly licensed, preferably with the MIT license.
-[] App is deployed on Heroku.
