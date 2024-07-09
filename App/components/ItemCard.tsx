import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

type props = {
  title: string;
  price: string;
  imageUrl: string;
  in_stock: boolean;
}

const ItemCard: React.FC<props> = ({title, price, imageUrl, in_stock }) => {
    return (
      <View style={styles.cardBackground}>
        <Image style={styles.cardImage} source={{uri: imageUrl}} />
        <Text style={styles.cardItemTitle}>{title}</Text>
        <Text style={styles.cardItemPrice}>{price}</Text>

      </View>
    )
}

const styles = StyleSheet.create({

    cardBackground: {
      width: Dimensions.get("window").width/2.2,
      margin: 6,
      backgroundColor: "#D9DBDC",
      borderRadius: 12,

    },

    cardImage: {
        margin: 8,
        height: Dimensions.get("window").height/4,
    },

    cardItemTitle: {
        color: "black",
        fontSize: 20,
        fontWeight: "900",
        marginLeft: 16,

    },

    cardItemPrice: {
      color: "black",
      fontSize: 16,
      fontWeight: "500",
      marginLeft: 16,
      marginTop: 6,
      marginBottom: 16,
      
  }

});

export default ItemCard;
