import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../Components/Categories'
import HeaderTab from '../Components/HeaderTab'
import RestaurantItem, { localRestaurants } from '../Components/RestaurantItem'
import SearchBar from '../Components/SearchBar'

const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

export default function Home() {


  const [restaurantData, setRestaurantData] = useState(localRestaurants)

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=LosAngeles`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [])
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: "#eee",
    }}>
      <View style={{ backgroundColor: "white", padding: 15, marginTop: 20 }}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} >
        <Categories />
        <RestaurantItem restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  )
}
