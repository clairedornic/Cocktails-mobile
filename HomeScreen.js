import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image, FlatList, SafeAreaView } from 'react-native';
import { useQuery } from '@tanstack/react-query'
import getCocktails from './api/getCocktails';

const HomeScreen = ({ navigation }) => {

  const { isLoading, isError, data, error } = useQuery(['cocktails'], getCocktails);

  const cocktails = data?.drinks;
  console.log(cocktails);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Image
              source={require('./assets/cocktail.png')}
              style={{ width: 200, height: 300 }}
            />
          <Text style={styles.title}>Gin's Coquetel</Text>
          <FlatList
            data={cocktails}
            renderItem={({item}) => <Text style={styles.item}>{item.strDrink}</Text>}
          />
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
  },
  scrollView: {
    marginHorizontal: 20,
    width: '100%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: '35px',
  }
});

export default HomeScreen;
