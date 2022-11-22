import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import theme from '../styles/theme-design';

const AppDetailsScreen = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
                source={require('../assets/img/our-vision.jpg')}
                style={styles.image}
            />
             <Text style={styles.title}>L&apos;histoire du Gin Tonic</Text>
          </View>
          <Text style={styles.text}>Le Gin Tonic : du cocktail &quot;interdit&quot; au &quot;médicament&quot;. {'\n'}{'\n'} Bien que d&apos;origine hollandaise, le Gin a très rapidement été le spiritueux phare dans le Royaume-Uni du début du XVIIe. {'\n'}Écoulant des litres et des litres, l&apos;alcool de genièvre est très rapidement devenu un problème sociétal, jusqu&apos;à être nommé le &quot;The Mother&apos;s Ruin&quot; (La Briseuse de Famille). {'\n'}{'\n'}Une loi (le Gin Act) est votée en 1741 pour ralentir la consommation du spiritueux, en interdisant la vente de cet alcool sans licence.
          Au début du 19e, on buvait de l&apos;eau &quot;tonique&quot; en Inde. Cette eau était préparée avec de la quinine, une substance naturelle qui était utilisée comme remède au paludisme. Très rapidement, les colonies anglaises (basées dans les territoires de l&apos;Inde) trouvent la bonne idée de mélanger leur gin avec un peu de cette eau &quot;tonique&quot; pour faire passer le goût de l&apos;amertume. {'\n'}{'\n'} De la boisson interdite, le Gin est devenu le Gin Tonic, un ancien &quot;médicament&quot; contre le paludisme et la malaria. Mais à consommer avec modération !</Text>
          <StatusBar style="auto" backgroundColor='#D6ECEC' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    width: theme.size.full,
    paddingHorizontal: theme.spacing.none,
  },
  container: {
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    width:  theme.size.full,
    paddingBottom: theme.spacing.large,
  },   
  image: {
    width: theme.size.full,
    height: 300,
    resizeMode: 'cover',
    borderBottomLeftRadius: theme.radius.medium,
    borderBottomRightRadius: theme.radius.medium,
  },
  title: {
    padding: theme.spacing.small,
    fontSize: theme.fontsize.large,
    fontWeight: 'bold',
    marginTop: theme.spacing.extralarge,
    textAlign: 'center',
  },
  text: {
    paddingHorizontal: theme.spacing.medium,
    paddingVertical: theme.spacing.small,
    fontSize: theme.fontsize.small,
    textAlign: 'left',
  },
});

export default AppDetailsScreen;
