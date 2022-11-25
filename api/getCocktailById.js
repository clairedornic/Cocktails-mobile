const getCocktailById = (idCocktail) => {
  let cocktail = fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + idCocktail
  ).then((response) => response.json());

  return cocktail;
};

export default getCocktailById;
