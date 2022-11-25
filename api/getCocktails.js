const getCocktails = () => {
  let allCocktails = fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin')
    .then((response) => {
      return response;
    })
    .then((response) => response.json());

  return allCocktails;
};

export default getCocktails;
