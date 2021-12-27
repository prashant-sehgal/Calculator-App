import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import Colors from '../utils/Colors'

export default (props: any) => {
  const btnStyle = (key: String) => {
    if (key === 'AC' || key === '^' || key === '%') {
      return { ...styles.btnText, color: '#49cb83' }
    } else if (
      key === '+' ||
      key === 'x' ||
      key === '-' ||
      key === '÷' ||
      key === '='
    ) {
      return { ...styles.btnText, color: '#cb4949' }
    } else {
      return { ...styles.btnText }
    }
  }

  return (
    <TouchableNativeFeedback
      onPress={props.keyPressHandler.bind(this, props.btnValue)}
    >
      <View style={styles.container}>
        <Text style={btnStyle(props.btnValue)}>{props.btnValue}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  btnText: {
    fontSize: 27,
    color: 'white',
  },
})
