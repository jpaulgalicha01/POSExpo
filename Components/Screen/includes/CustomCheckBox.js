import {Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Tools from '../../Tools'

export default function CustomCheckbox({ischecked, onchanged ,label}) {
  return (
    <TouchableOpacity onPress={()=>onchanged(!ischecked)} style={{flexDirection:"row",alignItems:"center",gap:10}}>
        <View style={{
            width:25,
            height:25,
            backgroundColor:ischecked ? Tools.Colors.Button : null,
            borderColor:Tools.Colors.Button,
            borderWidth:1,
            borderRadius:5,
            alignItems:"center",
            justifyContent:"center"
        }}> 
        
        {ischecked ? (<Text style={{fontSize:15,color:Tools.Colors.ButtonText}}>✔</Text>) : null}

        </View>


        <Text style={[{color:Tools.Colors.Background}]}>{label}</Text>
    </TouchableOpacity>
  )
}
