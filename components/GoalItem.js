import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const GoalItem = ({itemDataValue }) => {

  return (
    <View style={styles.listItem}>
      <Text >{itemDataValue}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
  },
});
