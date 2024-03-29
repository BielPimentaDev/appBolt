import { View, Text, Image, Button, Pressable } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from 'react'
import { StyleSheet , ImageBackground} from 'react-native';
import { TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { StatusBar } from 'react-native-web';
import {LinearGradient} from 'expo-linear-gradient'

export default function Login({ navigation }) {
  return (
    <View style={styles.container}> 
    <StatusBar/>
      <ImageBackground style={{flex:1, alignItems:"center"}} source={require('../../assets/imgs/fundo.png')}>


      <Image style={styles.logo} source={require('../../assets/imgs/logo_sem_fundo.png')}/>

      <View style={{width:'80%'}}>
      <TextInput style={styles.textInput} placeholder='Type your emai...'/>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Type your password...'/>
        <AntDesign style={styles.icon} name="eyeo" size={32} color="black" />
      </View>
      <View style={styles.textContainer}>
      <View style={{flexDirection:'row', alignItems: 'center'}}>
      <BouncyCheckbox fillColor='#02FFE3' iconStyle={{borderRadius:5, width:20,height:20, borderWidth: 2}}/>
          <Text style={styles.text}>Remember Me</Text>
      </View>
        <Text style={styles.text}>Forgot password?</Text>
      </View>

      <Pressable style={styles.button} onPress={() => navigation.navigate('Tabs')}>
        <Text>Login</Text>
      </Pressable>
      
      </View>
     
    
     
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    width:'100%',
    backgroundColor:'#031E1C'
    
  },
	logo: {
    width:200,
    height:200,
   
  },
  textInput: {
    height:50,
    width:'100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginVertical: 10
  },
  inputContainer:{
 
    position:'relative'
  },
  icon:{
    position:'absolute',
    top:'30%',
    right:10,
    opacity:0.2
    
  },
  button:{
    width:'100%',
    height:50,
    backgroundColor:'#02FFE3',
    borderRadius: 12,
    justifyContent:'center',
    alignItems:'center',
    marginTop: 30,
  },

  text:{
    color : '#00EBFE',
    fontSize: 10,
    fontFamily: 'mont'
  },
  textContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingVertical:10
  },
  checkbox:{
    borderRadius:0
  }
  ,



 

});
