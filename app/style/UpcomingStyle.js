'use strict'
import React, { StyleSheet } from 'react-native';

const style =  {
    upcomingContainer: {
        flex: 1,
        paddingHorizontal: 30,
    },
    upcomingTitle: {
        padding: 10,
        alignItems: 'center',
        borderBottomColor: "#4682b4",
        borderBottomWidth: 1,
        marginHorizontal: 45
    },
    titleUpcoming: {
        fontFamily: 'Exo2-Regular',
        fontSize: 28,
        paddingTop: 15,
    },
    upcomingSubTitles: {
        fontSize: 28, 
        marginBottom:5,
        color: "#4682b4"
    },
    sessionCard: {
        flex: 1,
        alignItems: 'stretch',
        marginBottom: 20,
        borderBottomColor: "#4682b4",
        borderBottomWidth: 5,
        paddingBottom: 20
    },
    sessionCardDue: {
        flex: 1,
        alignItems: 'stretch',
        marginBottom: 20,
        paddingBottom: 20
    },
    sessionInfo: {   
        padding: 10,
        margin: 10,
        backgroundColor: "#00bfff",
        borderRadius: 25,
    },
    sessionInfoDue: {   
        padding: 10,
        margin: 10,
        backgroundColor: "#ddd",
        borderRadius: 25
    },
    upcomingTextChunk: {
        fontSize: 20,
        color: "#FFF",
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
        padding: 5,
    },
    icons: {
        height: 60,
        width: 60,
        padding: 15,
        marginRight: 10,
        backgroundColor: "#4682B4",
        borderRadius: 50
    },
    upcomingTextChunkTime: {
        fontSize: 14,
        color: "#4682b4",
        textAlign: 'center',
        padding: 10
    },

/**CANCEL BUTTON */

    cancelButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    cancelButtonIcon: {
        backgroundColor: '#4D6171',
        borderRadius: 100,
        padding: 5
    }


};

export default style;



