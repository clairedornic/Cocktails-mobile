import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image, FlatList, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useQuery } from '@tanstack/react-query'
import getCocktails from './api/getCocktails';
import searchCocktailByName from './api/getCocktails';


const HomeScreen = ({ navigation }) => {

  //desconstruction classique
  const { isLoading, isError, data, error } = useQuery(['cocktails'], getCocktails);

  //Descontruction directement à partir de la variable
  const cocktails = data?.drinks;

  // Future search by name
  // const { isLoading, isError, data, error } = useQuery(['cocktails', textSearch], searchCocktailByName);
  // const [textSearch, onChangeText] = React.useState("");
  
  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Gin's Coquetel</Text>
          <Image
              source={require('./assets/cocktail.png')}
              style={styles.image}
          />
        </View>
         <Text style={styles.subtitle}>Our bangers</Text>
        {/* <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search a cocktail with Gin"
        /> */}
        <FlatList
          data={cocktails}
          style={styles.list}
          renderItem={({item}) =><TouchableOpacity style={styles.itemList} onPress={() => {navigation.navigate('CocktailScreen', {cocktailId: item.idDrink})}}><Text>{item.strDrink}</Text></TouchableOpacity>}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
    paddingRight: 20,
    paddingTop: 25,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  image: {
    width: 100, 
    height: 150,
    marginTop: 35,
    marginBottom: 35,
  },
  title: {
    padding: 15,
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 35,
    width: '40%',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    padding: 15,
  },
  list: {
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  itemList: { 
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor:'#D6ECEC'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default HomeScreen;
