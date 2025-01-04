
import { Pressable, Text, Platform, StyleSheet } from 'react-native'


interface props {
    label: string;
    onPress?: ()=> void;
    onLongPress?: ()=> void;
}  

export const PrimaryButton = ({label, onPress, onLongPress}:props) => {
  return (
    <Pressable style={ ({ pressed }) => [
                styles.button, pressed && styles.buttonPressd
            ]}
                onPress={ () => onPress && onPress()}
                    onLongPress= { () => onLongPress && onLongPress()} >
                    <Text style={{
                        color: Platform.OS === 'android' ? 'black' : '#4746AB' 
                        }}>{label}</Text>
            </Pressable>
  )
}


const styles = StyleSheet.create({

button: {
    backgroundColor: Platform.OS === 'android' ?  '#5856D6': 'yellow',
    paddingHorizontal:  20,
    paddingVertical: 10,
    borderRadius: 10,
    
},
buttonPressd: {
    backgroundColor : Platform.OS === 'android' ? '#4746ab' : 'white'
}

})