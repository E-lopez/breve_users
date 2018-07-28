'use strict'
import React, { StyleSheet } from 'react-native';

const style =  {
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        backgroundColor: "#FFF",
        elevation: 2
    },
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 100,
        marginRight: 20
    },
    headerTxt: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    headerTxtContent: {
        color: '#777',
        fontFamily: 'sans-serif-condensed',
        textAlign: 'center'
    },

    /*Style for the Drawer Component*/

    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
      },
      topicHeader: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      menuItem: {
          flexDirection: 'row', alignItems: 'center',
      },
      menuItemAlt: {
        flexDirection: 'row', alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
      menuItemTitle: {
          fontSize: 20,
          color: "#00bfff"
      },
      userArea: {
        justifyContent: 'flex-start',
        alignContent: 'center',
        borderColor: "#EEE",
        borderBottomWidth: 1,
        padding: 20
      },
      brand: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 10
      }
};

export default style;