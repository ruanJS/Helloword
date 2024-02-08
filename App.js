import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function App (){
  return (
    <View style={styles.container}>
      <Text>Olá mundo!!!</Text>
      <Text>Linha 2</Text>
      <Text>Linha 3</Text>
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