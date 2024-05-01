import {StyleSheet } from "react-native"
import Colors from "./Colors"

const Styles = StyleSheet.create({
    Container: {
        width:"100%",
        height:"100%",
        backgroundColor:Colors.Headline
    },
    Body:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        rowGap:50
    },

    Body1:{
        padding:20,
        rowGap:20
    },

    Box:{
        width:"100%",
        height:"50%",
        padding:20,
        rowGap:20
    },
    TextInput:{
        borderBottomWidth:.5,
        padding:10,
    },
    Button:{
        backgroundColor:Colors.Button,
        padding:15,
        borderRadius:10
    },
    ButtonText:{
        textAlign:"center",
        fontSize:20,
        color:Colors.ButtonText
    },
    Footer:{
        padding:15,
        backgroundColor:Colors.Button,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        position: 'absolute', 
        left: 0, 
        right: 0, 
        bottom: 0
    },
    Headers:{
        backgroundColor:Colors.Button,
        borderTopWidth:.7,
        borderColor:Colors.White,
        padding:15,
        flexDirection:"row",
        alignItems:"center"
    },
    HeadersText:{
        fontSize:20,
        color:Colors.White
    },

    Card:{
        padding:20,
        borderRadius:10,
        alignItems:"center",
        rowGap:10,
        elevation:5,
        shadowOffset:{height:10,width:10},
        shadowOpacity:.50,
        shadowRadius:10
    }
})

export default Styles