import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { HelloWordScreen } from './src/presentation/screens/HelloWordScreen'
import { CounterScreen } from './src/presentation/screens/CounterScreen'
import { PaperProvider } from 'react-native-paper'
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen'
import { DimensionScreen } from './src/presentation/screens/DimensionScreen'
import { PositionScreen } from './src/presentation/screens/PositionScreen'

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <Ionicon {...props} />
      }}
    >
    <SafeAreaView style={{ flex:1 }}>
     {/* <HelloWordScreen name='Diego Rivera'/> */}
     {/* <CounterScreen/> */}
     {/*<CounterM3Screen/>*/}
     {/*<BoxObjectModelScreen/>*/}
     {/*<DimensionScreen/>*/}
     <PositionScreen/> 
    </SafeAreaView>
    </PaperProvider>
      
  )
}
