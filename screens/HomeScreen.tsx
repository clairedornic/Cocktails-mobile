import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, TouchableOpacity, RefreshControl } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import getCocktails from '../api/getCocktails';
import theme from '../styles/theme-design';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const HomeScreen = ({ navigation }) => {

  //desconstruction classique
  const { isLoading, isError, data, error, refetch, isRefetching } = useQuery(['cocktails'], getCocktails);

  //Descontruction directement à partir de la variable
  const cocktails = data?.drinks;

  const [refreshing, setRefreshing] = React.useState(false);
  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refetch().finally(() => setRefresh(false));
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Gin&apos;s Coquetel</Text>
            <Image
                source={require('./assets/img/cocktail.png')}
                style={styles.image}
            />
          </View>
          <Text style={styles.subtitle}>Our bangers</Text>
          <FlatList
            nestedScrollEnabled
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            } 
            data={cocktails}
            style={styles.list}
            renderItem={({item}) =><TouchableOpacity style={styles.itemList} onPress={() => {navigation.navigate('CocktailScreen', {cocktailId: item.idDrink})}}><Text>{item.strDrink}</Text></TouchableOpacity>}
          />
          <StatusBar style="auto" backgroundColor='#D6ECEC' />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: theme.size.full,
    justifyContent: 'space-around',
    paddingHorizontal: theme.spacing.none,
    paddingTop: theme.spacing.large,
  },
  container: {
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    width:  theme.size.full,
    paddingBottom: theme.spacing.large,
    height: theme.size.full,
  },   
  image: {
    width: 100, 
    height: 150,
    marginTop: theme.spacing.extraLarge,
    marginBottom: theme.spacing.extraLarge,
  },
  title: {
    padding: theme.spacing.small,
    fontSize: theme.fontSize.large,
    fontWeight: 'bold',
    marginTop: theme.spacing.extraLarge,
    width: '40%',
    textAlign: 'left',
  },
  subtitle: {
    fontSize:  theme.fontSize.medium,
    fontWeight: 'bold',
    width: theme.size.full,
    padding: theme.spacing.small,
  },
  list: {
    width: theme.size.full,
    paddingLeft: theme.spacing.small,
    paddingRight: theme.spacing.small,
  },
  itemList: { 
    marginVertical: theme.spacing.thin,
    paddingVertical: theme.spacing.extraSmall,
    paddingHorizontal: theme.spacing.extraSmall,
    borderRadius: theme.radius.small,
    backgroundColor: theme.colors.lightBlue,
    width: theme.size.full,
  }
});

export default HomeScreen;