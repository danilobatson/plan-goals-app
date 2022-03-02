import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView } from 'react-native';
import { GoalInput } from './components/GoalInput'
import { GoalItem } from './components/GoalItem'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals([...courseGoals,
    { id: Math.random().toString(), value: enteredGoal }])
  }
  return (
    <View style={styles.container}>
      <GoalInput value={enteredGoal} onChangeText={goalInputHandler} onPress={addGoalHandler} />
      <FlatList
        keyExtractor={(item, idx) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem itemDataValue={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
});
