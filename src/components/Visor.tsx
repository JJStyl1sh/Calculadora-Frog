import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface VisorProps {
    expressao: string,
    valorAtual: string;
}

export function Visor({ expressao, valorAtual}: VisorProps){
    return(
        <View style={styles.container}>
            <Text style={styles.textoExpressao}>{expressao}</Text>
            <Text style={styles.textoValor} numberOfLines ={1} adjustsFontSizeToFit>{valorAtual}</Text>    
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'flex-end',
        padding: 24,
        backgroundColor: '#E0E0E0',
        borderBottomWidth: 2,
        borderColor: '#BDBDBD',
    },
    textoExpressao: {
        fontSize: 20,
        color: '#757575',
        marginBottom: 8,
    },
    textoValor: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#2E7D32'
    },
});