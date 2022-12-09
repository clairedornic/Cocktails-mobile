const getCocktailById = (idCocktail: number) => {
  let cocktail = fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + idCocktail
  ).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  });

  return cocktail;
};

export default getCocktailById;
