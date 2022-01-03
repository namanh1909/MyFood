import React from "react"
import { View, Text, Image, ScrollView } from 'react-native'


const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up"
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery Item"
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals"
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffe & tea"
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desserts"
  }
];

export default function Categories() {
  return (
    <View style={{
      marginTop: 5,
      backgroundColor: 'white',
      paddingVertical: 10,
      paddingLeft: 20,

    }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{
            alignItems: 'center', marginRight: 40
          }}>
            <Image source={item.image} style={{
              width: 50,
              height: 40,
              resizeMode: "contain"
            }} />
            <Text style={{
              fontSize: 13,
              fontWeight: 'bold'
            }} >{item.text}</Text>
          </View>
        ))}

      </ScrollView>
    </View>
  )
}
