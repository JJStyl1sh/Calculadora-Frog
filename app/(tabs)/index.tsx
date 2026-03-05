import { BotaoSapo } from '@/src/components/BotaoSapo';
import { Visor } from '@/src/components/Visor';
import React from 'react';
import { SafeAreaViewBase, StyleSheet, View } from 'react-native';
 
export default function CalculadoraScreen() {
  return(
    <SafeAreaViewBase>
      <View style = {styles.tela}>
        <View style={styles.calculadoraContainer}>
          <Visor expressao = '67 + 67' valorAtual="134"/>
        </View>
        <View style={styles.teclado}>

          <View style={styles.linha}>
            <BotaoSapo titulo="C" corFundo="#EF9A9A" onPress={() => {}}></BotaoSapo>
            <BotaoSapo titulo="CE" corFundo="#FFCC80" onPress={() => {}}></BotaoSapo>
            <BotaoSapo titulo="÷" corFundo="#81C784" onPress={() => {}}></BotaoSapo>
            <BotaoSapo titulo="X" corFundo="#81C784" onPress={() => {}}></BotaoSapo>
          </View>

          <View style={styles.linha}>
            <BotaoSapo titulo="1" onPress={() => {}}></BotaoSapo>
            <BotaoSapo titulo="2" onPress={() => {}}></BotaoSapo>
            <BotaoSapo titulo="3" onPress={() => {}}></BotaoSapo>
            <BotaoSapo titulo="-" corFundo="#81C784" onPress={() => {}}></BotaoSapo>
          </View>

          <View style={styles.linha}>
            <BotaoSapo titulo="4" onPress={() => {}}></BotaoSapo>
            <BotaoSapo titulo="5" onPress={() => {}}></BotaoSapo>
            <BotaoSapo titulo="6" onPress={() => {}}></BotaoSapo>
            <BotaoSapo titulo="+" corFundo="#81C784" onPress={() => {}}></BotaoSapo>
          </View>
          <View style={styles.blocoInferior}>
            <View style={styles.blocoEsquerdo}>
              <View style={styles.linha}>
                <BotaoSapo titulo="7" onPress={() => {}}></BotaoSapo>
                <BotaoSapo titulo="8" onPress={() => {}}></BotaoSapo>
                <BotaoSapo titulo="9" onPress={() => {}}></BotaoSapo>
              </View>

              <View style={styles.linha}>
                <BotaoSapo titulo="0" flex={2.1} onPress={() => {}}></BotaoSapo>
                <BotaoSapo titulo="." onPress={() => {}}></BotaoSapo>
              </View>
            </View>
          </View>  
          <View style={styles.blocoDireito}>
                <BotaoSapo titulo="=" corFundo="#4CAF50" onPress={() => {}}></BotaoSapo>
          </View>
        </View>
      </View>
    </SafeAreaViewBase>
  );
}


const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    padding: 16,
  },
  calculadoraContainer: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    borderRadius: 24,
    overflow: 'hidden',
    elevation: 8,
  },
  teclado: {
    flex: 2,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  linha: {
    flex: 1,
    flexDirection: 'row'
  },
  blocoInferior:{
    flex:2,
    flexDirection: 'row',
  },
  blocoEsquerdo:{
    flex:3
  },
  blocoDireito: {
    flex: 1,
  },
});