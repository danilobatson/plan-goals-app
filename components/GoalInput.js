import React from 'react';
import { StyleSheet, View, Button, TextInput} from 'react-native';

export const GoalInput = ({value, onChangeText, onPress}) => {

  return (
      <View style={styles.container}>
      <TextInput placeholder="Course Goal" style={styles.input} onChangeText={onChangeText} value={value} />
      <Button title="ADD" onPress={onPress} />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  }
});
