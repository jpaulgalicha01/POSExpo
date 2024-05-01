import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Tools from '../../Tools'

export default function CustomDrawer(prop) {
  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...prop}
            contentContainerStyle={{backgroundColor:Tools.Colors.Button}}
        > 
            <View style={{padding:20,height:150,justifyContent:"center"}}>
              <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
                <Image
                source={Tools.Icons.User}
                style ={{
                  width:50,
                  height:50,
                  borderRadius:50
                }}
                />
                <Text style={Tools.Styles.HeadersText}>USER 1</Text>
              </View>
            </View>
           
           <View style={{paddingTop:10,backgroundColor:Tools.Colors.White}}>
                <DrawerItemList {...prop}/>
           </View>
        </DrawerContentScrollView>
    </View>
  )
}
