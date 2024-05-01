import { Button, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Headers from './includes/Headers'
import Tools from '../Tools'

export default function Home({navigation}) {
  return (
    <SafeAreaView>
        
        <View style={Tools.Styles.Container}>
            <Headers title={"Home"} navigation={navigation}/>


            <View style={Tools.Styles.Body1}>
                
                <TouchableOpacity style={[Tools.Styles.Card,{backgroundColor:Tools.Colors.Button}]} onPress={()=>navigation.navigate(Tools.Routes.DeviceList)}>
                    <Image
                    source={Tools.Icons.Printer}
                    style={{width:40,height:40,tintColor:Tools.Colors.ButtonText}}
                    />
                    <Text style={{fontSize:20,color:Tools.Colors.ButtonText}}>Printer List</Text>
                </TouchableOpacity>

                <View style={{flexDirection:"row",justifyContent:"space-between",gap:20}}>
                    <View style={{flex:1,}}>
                        <TouchableOpacity style={[Tools.Styles.Card,{backgroundColor:Tools.Colors.Danger}]} onPress={()=>navigation.navigate(Tools.Routes.CASHIER)}>
                            <Image
                            source={Tools.Icons.Cashier}
                            style={{width:40,height:40,tintColor:Tools.Colors.ButtonText}}
                            />
                            <Text style={{fontSize:20,color:Tools.Colors.ButtonText}}>Cashier</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={[Tools.Styles.Card,{backgroundColor:Tools.Colors.Tertiary}]}>
                        <Image
                        source={Tools.Icons.Inventory}
                        style={{width:40,height:40,tintColor:Tools.Colors.ButtonText}}
                        />
                        <Text style={{fontSize:20,color:Tools.Colors.ButtonText}}>Inventory</Text>
                    </TouchableOpacity>
                    
                    
                </View>

                <TouchableOpacity style={[Tools.Styles.Card,{backgroundColor:Tools.Colors.Black}]}>
                    <Image
                    source={Tools.Icons.Products}
                    style={{width:40,height:40,tintColor:Tools.Colors.ButtonText}}
                    />
                    <Text style={{fontSize:20,color:Tools.Colors.ButtonText}}>Add Product</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[Tools.Styles.Card,{backgroundColor:Tools.Colors.Secondary}]}>
                    <Image
                    source={Tools.Icons.Sales}
                    style={{width:40,height:40,tintColor:Tools.Colors.ButtonText}}
                    />
                    <Text style={{fontSize:20,color:Tools.Colors.ButtonText}}>Sales Report</Text>
                </TouchableOpacity>

            </View>

        </View>
    </SafeAreaView>
  )
}
