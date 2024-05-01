import {FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Tools from '../Tools'

export default function DeviceList() {

    const [devices,setDevices] = useState([
        {name:"test",address:"12333"},
    ]);


  return (
    <SafeAreaView>
        <View style={Tools.Styles.Container}>
            <View style={Tools.Styles.Body1}>

            <View style={{flexDirection:"row",gap:20,alignItems:"center"}}>
                <View style={{flex:1}}>
                    <Text style={[{fontSize:20}]}>Available Devices</Text>
                </View>
                <Text>Printer Status: <Text style={{color:"green"}}>Connected</Text></Text>
            </View>

                    <FlatList
                    data={devices}
                    keyExtractor={item => item.address}
                    renderItem={({item}) =>(
                        <TouchableOpacity style={{paddingVertical:10,alignContent:"center",justifyContent:"center"}} key={item.address} >
                            <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
                                <Image
                                    source={Tools.Icons.Bluetooth}
                                    style={{width:30,height:30}}
                                />
                                <Text style={[{fontSize:20}]}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    />
            </View>
        </View>
    </SafeAreaView>
  )
}
