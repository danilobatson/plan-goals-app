import React, { useState } from 'react';
import { StyleSheet, View, FlatList, } from 'react-native';
import { GoalInput } from './components/GoalInput'
import { GoalItem } from './components/GoalItem'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals =>
      [...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }])
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };



  return (
    <View style={styles.container}>
      <GoalInput value={enteredGoal} onChangeText={goalInputHandler} onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
});
