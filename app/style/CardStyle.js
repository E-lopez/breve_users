'use strict'
import React, { StyleSheet } from 'react-native';

module.exports =  StyleSheet.create({
    mainTitle:{
        textAlign: 'center', 
        fontSize: 36, 
        marginBottom: 20, 
        color: "steelblue"
    },
    chunks: {
        flex: 1,
        alignItems: 'stretch',
        borderBottomWidth: 1,
        borderBottomColor: "#CCC",
        marginBottom: 40
    },
    subTitle: {
        textAlign: 'left',
        paddingLeft: 20,
        fontSize: 30, 
        marginBottom: 10,
        color: "#555"
    },
    textChunk:{
            flexDirection:'row',
            padding:20
    },
    text: {
        flex: -1,
        textAlign: 'right', fontSize: 20, 
        padding: 15,
        marginBottom: 10,
        color: "#AAA"
    },
    textAlt: {
        flex: -1,
        textAlign: 'left', fontSize: 20, 
        padding: 15,
        marginBottom: 10,
        color: "#AAA"
    },
    iconChunk: {
        height: 80, 
        width: 80,
        marginTop: 15
    }
});