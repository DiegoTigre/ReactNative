import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
       {/* <Text style={styles.title}>Box object Model</Text> */}
       <View style={styles.purpleBox}>
        <Text>Hola Mundo</Text>
       </View>
          
     </View>
  )
}


const styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'red'

    },
    title: {
        fontSize: 30,
        paddingHorizontal:30,
        paddingVertical: 10,
        borderWidth: 10,

    },
    purpleBox: {
        height:30,
        backgroundColor: 'purple',
        margin:20 
    }
})