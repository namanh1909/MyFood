import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const HeaderButton = (props) => {
  return (
    <View>
      <TouchableOpacity style={{
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        marginVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        height: 30,
      }}
        onPress={() => props.setActiveTab(props.text)}
      >
        <Text style={{
          color: props.activeTab === props.text ? "white" : "black",
          lineHeight: 30,
          fontWeight: 'bold'
        }}>{props.text}</Text>
      </TouchableOpacity>
    </View>)

}

export default function HeaderTab() {

  const [activeTab, setActiveTab] = useState("Delivery")

  return (
    <View style={styles.tab}>
      <HeaderButton text="Delivery" btnColor="black" textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab} />
      <HeaderButton text="Pickup" btnColor="white" textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab} />
    </View>
  )
}



const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
})