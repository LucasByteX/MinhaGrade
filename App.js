import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import Disciplinas from './src/pages/Disciplinas';
import AsyncStorage from '@react-native-async-storage/async-storage';
import grade from './src/Grade/grade.js'

const Drawer= createDrawerNavigator();

export default function App() {

  

  const [cadeiras,setCadeiras] = useState(grade);

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
