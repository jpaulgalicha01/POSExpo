import {Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Tools from '../../Tools'

export default function Headers({title,navigation}) {
  return (
    <View style={Tools.Styles.Headers}>
      <View style={{flex:1}}>
        <Text style={Tools.Styles.HeadersText}>{title}</Text>
      </View>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <Image
            source={Tools.Icons.Menu}
            style={{width:30,height:30,tintColor:Tools.Colors.White}}
            />
        </TouchableOpacity>
    </View>
  )
}
