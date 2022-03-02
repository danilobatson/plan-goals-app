import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Button, Text, Input, Modal, Card, Divider, Layout } from '@ui-kitten/components';
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
        <Layout style={styles.inputContainer}>
          <Card appearance='filled'>
            <Input
              placeholder='Course Goal'
              value={value}
              onChangeText={onChangeText}
              multiline={true}
              style={styles.input}
            />
            <Divider />
            <Layout style={styles.button}
            >
              <Button onPress={() => setVisible(false)} status='danger' >
                {evaProps => <Text {...evaProps}> CANCEL </Text>}
              </Button>
            </Layout >

            <Layout style={styles.button}
            >
              <Button onPress={addToGoalsList} status='success'>
                {evaProps => <Text {...evaProps}> ADD TO GOALS LIST </Text>}
              </Button>
            </Layout>
          </Card>
        </Layout>

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
    padding: '2.5%',
    width: '100%',
  }

});
