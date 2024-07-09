/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import ItemCard from "./components/ItemCard";

import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import stock from "./stock.json";

interface CardItem {
  id: number;
  title: string;
  imgURL: string;
  price: string;
  inStock: boolean;
}

function App(): React.JSX.Element {

  const renderItemCard = ({ item }: { item: CardItem }) => (

    <ItemCard
      title={item.title}
      price={item.price}
      imageUrl={item.imgURL}
      in_stock={item.inStock}
    />

  );

  return (

    <SafeAreaView style={styles.backgroundStyle}>

      <FlatList
        ListHeaderComponent={
          <View>
            <Text style={styles.appTitle}>PatikaStore</Text>
            <View style={styles.searchBarView}>
              <TextInput placeholder='Ara...'>

              </TextInput>

            </View>
          </View>}
        numColumns={2}
        data={stock}
        renderItem={renderItemCard}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {

  },

  appTitle: {
    color: "purple",
    fontSize: 36,
    fontWeight: "900",
    marginLeft: 16,

  },

  searchBarView: {
    backgroundColor: "#D9DBDC",
    margin: 12,
    borderRadius: 200,
    paddingLeft: 12,
  },

  searchBar: {

  }

});

export default App;
