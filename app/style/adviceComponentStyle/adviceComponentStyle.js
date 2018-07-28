'use strict'
import React, { StyleSheet } from 'react-native';

module.exports =  StyleSheet.create({
    
    /**Style for DICTIONARY Component */
    wordWrap: {
        flex: 1,
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems:'center',
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
        padding: 20,
        marginVertical: 10,
        backgroundColor: '#eee',
        borderRadius: 15
    },
    wordTitle: {
        fontFamily: 'Exo2-Regular',
        fontSize: 30,
        color: "#4D6171"
    },
    wordDefinition: {
        fontFamily: 'Exo2-Regular',
        fontSize: 20,
    },
    wordExample: {
        fontFamily: 'OpenSansCondensed-LightItalic',
        fontSize: 24,
    },

    /*Style for DICTIONARY RESOURCE */
    closeModalWeb: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#eee',
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        elevation: 8
    }
})