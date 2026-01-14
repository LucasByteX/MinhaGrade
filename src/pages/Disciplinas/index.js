import React, { useState,useEffect } from 'react';
import {View,Text,StyleSheet,Button,FlatList,TouchableOpacity} from 'react-native';
import Matriz from './Matriz';


export default function Disciplinas({cadeiras, setCadeiras,semestre}) {


    useEffect(() => {
  setCadeiras(prev => {
    let mudou = false;

    // junta todas as cadeiras em um array só
    const todas = Object.values(prev).flat();

    // cria uma nova estrutura
    const novoEstado = {};

    for (const semestre in prev) {
      novoEstado[semestre] = prev[semestre].map(cadeira => {
        // só valida quem está ativa
        if (cadeira.estado === 1 && cadeira.requisitos.length > 0) {
          const requisitosOk = cadeira.requisitos.every(reqId =>
            todas.some(c => c.id === reqId && c.estado === 1)
          );

          if (!requisitosOk) {
            mudou = true;
            return { ...cadeira, estado: 0 };
          }
        }

        return cadeira;
      });
    }

    // evita loop infinito
    return mudou ? novoEstado : prev;
  });
}, [cadeiras]);



    
    function alterarEstado(periodo, id) {
        setCadeiras(prev => ({
            ...prev,
            [periodo]: prev[periodo].map(item =>
            item.id === id
                ? { ...item, estado: item.estado === 1 ? 0 : 1 }
                : item
        )
    }));
}

    
     
    return(

        <View style={styles.container1}>
            <FlatList 
            data= {cadeiras[semestre]}
            renderItem={({item}) => <Matriz data={item} onPress= {alterarEstado} semestre={semestre}cadeiras={cadeiras}/>}
            contentContainerStyle={styles.Lista}
            
            
            />
        </View>


    );



}




const styles = StyleSheet.create ({

    container1: {
        flex:1,
        backgroundColor: '#FFF',
        marginTop:20,
        alignItems: 'center'
    

    },
    containerL: {
        backgroundColor: 'green',
        padding:40,
        marginTop:20,
        height:100,
        width:250,
        borderRadius:20,
        borderWidth:1
        
    },

    texto: {
        textAlign: 'center',
        color: '#FFF'
    },

    Lista: {
        justifyContent: 'flex-start',
        alignItems: 'center'
        
    }


});
