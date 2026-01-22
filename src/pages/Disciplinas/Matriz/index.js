import React, { useState } from 'react';
import {View,Text,StyleSheet,Button,FlatList,TouchableOpacity} from 'react-native';







export default function Matriz ({ data,onPress,semestre,cadeiras }) {



    function requisitosVerify(){
        if(!data.requisitos || data.requisitos.length === 0) {
        return 1
    }
        const todasCadeiras = Object.values(cadeiras).flat();
        
        const requisitosPagos = data.requisitos.every(reqId =>
        todasCadeiras.some(
        cadeira => cadeira.id === reqId && cadeira.estado === 1
        )
        );
        if (!requisitosPagos) {
        return 0;
        }
        else{
            return 1;
        }
        
     
    }
   
    function trocarCor(){
    if(requisitosVerify()) {
        return data.estado==0 ? 'gray' : 'blue'
    }

    
    else {
        return 'transparent';
     }
   
    }

    function trocarEstado(){
        if(requisitosVerify()){
            onPress(semestre,data.id);
        }
        else{
            alert('Você não tem os requisitos para essa cadeira');
        }
    }
   
   
    return(
        
        <TouchableOpacity onPress={trocarEstado}>
        <View style={[styles.containerL, {
             backgroundColor: trocarCor()
             }]}>
            
            <Text style={[styles.texto, {color: data.estado==0 ? '#000' : '#FFF'}]}>{data.nome}</Text>

        </View>
        </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center',
        padding:40,
        marginTop:20,
        minHeight:100,
        width:250,
        borderRadius:20,
        borderWidth:1
        
    },

    texto: {
        textAlign: 'center',
        color: '#FFF',
        flexWrap: 'wrap'
    },

    Lista: {
        justifyContent: 'flex-start',
        alignItems: 'center'
        
    }


});