'use strict'
import React, { StyleSheet } from 'react-native';

const style =  {
    scoreWrap: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#00bfff'
    },
    scoreInitialLine: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'Exo2-Regular',
        color: "#fff",
        marginBottom: 20,
        padding: 5
    },
    scoreSession: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding: 10,
        backgroundColor: "#fff",
        elevation: 10,
    },
    scoreImage: {
        marginHorizontal: 20
    },
    scoreInfo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    scoreInfoDate: {
        fontFamily: 'Exo2-Regular',
        fontSize: 24,
        color: "#777"
    },
    scoreInfoText: {
        fontFamily: 'Exo2-Regular',
        fontSize: 20,
        color: "#777"
    },

    
/**Style for GENERAL scale */

    scales: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    scaleTitle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scaleTitleText: {
        fontFamily: 'Exo2-Regular',
        fontSize: 28,
        color: "#fff"
    },
    scaleTitleTextSub: {
        fontFamily: 'Exo2-Regular',
        fontSize: 18,
        textAlign: 'center',
        color: "#fff"
    },
    scaleStars: {
        flexDirection: 'row',
        marginVertical: 10
    },
    scoreNumWrap: {
        justifyContent: 'center',
        alignItems: 'stretch',
        height: 100,
        width: 100,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: "#fff",
        paddingBottom: 5,
        marginBottom: 30,
        elevation: 2,
    },
    scaleTitleNum: {
        textAlign: 'center',
        fontSize: 84,
        fontWeight: 'bold',
        color: "#fff"
    },
    

/**Style for individual SCALES*/

    scoreIndication: {
        textAlign: 'center',
        paddingHorizontal: 40,
        marginBottom: 10,
        fontFamily: 'Exo2-Regular',
        fontSize: 24,
        color: "#fff"
    },
    scoreItemsWrap: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scoreButtons: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        elevation: 10
    },
    scoreButtonsInnerActive:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#088A68',
        borderRadius: 15,
    },
    scoreButtonsInner:{
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#537A9A',
        borderRadius: 15,
    },
    scoreTop: {
        justifyContent: 'center', 
        alignItems: 'center',
    },
    scoreButtonsImageWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        minWidth: 100
    },
    scoreButtonsText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 5,
        marginTop: 10,
        marginBottom: 5,
        minHeight: 110,
        fontFamily: 'Exo2-Regular',
        color: "#fff"
    },

/**Style for ADDITIONAL COMMENT */

    scoreCommentWrap :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderWidth: 0,
        borderColor: "#fff",
        borderRadius: 25
    },
    scoreCommentTitle: {
        fontSize: 22,
        fontFamily: 'Exo2-Regular',
        textAlign: 'center',
        color: "#fff"
    },
    scoreCommentInputBox: {
        flex: 1,
        minWidth: 300,
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 5,
        paddingHorizontal: 15,
        marginTop: 10 
    },
    scoreCommentInput: {
        color: "#4D6171"
    },



/**Style For SUBMIT BUTTON */
    scoreSendButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
        width: '65%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        elevation: 1,
        borderRadius: 70
    },
    scoreSendText: {
        textAlign: 'center',
        fontFamily: 'Exo2-Regular',
        fontSize: 18,
        color: "#fff"
    }
}

export default style;