import { View, Text, StyleSheet } from 'react-native'
import Colors from '../utils/Colors'

export default (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.ioText}>{props.displayText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '40%',
    backgroundColor: Colors.primary,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: '10%',
  },
  ioText: {
    fontSize: 40,
    color: 'white',
  },
})
