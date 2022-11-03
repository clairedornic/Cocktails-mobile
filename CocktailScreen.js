import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image, FlatList, SafeAreaView, TextInput  } from 'react-native';
import { useQuery } from '@tanstack/react-query'
import getCocktailById from './api/getCocktailById';



const CocktailScreen = ({ route, navigation }) => {

  const { cocktailId } = route.params;

  const {isLoading, isError, data, error} = useQuery(['cocktail', cocktailId], () => getCocktailById(cocktailId));

  const cocktail = data?.drinks[0];


  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.view}>
        <View style={styles.container}>
          <Image
            source={{ uri:cocktail.strDrinkThumb}}
            style={styles.image}
          />
          <Text style={styles.title}>{cocktail.strDrink}</Text>
          <View style={styles.subView}>
            <Text style={styles.subTitle}>Ingredients</Text>
            <Text style={styles.ingredient}>• {cocktail.strIngredient1}</Text>
            <Text style={styles.ingredient}>• {cocktail.strIngredient2}</Text>
            <Text style={styles.ingredient}>• {cocktail.strIngredient3}</Text>
          </View>
          <View style={styles.subView}>
            <Text style={styles.subTitle}>Recette</Text>
            <Text style={styles.ingredient}>{cocktail.strInstructions}</Text>
          </View>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 35,
  },
  view: {
    marginHorizontal: 20,
    width: '100%',
  },
  subView: {
    paddingHorizontal: 20,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
  },
  ingredient: {
    fontSize: 16,
    fontWeight: 'light',
    marginTop: 15,
  },
});

export default CocktailScreen;
