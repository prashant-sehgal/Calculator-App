import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IODisplay from './components/IODisplay'
import Colors from './utils/Colors'
import Buttons from './components/Buttons'

export default function App() {
  const [displayText, setDisplayText] = useState('')

  const resetDisplay = () => setDisplayText('')

  const persented = () => {
    setDisplayText((currentState) => {
      return `${Number(currentState) / 100}`
    })
  }

  const oneStepBack = () => {
    setDisplayText((currentState) =>
      currentState.slice(0, currentState.length - 1)
    )
  }

  const displayChar = (key: String) => {
    setDisplayText((currentState) => {
      let newString = ''
      if (
        (key === '+' || key === '-' || key === '÷' || key === 'x') &&
        (currentState[currentState.length - 1] === '+' ||
          currentState[currentState.length - 1] === '-' ||
          currentState[currentState.length - 1] === '÷' ||
          currentState[currentState.length - 1] === 'x')
      ) {
        newString = `${currentState.slice(0, currentState.length - 1)}${key}`
      } else {
        newString = currentState + key
      }

      return newString
    })
  }

  const equate = () => {
    setDisplayText((currentState) => {
      try {
        const formatedString = currentState
          .replace(/x/g, '*')
          .replace(/÷/g, '/')
          .replace('^', '**')
        const result = eval(formatedString)

        return result
      } catch (err: any) {
        return ''
      }
    })
  }

  const keyPressHandler = (key: String) => {
    if (key === 'AC') resetDisplay()
    else if (key === '%') persented()
    else if (key === '⟲') oneStepBack()
    else if (key === '=') equate()
    else displayChar(key)
  }

  return (
    <View style={styles.container}>
      <IODisplay displayText={displayText} />

      <Buttons keyPressHandler={keyPressHandler} />

      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
    height: '100%',
    backgroundColor: Colors.primary,
  },
})
