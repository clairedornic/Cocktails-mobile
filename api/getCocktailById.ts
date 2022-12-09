interface CocktailEntity {
  drinks: {
    idDrink: number;
    strDrink: string;
    strInstructions: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
  };
}

const getCocktailById = (idCocktail: number): Promise<CocktailEntity> => {
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
