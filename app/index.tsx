import CalculatorBotton from '@/components/CalculatorBotton'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/theme'
import { useCalculator } from '@/hooks/useCalculator'
import { globalStyles } from '@/styles/global-styles'
import { View, Text } from 'react-native'

const CalculatorApp = () => {

  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  } = useCalculator()

  return (
    <View style={globalStyles.calculatorContainer}>

      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant='h1'>{ formula }</ThemeText>

        {
          formula === prevNumber ? (
            <ThemeText variant='h2'> </ThemeText>
          ) : (
            <ThemeText variant='h2'>{ prevNumber }</ThemeText>
          )
        }

      </View>

      {/* Filas de botones */}
      <View style={globalStyles.row}>
        <CalculatorBotton blackText color={Colors.ligthGray} label='C' onPress={clean} />
        <CalculatorBotton blackText color={Colors.ligthGray} label='+/-' onPress={toggleSign} />
        <CalculatorBotton blackText color={Colors.ligthGray} label='del' onPress={deleteLast} />
        <CalculatorBotton color={Colors.orange} label='÷' onPress={divideOperation} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton label='7' onPress={() => buildNumber('7')} />
        <CalculatorBotton label='8' onPress={() => buildNumber('8')} />
        <CalculatorBotton label='9' onPress={() => buildNumber('9')} />
        <CalculatorBotton color={Colors.orange} label='X' onPress={multiplyOperation} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton label='4' onPress={() => buildNumber('4')} />
        <CalculatorBotton label='5' onPress={() => buildNumber('5')} />
        <CalculatorBotton label='6' onPress={() => buildNumber('6')} />
        <CalculatorBotton color={Colors.orange} label='-' onPress={subtractOperation} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton label='1' onPress={() => buildNumber('1')} />
        <CalculatorBotton label='2' onPress={() => buildNumber('2')} />
        <CalculatorBotton label='3' onPress={() => buildNumber('3')} />
        <CalculatorBotton color={Colors.orange} label='+' onPress={addOperation} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton label='0' doubleSize onPress={() => buildNumber('0')} />
        <CalculatorBotton label='.' onPress={() => buildNumber('.')} />
        <CalculatorBotton color={Colors.orange} label='=' onPress={calculateResult} />
      </View>

    </View>
  )
}

export default CalculatorApp