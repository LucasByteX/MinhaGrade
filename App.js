import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import Disciplinas from './src/pages/Disciplinas';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Drawer= createDrawerNavigator();

export default function App() {



  

  const [cadeiras,setCadeiras] = useState({
          Primeiro: [
              {nome: 'Introdução à Economia',id: '1', requisitos: [], estado : 0},
              {nome: 'Métodos Quantitativos I',id: '2', requisitos: [], estado : 0},
              {nome: 'Introdução às Ciências Sociais',id: '3', requisitos: [], estado : 0},
              {nome: 'Português Instrumental ',id: '4', requisitos: [], estado : 0},
              {nome: 'Formação Econômica Geral',id: '5', requisitos: [], estado : 0}

          ],
          Segundo : [
              {nome: 'Economia Clássica',id: '6', requisitos: [], estado : 0},
              {nome: 'Métodos Quantitativos II',id: '7', requisitos: ['2'], estado : 0},
              {nome: 'Estatística',id: '8', requisitos: ['2'], estado : 0},
              {nome: 'Contabilidade Social',id: '9', requisitos: [], estado : 0},
              {nome: 'Sistemas Econômicos',id: '10', requisitos: [], estado : 0}

          ],
          Terceiro : [
            {nome: 'Economia Marxista I',id: '11', requisitos: ['6'], estado : 0},
            {nome: 'Teoria Microeconômica I',id: '12', requisitos: ['7'], estado : 0},
            {nome: 'Estatística Econômica',id: '13', requisitos: ['8'], estado : 0},
            {nome: 'Teoria Macroeconômica I ',id: '14', requisitos: ['9'], estado : 0},
            {nome: 'Formação Econômica do Brasil I',id: '15', requisitos: [], estado : 0}

          ],
          Quarto: [
            {nome: 'Economia Marxista II',id: '16', requisitos: ['11'], estado : 0},
            {nome: 'Teoria Microeconômica II',id: '17', requisitos: ['12'], estado : 0},
            {nome: 'Econometria I',id: '18', requisitos: ['13'], estado : 0},
            {nome: 'Teoria Macroeconômica II ',id: '19', requisitos: ['12'], estado : 0},
            {nome: 'Formação Econômica do Brasil II ',id: '20', requisitos: ['15'], estado : 0}
          ],
          Quinto: [
            {nome: 'Economia Internacional I ',id: '21', requisitos: ['14','10'], estado : 0},
            {nome: 'Teoria Microeconômica III',id: '22', requisitos: ['17'], estado : 0},
            {nome: 'Contabilidade e Análise de Balanço',id: '23', requisitos: [], estado : 0},
            {nome: 'Teoria Macroeconômica III ',id: '24', requisitos: ['19'], estado : 0},
            {nome: 'Desenvolvimento SócioEconômico I',id: '25', requisitos: [], estado : 0}
          ],
          Sexto: [
            {nome: 'Economia Internacional II',id: '26', requisitos: ['21'], estado : 0},
            {nome: 'Economia do Setor Público',id: '27', requisitos: ['24'], estado : 0},
            {nome: 'Economia Brasileira e Contemporânea I',id: '28', requisitos: [], estado : 0},
            {nome: 'Economia Monetária',id: '29', requisitos: ['14'], estado : 0},
            {nome: 'Desenvolvimento SócioEconômico II',id: '30', requisitos: ['25'], estado : 0}
          ],
          Setimo: [
            {nome: 'História do Pensamento Econômico',id: '31', requisitos: ['16'], estado : 0},
            {nome: 'Economia Industrial ',id: '32', requisitos: ['22'], estado : 0},
            {nome: 'Economia Brasileira e Contemporânea II ',id: '33', requisitos: ['28'], estado : 0},
            {nome: 'Métodos e Técnicas de Pesquisa em Economia ',id: '34', requisitos: [], estado : 0},
            {nome: 'Agricultura e Desenvolvimento Econômico',id: '35', requisitos: [], estado : 0}
          ],
          Oitavo: [
            {nome: 'Elaboração e Análise de Projetos ',id: '36', requisitos: ['22','23'], estado : 0},
            {nome: 'Economia do Nordeste',id: '37', requisitos: [], estado : 0},
            {nome: 'Projeto de Monografia',id: '38', requisitos: ['34'], estado : 0},
            {nome: 'Optativa 1 ',id: '39', requisitos: [], estado : 0},
            {nome: 'Optativa 2',id: '40', requisitos: [], estado : 0}
          ],
          Nono : [
            {nome: 'Monografia',id: '41', requisitos: ['38'], estado : 0},
            {nome: 'Optativa 3',id: '42', requisitos: [], estado : 0},
            {nome: 'Optativa 4',id: '43', requisitos: [], estado : 0},
            {nome: 'Optativa 5',id: '44', requisitos: [], estado : 0},
            {nome: 'Optativa 6',id: '45', requisitos: [], estado : 0}
          ]
          
      });

  useEffect(() => {
  async function getStorage() {
    const cadeiraStorage = await AsyncStorage.getItem('cadeiras');

    if (cadeiraStorage !== null) {
      setCadeiras(JSON.parse(cadeiraStorage));
    }
  }

  getStorage();
}, []);

  useEffect(() => {
  async function saveStorage() {
    await AsyncStorage.setItem(
      'cadeiras',
      JSON.stringify(cadeiras)
    );
  }

  saveStorage();
}, [cadeiras]);




  return (
    <NavigationContainer>
        <Drawer.Navigator>
        <Drawer.Screen name="Primeiro">
          {() => (
            <Disciplinas
              cadeiras={cadeiras}
              setCadeiras={setCadeiras}
              semestre="Primeiro"
            />
          )}
        </Drawer.Screen>

        <Drawer.Screen name="Segundo">
          {() => (
            <Disciplinas
              cadeiras={cadeiras}
              setCadeiras={setCadeiras}
              semestre="Segundo"
            />
          )}
        </Drawer.Screen>

        <Drawer.Screen name="Terceiro">
          {() => (
            <Disciplinas
              cadeiras={cadeiras}
              setCadeiras={setCadeiras}
              semestre="Terceiro"
            />
          )}
        </Drawer.Screen>

        <Drawer.Screen name="Quarto">
          {() => (
            <Disciplinas
              cadeiras={cadeiras}
              setCadeiras={setCadeiras}
              semestre="Quarto"
            />
          )}
        </Drawer.Screen>

        <Drawer.Screen name="Quinto">
          {() => (
            <Disciplinas
              cadeiras={cadeiras}
              setCadeiras={setCadeiras}
              semestre="Quinto"
            />
          )}
        </Drawer.Screen>

        <Drawer.Screen name="Sexto">
          {() => (
            <Disciplinas
              cadeiras={cadeiras}
              setCadeiras={setCadeiras}
              semestre="Sexto"
            />
          )}
        </Drawer.Screen>

        <Drawer.Screen name="Setimo">
          {() => (
            <Disciplinas
              cadeiras={cadeiras}
              setCadeiras={setCadeiras}
              semestre="Setimo"
            />
          )}
        </Drawer.Screen>

        <Drawer.Screen name="Oitavo">
          {() => (
            <Disciplinas
              cadeiras={cadeiras}
              setCadeiras={setCadeiras}
              semestre="Oitavo"
            />
          )}
        </Drawer.Screen>

        <Drawer.Screen name="Nono">
          {() => (
            <Disciplinas
              cadeiras={cadeiras}
              setCadeiras={setCadeiras}
              semestre="Nono"
            />
          )}
        </Drawer.Screen>

      


      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
