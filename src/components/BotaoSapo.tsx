import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BotaoSapoProps{
    titulo: string;
    corFundo?: string;
    onPress: () => void;
    flex?: number;
}

export function BotaoSapo({titulo, corFundo = '#A5D6A7', onPress, flex = 1}:BotaoSapoProps){ 
    return (
        <TouchableOpacity
            style={[
                styles.botao,
                {
                    backgroundColor: corFundo, flex:flex
                }
            ]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao: {
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 6,
        elevation: 3,
    },
    texto: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
    },
});