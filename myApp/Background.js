import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground source={require("./src/assets/leaves.jpg")}
      style={{height:"100%"}}/>
      <View style={{position:'absolute'}}>{children}</View>
    </View>
  )
}

export default Background