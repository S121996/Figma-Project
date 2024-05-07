import {TextInput } from 'react-native'
import React from 'react'
import { darkgreen } from './Constants'

const Field = props => {
  return (
    <TextInput {...props}
    style ={{borderRadius:80, color:darkgreen,
        paddingHorizontal:10,width:'50%',
    backgroundColor:'rgb(220,220,220)',marginVertical:10}}
    placeholderTextColor={darkgreen}>
      
    </TextInput>
  )
}

export default Field;