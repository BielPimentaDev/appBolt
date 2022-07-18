import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { Txt, TxtBg } from '../../common/styles/styles'
import { AppContext } from '../../context/AppContext'

export default function BatteryCount() {
  const {battery, totalBatery, balance} = useContext(AppContext)
  console.log(battery)
  return (
    <View style={styles.container}>
      <Txt>Battery</Txt>
      <View style={styles.squareContainer}>
            <View style={styles.square}>
              
            </View>
            <View style={styles.square}>
             
            </View>
            <View style={styles.square}>
              
            </View>
            <View style={styles.squareDesable}>
              
            </View>
      </View>
      
     
      <TxtBg>{Math.round(battery)}%</TxtBg>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly'
},
    square:{
        width: '25%',
        height: 10,        
        backgroundColor: '#02FFE3',
        margin:15,
        shadowColor: '#02FFE3',
        shadowOffset: {width:20, height:30},
         shadowRadius: 16,
         elevation: 16,
         shadowOpacity: 0.8,
        //  opacity: 0.3
        
       
    },squareDesable:{
      width: '25%',
      height: 10,
      
      backgroundColor: '#3F6562',
      margin:15,
      shadowColor: '#02FFE3',
      shadowOffset: {width:20, height:30},
       shadowRadius: 16,
       elevation: 16,
       shadowOpacity: 0.8,
    },
    batteryContent:{
       height:'100%',
       width:'70%',
       backgroundColor: '#02FFE3',       
    },
    squareContainer:{
        flexDirection: 'row',
        width: '35%',
       justifyContent:'space-evenly'
    }

});