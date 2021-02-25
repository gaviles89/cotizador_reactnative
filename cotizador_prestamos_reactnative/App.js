import React, {useState} from "react"
import {StyleSheet, View, Text, SafeAreaView, StatusBar, Button} from "react-native"
import Form from "./src/components/Form"
import Footer from "./src/components/Footer";
import colors from "./src/utils/colors"

export default function App () {
  const [capital, setCapital] = useState(null)//Dentro del useState se asigna el valor inicial de la variable
  const [interest, setInterest] = useState(null)
  const [months, setMonths] = useState(null)
  const [total, setTotal] = useState(null)

  const calculate = () => {
    console.log("capital -> ", capital)
    console.log("interest -> ", interest)
    console.log("months -> ", months)
    if (!capital) {
      console.log("Ingresa una cantidad a solicitar")
    }else if(!interest){
      console.log("Ingresa el interés del préstamo")
    }else if(!months){
      console.log("Selecciona los meses en los que se pagará el préstamo")
    }else{
      console.log("OK ^-^/")
      const i = interest / 100
      //fee = tarifa
      const fee = capital / ((1 - Math.pow(i + 1,-months)) / i)
      console.log(fee.toFixed(2)) // toFixed(n), la n indica el número de decimales a mostrar
      setTotal({
        monthlyFee: fee.toFixed(2),
        total: (fee * months).toFixed(2)
      })
    }
  }
  return(
    <View style={{height: "100%"}}>
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
      <View style={{flex:1}}>
        {/* Se puede asignar parámetros propios para envíar datos a los componentes */}
        <Footer calculate={calculate}/>
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