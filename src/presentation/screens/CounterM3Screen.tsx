
import { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native'
import { globalStyles } from '../theme/globalStyles'
import { PrimaryButton } from '../components'
import { FAB } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'



export const CounterM3Screen = () => {


    const [count, setCount] = useState(100)




  return (
    <View  style={globalStyles.CenterContainer}>
        <Text style={globalStyles.title}>{count}</Text>
        
        <Icon
        name='accessibility-outline'
        size={25}
        ></Icon>

        <FAB 
        //label='+ 1'
        onPress={() => setCount(count + 1)}
        onLongPress={()=> setCount(0)}
        style={globalStyles.fab}
        
        //icon={()=> <Icon name='accessibility-outline'size={20}></Icon>}
        icon='add-outline'
        />
        
         
        
    </View>
  )
}



