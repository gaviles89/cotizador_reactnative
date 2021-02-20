import React, {useState} from "react"
import {StyleSheet, View, Text, SafeAreaView, StatusBar, Button} from "react-native"
import Form from "./src/components/Form"
import colors from "./src/utils/colors"

export default function App () {
  const [capital, setCapital] = useState(null)//Dentro del useState se asigna el valor inicial de la variable
  const [interest, setInterest] = useState(null)
  const [months, setMonths] = useState(null)
  
  const onSubmit = () => {
    console.log("capital -> ", capital)
    console.log("interest -> ", interest)
    console.log("months -> ", months)
  }
  return(
    <View>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.text}>Cotizador de Préstamos</Text>
        <Form //Pasamos los props al form para poder utilizarlos
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
         />
      </SafeAreaView>
      <View>
        <Text>Resultado</Text>
      </View>
      <View>
        <Button title="Enviar" onPress={onSubmit}/>
        <Text>Footer</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: "center"
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1
  },
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 15
  }
})