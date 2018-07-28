'use strict'
import React, { StyleSheet } from 'react-native';

const style =  {
    confirmMainContainer: {
        backgroundColor: '#FFF'

    },
    timeContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10
    },
    
/**Style For CONFIRM component */

indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
},
indicatorLabel: {
    color: "#FA3C56",
    fontSize: 30,
    fontWeight: 'bold'
},
confirmMissingData: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    marginVertical: 60
},
confirmItemBox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10 
},
confirmItem: {
    color: "#537A9A",
    fontSize: 24,
    fontWeight: 'bold',
},
confirmItemPrice: {
    fontFamily: 'Exo2-Regular',
    fontSize: 40,
    marginTop: 10

},
confirmItemRes: {
    color: "#777",
    fontSize: 20,
    padding: 5,
    width: 350,
    textAlign: 'center',
},
confirmButton: {
    alignItems: 'center',
    marginVertical: 30
},
confirmButtonInner: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#4D6171',
    width: 200,
    borderRadius: 45

}
};

export default style;
