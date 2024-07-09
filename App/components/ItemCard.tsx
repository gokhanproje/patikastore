import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type props = {
  title: string;
  price: string;
  imageUrl: string;
  in_stock: boolean;
}

const ItemCard: React.FC<props> = ({title, price, imageUrl, in_stock }) => {
    return (
      <TouchableOpacity activeOpacity={.7}  style={styles.cardBackground}>
        <View style={styles.imageView}>
        <Image style={styles.cardImage} source={{uri: imageUrl}} />
        </View>
        <Text style={styles.cardItemTitle}>{title}</Text>
        {in_stock ? <Text  style={styles.cardItemPrice}>{price}</Text> : <Text  style={styles.cardNotInStock}>STOKTA YOK</Text> }
        

      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    cardBackground: {
      flex: 1,
      width: Dimensions.get("window").width/2.2,
      margin: 6,
      backgroundColor: "#D9DBDC",
      borderRadius: 12,

    },

    imageView: {
      margin: 8,
      backgroundColor: "white",
    },

    cardImage: {
        resizeMode: "contain",
        
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
  },

  cardNotInStock: {
    color: "red",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 16,
    marginTop: 6,
    marginBottom: 16,
}


});

export default ItemCard;
