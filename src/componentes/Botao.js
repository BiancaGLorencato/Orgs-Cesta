import React  from "react";

import { StyleSheet,  TouchableOpacity } from 'react-native';

import Texto from "./Texto";

export default function Botao({children}){
    return <>
        <TouchableOpacity style={estilos.botao} onPress={() => { alert("HELLO Word")}}>
            <Texto style={estilos.textoBotao}>{children}</Texto>
        </TouchableOpacity>
    </>
};

const estilos = StyleSheet.create({
    botao:{
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao:{
        textAlign: 'center', 
        color: '#FFF',
        fontWeight: "bold",
        fontSize: 16, 
        lineHeight: 26
    }
})