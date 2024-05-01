import {SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import Tools from '../Tools'
import Headers from './includes/Headers'

export default function Cashier({navigation}) {
  return (
    <SafeAreaView>
        <View style={Tools.Styles.Container}>
            <Headers title={"Cashier"} navigation={navigation}/>
        </View>
    </SafeAreaView>
  )
}
