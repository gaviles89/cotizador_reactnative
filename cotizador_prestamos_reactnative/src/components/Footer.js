import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import colors from '../utils/colors'

export default function Footer(props) {
  console.log(props)//<- Para ver que viene en 'props' es recomendable omprimirlo en consola
  const {calculate} = props 
  return (
    <View style={styles.viewFooter}>
      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.text}>CALCULAR</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  viewFooter: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: colors.PRIMARY_COLOR,
    height: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    padding: 16, //Toma todos los lados de la view para asignarle el mismo espaciado
    borderRadius: 22,
    width: "75%"

  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: colors.WHITE_COLOR,
    textAlign: "center"
  }
})

