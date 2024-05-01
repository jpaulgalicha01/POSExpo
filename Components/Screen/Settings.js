import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import Tools from '../Tools'
import Headers from './includes/Headers'

export default function Settings({navigation}) {
  return (
   <SafeAreaView>
          <View style={Tools.Styles.Container}>
            <Headers title={"Settings"} navigation={navigation}/>


          </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({})