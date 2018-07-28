'use strict'
import React, { StyleSheet } from 'react-native';

module.exports =  StyleSheet.create({
/*Style For the Floating Single */

    chatButton: {
        position: 'absolute',
        bottom: 25,
        backgroundColor:'#00BFFF',
        borderColor: '#00BFFF',
        borderWidth: 1,
        height: 60,
        width: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        
        right:20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
                height: 1,
                width: 0
                } 
    },
    newMessageNotifWrap: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 15,
        width: 20,
        height: 20,
        borderRadius: 100,
        borderColor: '#00bfff',
        borderWidth: 1,
        backgroundColor: '#37A1F9'
    },
    newMessageNotifNum: {
        fontFamily: 'Exo2-Regular',
        color: "#fff"
    },

});