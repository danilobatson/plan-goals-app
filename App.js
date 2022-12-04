import React, { useState } from 'react'; 
import { StyleSheet, View, FlatList, } from 'react-native';
import { GoalInput } from './components/GoalInput'
import { GoalItem } from './components/GoalItem'
import * as eva from '@eva-design/eva';
import { ApplicationProvider} from '@ui-kitten/components';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    if (!enteredText) {
      return
    }
    setEnteredGoal(enteredText)
  }


  const addGoalHandler = () => {
    if (!enteredGoal) {
      alert('No Goal Entered')
      return
    }
    setCourseGoals(currentGoals =>
      [...currentGoals,
        { id: Math.random().toString(), value: enteredGoal }])
    setEnteredGoal('')
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };



  return (
    <ApplicationProvider {...eva} theme={eva.light}>
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
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
});
