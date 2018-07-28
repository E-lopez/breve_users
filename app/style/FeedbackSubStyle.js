'use strict'
import React, { StyleSheet } from 'react-native';

module.exports =  StyleSheet.create({
    feedContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30
      },
    initialMsgFeed: {
        marginBottom: 20,
        marginHorizontal: 20,
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: '#fff',
        padding: 10,
        paddingHorizontal: 60,
        borderRadius: 25
    },
    feedDate: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginBottom: 40,
        marginHorizontal: 50,
        borderBottomWidth: 1,
        borderColor: "#eee" 
    },
    feedDateTxt: {
        fontSize: 24,
        color: "#4D6171"
    },


/*Style for STREGHTS Items */
    itemsTitle: {
        textAlign: 'center',
        fontFamily: 'Exo2-Regular',
        fontSize: 25,
        marginHorizontal: 50,
        paddingBottom: 20,
    }, 
    feedItemsWrap: {
        flex: 1, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: "#eee",
        marginBottom: 40,
        paddingBottom: 20
    },
    strengthsBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 100,
        elevation: 5
    },
    feedbackItemsName: {
        fontFamily: 'Exo2-Regular',
        fontSize: 18,
        textAlign: 'center',
        color: "#fff",
    },

    /**ADVICE, BADGES style */

    badgeContainer: {
        flex: 1, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    badgeWrapper: {
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 5,
        paddingBottom: 20
    },
    badgeImg: {

        paddingVertical: 25
    },
    badgeLabel: {
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderBottomColor: "#fff",
        borderBottomWidth: 1
    },
    badgeText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#fff"
    }

})
