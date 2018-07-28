'use strict'
import React, { StyleSheet } from 'react-native';

const style =  {
    feedContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 40
    },
    feedSubcontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        flex: 1
    },
    itemsTitle: {
        padding: 10,
        alignItems: 'center',
        borderBottomColor: "#CCC",
        borderBottomWidth: 1,
        margin: 15
    },
    feedItems: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 20
    },
    feedButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: '90%',
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 25,
        elevation: 8
    },
    feedTitles: {
        fontFamily: 'Exo2-Regular',
        fontSize: 30, 
        marginBottom: 15,
        color: "#ccc"
    },
    feedTitlesLevel: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "#eee",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 25
    },
    cefrNote: {
        fontFamily: 'Exo2-Regular',
        fontSize: 12,
        color: "#ccc",
    },
    titleFeedback: {
        fontSize: 28, 
        fontFamily: 'Exo2-Regular',
        marginBottom: 5,
        color: "#ccc"
    },
    rate: {
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: "#4D6171",
        width: 60,
        height: 60,
        borderRadius: 50,
        marginBottom: 10,
        marginHorizontal: 5,
        fontFamily: 'Exo2-Regular',

        color: "#fff"
    },
    rateComment: {
        textAlignVertical: 'center',
        fontFamily: 'Exo2-Regular',
        fontSize: 18,
        color: "#ccc"
    },
    feedContent: {
        fontFamily: 'Exo2-Regular',
        fontSize: 16,
        color: "#ccc",
        textAlign: 'center',
        marginTop: 5,
        paddingHorizontal: 10
    },
    feedButtonText: {
        width: '70%',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

/*Style for LEVEL DESCRIPTION MODAL*/
    levelModal: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        borderTopWidth: 25,
        borderColor: "#4D6171" 
    },
    levelModalTitle: {
        backgroundColor: "#eee",
        padding: 20,
        marginBottom: 5,
        borderRadius: 50,
        fontFamily: 'Exo2-Regular',
        fontSize: 20
    },
    levelModalText: {
        textAlign: 'center',
        paddingTop: 10,
        fontFamily: 'Exo2-Regular',
        fontSize: 16
    }
};

export default style;



