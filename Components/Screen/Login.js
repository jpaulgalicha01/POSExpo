import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import Tools from '../Tools'
import CustomCheckbox from './includes/CustomCheckBox';

export default function Login({navigation}) {
  const [checkbox,setCheckbox] = useState(false);
  
  const windowHeight = useWindowDimensions().height;

  const Login = () =>{
    navigation.navigate(Tools.Routes.HOME_DRAWER_TAB)
  }
  return (
    <SafeAreaView>
        <View style={[Tools.Styles.Container,{minHeight: Math.round(windowHeight)}]}>
        
          <View style={Tools.Styles.Body}>

            <Image
            source={Tools.Icons.User}
            style={{width:100,height:100,alignContent:"center"}}
            />

            {/* Card */}
            <View style={Tools.Styles.Box}>
                <TextInput
                placeholder='Username'
                style={Tools.Styles.TextInput}
                />
                  <TextInput
                placeholder='Password'
                style={Tools.Styles.TextInput}
                secureTextEntry={(checkbox ? (false) : (true) )}
                />
                {/* <Text>Show Password</Text>
                 */}
                <CustomCheckbox ischecked={checkbox} onchanged={()=>setCheckbox(!checkbox)} label={'Show Password'} />

                <TouchableOpacity style={Tools.Styles.Button} onPress={()=>Login()}>
                    <Text style={Tools.Styles.ButtonText}>Login</Text>
                </TouchableOpacity>
                <Text style={{textAlign:"center"}}>Forget Password ?</Text>
            </View>
          </View>
          <View style={Tools.Styles.Footer}>
                <TouchableOpacity><Text style={{textAlign:"center",fontSize:18,color:Tools.Colors.ButtonText,textDecorationLine:"underline"}}>Creat Account</Text></TouchableOpacity>
          </View>
        </View>
        
    </SafeAreaView>
  )
}
