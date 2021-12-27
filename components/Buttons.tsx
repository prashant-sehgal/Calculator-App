import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import Colors from '../utils/Colors'
import ButtonComponent from './ButtonComponent'

export default (props: any) => {
  const buttonValues = [
    ['AC', '^', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['⟲', '0', '.', '='],
  ]

  return (
    <View style={styles.container}>
      {buttonValues.map((row) => {
        return (
          <View key={Math.random().toString()} style={styles.row}>
            {row.map((btnValue) => (
              <View key={btnValue}>
                <ButtonComponent
                  btnValue={btnValue}
                  keyPressHandler={props.keyPressHandler}
                />
              </View>
            ))}
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
})
