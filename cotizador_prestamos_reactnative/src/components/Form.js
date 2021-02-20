import React from "react"
import {StyleSheet, TextInput, View} from "react-native"
import RNPickerSelect from 'react-native-picker-select'
import colors from "../utils/colors"

export default function Form(props) { //props es el nombre 'universal' para los parámetros a pasar
  console.log(props)
  const {setCapital, setInterest, setMonths} = props //desestructuración: sacamos de props las variables a utilizar
  return(
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput 
          placeholder="Cantidad a solicitar"
          keyboardType="numeric"
          style={styles.input}
          onChange={e => setCapital(e.nativeEvent.text)}
        />
        <TextInput 
          placeholder="Interés %" 
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentage]} //Usamos un array para asignarle mas de un style
          onChange={e => setInterest(e.nativeEvent.text)}
        />
      </View>
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => setMonths(value)}
        items={[
          { label: '3 meses', value: 3 },
          { label: '6 meses', value: 6 },
          { label: '12 meses', value: 12 },
          { label: '24 meses', value: 24 },
        ]}
        />
    </View>
  )
}

/**
 * Valor para los estilos que tendrán los distintos elementos en la vista
 */
const styles = StyleSheet.create({
  viewForm: {
    position: "absolute",
    bottom: 0,
    width: "90%",
    paddingHorizontal: 30,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: "center"
  },
  viewInputs: {
    flexDirection: "row" //alineados en fila
  },
  input: {
    height: 50,
    backgroundColor: colors.WHITE_COLOR,
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: "60%",
    marginRight: 3,
    marginLeft: -3,
    marginBottom: 10,
    color: colors.BLACK_COLOR,
    paddingHorizontal: 10
  },
  inputPercentage:{
    width: "40%",
    marginLeft: 5,
  }
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS:{
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.CAPE_COD_COLOR,
    borderRadius: 4,
    color: colors.BLACK_COLOR,
    paddingRight: 30,
    backgroundColor: colors.WHITE_COLOR,
    marginLeft: -5,
    marginRight: -5
  },
  inputAndroid:{
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: colors.CAPE_COD_COLOR,
    borderRadius: 8,
    color: colors.BLACK_COLOR,
    paddingRight: 30,
    backgroundColor: colors.WHITE_COLOR
  }
})