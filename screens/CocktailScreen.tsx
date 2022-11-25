import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image, SafeAreaView } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import getCocktailById from '../api/getCocktailById';
import theme from '../styles/theme-design';
import { HomeStackParamList } from '../stacks/HomeStack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<HomeStackParamList, 'CocktailScreen'>;

const CocktailScreen = ({ route }: Props) => {
  const { cocktailId }: { cocktailId: number } = route.params;

  const { isLoading, isError, data, error } = useQuery(['cocktail', cocktailId], () =>
    getCocktailById(cocktailId)
  );

  const cocktail = data?.drinks[0];

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError && error instanceof Error) {
    return <Text>Error: {error.message}</Text>;
  } else if (isError) {
    return <Text>Error</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.view}>
        <View style={styles.container}>
          <Image source={{ uri: cocktail.strDrinkThumb }} style={styles.image} />
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
          <StatusBar style="auto" backgroundColor="#D6ECEC" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.spacing.extralarge,
  },
  view: {
    marginHorizontal: theme.spacing.medium,
    width: theme.size.full,
  },
  subView: {
    paddingHorizontal: theme.spacing.medium,
    width: theme.size.full,
  },
  image: {
    width: theme.size.full,
    height: 300,
    resizeMode: 'cover',
    borderBottomLeftRadius: theme.radius.medium,
    borderBottomRightRadius: theme.radius.medium,
  },
  title: {
    fontSize: theme.fontsize.large,
    fontWeight: 'bold',
    marginTop: theme.spacing.medium,
  },
  subTitle: {
    fontSize: theme.fontsize.medium,
    fontWeight: 'bold',
    marginTop: theme.spacing.large,
  },
  ingredient: {
    fontSize: theme.fontsize.small,
    marginTop: theme.spacing.small,
  },
});

export default CocktailScreen;
