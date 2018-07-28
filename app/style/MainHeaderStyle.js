'use strict'
import React, { StyleSheet } from 'react-native';

const style =  {
    testBox: {
        backgroundColor: "#FFF",
        elevation: 5,
    },
    headerBox: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: "#FFF",
        elevation: 5,
    },
    codeBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    userCode: {
        color: "#555",
        fontSize: 45,
        fontFamily: 'BungeeHairline-Regular',
        padding: 0,
        marginVertical: -50
    },
    buttonsRight : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    indicator: {
        flexDirection: 'row', marginRight: 20, alignItems: 'center', justifyContent: 'center'
    },
    upcomingIndicator: {
        left: 10,
        bottom: 10
    },
    indicatorB: {
        flexDirection: 'row', 
        height: 35,
        width: 35,
        marginRight: 20, alignItems: 'center', justifyContent: 'center',
        backgroundColor: "#FFF",
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#00bfff"
    },
/**Style for UPCOMING MODAL */

    upcomingModal: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
      
        marginTop: 55,
        backgroundColor: "rgba(20,38,52,0.8)"
    },
    modalInnerBox: {
        backgroundColor: "#fff",
        borderRadius: 5
       
    },
    modalClose: {
        backgroundColor: "#4682b4",
        marginTop: 40,
        borderRadius: 5
    },

/**Style for USAGE component */

    availableWrapper: {
        height: 0,
        backgroundColor: '#00bfff'
    },    
    usageBox: {
        flexDirection: 'row',
        height: 50,
    },
    usageItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    usageItemMid: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#fff",
    },
    usageItemLabel: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        paddingHorizontal: 5,
        textAlign: 'center'
    },
};

export default style;