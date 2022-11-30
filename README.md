# WikiRecipes app

## Description
This is a training App to learn React.
The App is a frontend application to access and consult the content in [The Meal DB API](https://themealdb.com/api.php).

## Specifications
The App has 5 pages:
- **Home:** Welcome to the page.
- **Meals:** You can see and filter all the meals by category and select one to view the details (redirect to detail view).  Also meal deletion available.
- **Search:** You can search for recipies by name and select one to view the details (redirect to detail view). Also meal deletion available.
The search bar starts to search after the user stops typing with a delay of 1 second. Afterwards, the value of the search bar is cleared.
- **Detail:** Detail info of the selected meal. It gets the id meal from route params.
- **Add Meal:** You can add a new meal (saving it to a JSON file). All entries are validated (error check).

**Bonus:**  We have implemented a light/dark theme selector with the use of React useContenxt
as a global state manager.
