import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Button, Text, Input, Modal, Card, ButtonGroup } from '@ui-kitten/components';
import EStyleSheet from 'react-native-extended-stylesheet';



export const GoalInput = ({ value, onChangeText, onAddGoal }) => {
  const [visible, setVisible] = useState(false);

  const addToGoalsList = () => {
    onAddGoal()
    setVisible(false);
  }

  return (
    <>

      <Button onPress={() => setVisible(!visible)}>
        ADD GOALS
      </Button>


      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <View style={styles.inputContainer}>
          <Card >
            <Input
              placeholder='Course Goal'
              value={value}
              onChangeText={onChangeText}
              multiline={true}
              style={styles.input}
            />

            <Button style={styles.button} onPress={addToGoalsList} >
              {evaProps => <Text {...evaProps}> ADD TO GOALS LIST </Text>}
            </Button>
          </Card>
        </View>

      </Modal>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    padding: 10,
    width: '100%',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  button: {
    width: '100%',
  },
});
