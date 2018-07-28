'use strict'
import React, { StyleSheet } from 'react-native';

module.exports =  StyleSheet.create({
    container: {
        alignItems: 'stretch',
        flex: 1,
        backgroundColor: '#F9FCFF',
    },
    loginContainer: {
        flex: 1,
        backgroundColor: "#00bfff",
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    loginUpper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginFbWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(255,255,255,0.8)",
        paddingVertical: 5,
        borderRadius: 50,
        marginVertical: 5
    },
    loginButtonImage: {
        width: 18,
        height: 18,
    },
    loginButtonText: {
        color: "#4c94d0",
        fontFamily: "Exo2-Regular",
        fontSize: 16,
        marginLeft: 5
    },
    loginPolicyButton: {
        color: "#fff",
        fontFamily: "Exo2-Regular",
        fontSize: 12,
        marginTop: 5
    },
    loginWrap: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    authImage: {
        width: 200,
        height: 100,
    },

/*Style for POLICY Agreement */

    policyWrap: {
        padding: 10,
        alignItems: 'center'
    },
    policyTitle: {
        fontFamily: 'Exo2-Regular',
        fontSize: 22,
        color: "#fff",
        marginTop: 10
    },
    policyText: {
        fontFamily: 'Exo2-Regular',
        color: "#fff",
        marginVertical: 15
    },


    


/*Style For Login Component */

    
   
    goToregButton: {
        marginTop: 10,
        padding: 11,
        backgroundColor: 'transparent',
        width: 200,
        height: 50,
        borderRadius: 25,
        borderColor: "#4682B4",
        borderWidth: 2
    },
    btnsReturn: {
        marginTop: 10,
        paddingLeft: 20,
        backgroundColor: 'transparent',
        width: 80,
        height: 50,
        borderRadius: 35
    },
    primaryButtonText: {
        color: '#777',
        textAlign: 'center',
        fontSize: 18
    },
    regButtonText: {
        color: '#4682B4',
        textAlign: 'center',
        fontSize: 18
    },
    
    login: {
        width: 690,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',    
    },
    loginBox: {
        width: 690,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    list: {
        flexWrap:'wrap',
        flexDirection: 'row',
        marginLeft: 1,
        borderColor: '#CCC',
    },  
    icon: {
        alignItems:'center',
        paddingTop: 20,
        flexDirection: 'column',
    },    
    tags: {
        color: '#CCC'
    },
    logo:{
        height: 150,
        width: 300,
        marginTop: 20
    },

/**
 * Style for Register Screen
 */

    containerReg: {
        flex: 1,   
        paddingTop: 10,
        backgroundColor: '#F9FCFF',
    },
    regBox: {
        alignItems: 'center',
        margin: 30
    },
    regImage: {
        height: 100,
        width: 100,
        backgroundColor: "#EEE",
        borderRadius: 100,
        marginTop: 20,
        padding: 23
    },
    inputBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        paddingLeft: 10,
        paddingRight: 10
    },
    nameBox: {
        flex: 1,
        marginBottom: 5
    },
    nameIconBox: {
        paddingTop: 8,
        paddingRight: 5

    },
    regInput: {
        paddingLeft: 10,
        paddingTop: 10,
        borderColor: "#CCC",
        borderWidth: 2,
        borderRadius: 5,
        margin: 2
    },
    regButtons: {
        alignItems:'center'
    },
    signupButton: {
        marginTop: 30,
        padding: 11,
        backgroundColor: 'transparent',
        width: 200,
        height: 50,
        borderRadius: 25,
        borderColor: "#4682B4",
        borderWidth: 2
    },
});