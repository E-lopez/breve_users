'use strict'
import React, { StyleSheet } from 'react-native';

module.exports =  StyleSheet.create({
    accountMainContainer: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#FFF'
    },
    accountContainer: {
        flex: 1,
        alignItems: 'stretch'
    }, 

/**Style for USER component */

    dataBox: {
        borderBottomColor: "#CCC",
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingBottom: 10,
        elevation: 1  
    },
    userContainer: {
        flex: 1, 
        alignItems:'center'
    },
    editContainer :{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    editUser: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 10
    },
    editUserSub: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#00bfff",
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    editLabel: {
        color: "#FFF",
        fontSize: 14
    },

/**Style for USER STATIC */

    userDataContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    userDataText: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userText: {
        fontSize: 24,
        color: "#777"
    },
    userInfoContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        padding: 20,
        margin: 10
    },
    userTextTitle: {
        fontSize: 20,
        color: "#4682B4"
    },
    
    userTextHolder: {
        fontSize: 16,
        color: "#CCC"
    },

/** Style for USEREDITABLE component */

userEditDataContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    margin: 3,
},
userEditImg: {
    height: 80, 
    width: 80, 
    borderRadius: 50, backgroundColor: "#CCC", padding: 23
},
userEditInput: {
    flex:1,
    paddingLeft: 20  
},
userDataTextEdit: {
        flex: 1
},
editInput: {
    color: "#fff",
    paddingBottom: 10,
    paddingLeft: 10
},
saveEditContainer: {
    alignItems: 'stretch',
    marginBottom: 50
},
saveEditBtn: {
    flex: 1,
    alignItems: 'center',
    padding: 40,
    marginBottom: 50
},

/**Style for PAYMENT COMPONENT */

payContainer: {
    flex: 1, 
    paddingTop: 3
},
optionContainer: {
    flex: 1,
    flexDirection: 'row',
},
innerOptionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4682b4',
    margin: 2,
    padding: 2,
    minHeight: 100
},
optionPaymentImage: {
    height: 40,
    width: 40
},
optionLabel: {
    fontFamily: 'Exo2-Regular',
    color: "#FFF",
    fontSize: 20,
    textAlign: 'center'
},
optionLabelText: {
    fontFamily: 'Exo2-Regular',
    color: "#fff",
    fontSize: 20,
},
underConstruction:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
},
underConstructionImage: {
    height: 40,
    width: 40,
},
optionSeparator: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 60
},
optionSeparatorLabel: {
    fontFamily: 'Exo2-Regular',
    fontSize: 24,
    color: "#4682b4"
},

/**Style For GIVE US FEEBACK */

goToFeedback: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#4682b4",
    padding: 5,
    marginHorizontal: 2,
    marginTop: 30,
    marginBottom: 80
},
goToFeedbackLabel: {
    fontFamily: 'Exo2-Regular',
    fontSize: 18,
    color: "#fff"
},

/**Style for PAYMENT METHODS map function */
methodContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5
},
methodIndividual: {
    height: 100,
    width: "50%",
    padding: 1
},
methodInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F5546A",
},
methodLogo: {
    height: 40,
    width: 40,
    margin: 5
},
methodLabel: {
    fontFamily: 'Exo2-Regular',
    fontSize: 18,
    color: "#fff"
},
donation: {
    height: 100,
    width: "100%",
    padding: 1
},
donationInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#4682b4",
},
/**Style for PREFERENCES 7component */

prefContainer: {
    flex: 1, 
    backgroundColor: '#fff'
},
prefOptionContainer: {
flex: 1,
flexDirection: 'column',
alignItems: 'center',
padding: 30,
},
PrefOptionImage: {
    height: 40,
    width: 40,
    marginBottom: 10
},
preferenceLabel: {
    color: "#4682B4",
    fontSize: 20,
},
preferenceLabelText: {
    color: "#777",
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
},
eachBox: {
    width: '50%'
},
prefOptionContainerB: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#00bfff",
    paddingVertical: 30,
    paddingHorizontal: 25,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 25
},
prefOptionContainerActive: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#ccc", 
    paddingVertical: 30,
    paddingHorizontal: 25,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 25
},
topicLabel:{
    color: "#FFF",
    textAlign: 'center',
    width: 90
},
optionPrefImage: {
    height: 40,
    width: 40,
    marginRight: 10,
},
PrefInputBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#EEE",
    borderWidth: 1,
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 10
},
generalInput: {
    marginTop: 15,
    width: '90%',
    height: 80,
},
preferenceButton: {
    alignItems: 'center',
    margin: 20,
    marginBottom: 80,
    backgroundColor: "#21D0C3",
    paddingBottom: 10,
    borderRadius: 15,
},
preferenceButtonImage: {
    width: 70,
    height: 70,
    margin: 10,
    paddingLeft: 18,
    paddingTop: 55
}

})
