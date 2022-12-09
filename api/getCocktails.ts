const getCocktails = () => {
  let allCocktails = fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin').then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    }
  );

  return allCocktails;
};

export default getCocktails;
