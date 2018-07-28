'use strict'
import React, { StyleSheet } from 'react-native';

module.exports =  StyleSheet.create({
/**COLLAPSIBLE SIMPLE */

    instructionBox:{
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        borderColor: '#EEE',
        borderWidth: 1,
        marginVertical: 5
    },
    instructionName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        paddingHorizontal: 10
    },
    instructionNameTxt: {
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    descriptionBox: {
        flex: 1,
        height: 0
    },
    descriptionSub: {
        justifyContent: 'center',
        alignItems: 'center'    
    },
    instructionBody: {
        fontSize: 0,
        textAlign: 'justify'
    },
    brandInstructions: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50
    },

/**COLLAPSIBLE EXTENDED */

    extendedBox:{
        flex: 1,
        flexDirection: 'column',
        marginVertical: 5,
        backgroundColor: '#fff'
    },
    extendedContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5,
        marginBottom: 10
    },
    extendedHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 80,
        borderRadius: 100,
        backgroundColor: "#4D6171",
    },
    extendedHeaderNum: {
        fontSize: 34,
        color: "#fff",
        fontWeight: 'bold'
    },
    extendedHeaderTxt: {
        color: '#4D6171',
        fontWeight: 'bold',
        fontSize: 20
    },
    extendedMore: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 5,
    },
    extendedTitle: {
        color: '#777',
        textAlign: 'center',
        fontSize: 14
    },
    extendedDescription: {
        flex: 1,
        height: 0,
        backgroundColor: '#eee'
    },
    extendedSub: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20    
    },
    extendedBody: {
        padding: 25,
        textAlign: 'center',
        color: "#4D6171"
    },
    

/**EXTENDED HOLDER */
    holderBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 25
    },
    holderContent: {
        padding: 30,
        borderBottomWidth: 1,
        paddingHorizontal: 20
    },
    holderHeader: {
        justifyContent: 'center',
        alignItems: 'center'
    }
    

})