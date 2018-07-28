'use strict'
import React, { StyleSheet } from 'react-native';

const style =  {
    coresBox: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: "#EEE",
        borderBottomWidth: 1,
    },
    instruction: {  
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    coreBox: {
        width: "90%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderRadius: 25,
    },
    coreName: {
        fontFamily: 'Exo2-Regular',
        fontSize: 28,
        color: "#FFF",
        textAlign: 'center',
        width: 250
    },
    
};

export default style;