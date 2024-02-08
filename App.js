import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function App (){
  return (
    <View style={styles.container}>
      <Text>Ruan Guedes</Text>
      <Text>FIAP</Text>
      <Text>Análise e Desenvolvimento de Sistemas - ADS</Text>
      <Text>2TDSR</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;