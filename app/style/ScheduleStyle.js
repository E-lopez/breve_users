'use strict'
import React, { StyleSheet } from 'react-native';

const style =  {
    topicsContainer: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 20,
    },
    topic: {
        flex: 1,
        alignItems: 'center',
        borderColor: "#FFF",
        borderWidth: 1,
        borderRadius: 35,
        backgroundColor: "#4682B4",
        padding: 20,
        margin: 10
    },
    topicLabel: {
        color: "#FFF"
    },
    brandContainer: {
        flex: 1,
        alignItems: 'center',
        margin: 10
    },
    brandImage: {
        height:100, 
        width: 150,
        margin: 20
    },
    containerSkills: {
        
        backgroundColor: '#FFF'
    },
    skillsIntro: {
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 30
    }, 
    skillsIntroTxt: {
        fontSize: 18,
        textAlign: 'center'
    },

/*Style for the scheduleManager components*/

    indicator: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: "#EBF5FB"
    },
    indicatorLabel: {
        color: "#4682B4",
        fontSize: 20,
        textAlign: 'center'
    },
    indicatorLabelTopic: {
        color: "#4682B4",
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 25,
        fontSize: 22,
        textAlign: 'center'
    },
    optionsContainer: {
        flex: 1,
        margin: 10
    },
    optionButton: {
        flex: 1,
        alignItems: 'stretch',
        borderColor: "#4682B4",
        borderWidth: 2,   
        padding: 20,
    },
    innerBtn: {
        flex:1, 
        flexDirection: 'row',
        alignItems: 'center'
    },
    optionScheduleImage: {
        height: 40,
        width: 40,
        marginRight: 40,
    },
    optionLabel: {
        color: "#4682B4",
        fontSize: 20
    },
    changer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        padding: 5,
        backgroundColor: "#EBF5FB"
    },

/*Style for DATETIME component*/

    setTimeIndication: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    setTimeLabel: {
        textAlign: 'center',
        padding: 20,
        color: "#777",
        fontSize: 20
    },
    dateContainer: {
        flex: 1,
        alignItems:'center',
    },
    distButtonsWrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    dateButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',  
        borderRadius: 5, 
        padding: 15,
        marginHorizontal: 5,
    },
    dateButtonText: {
        color: "#bbb",
        fontFamily: 'Exo2-Regular',
        fontSize: 28,
        marginVertical: -10
    },
    dateButtonTextKm: {
        color: "#ccc",
        fontSize: 12
    },
    avaButtonImg: {
        width: 50,
        height: 50
    },
    timePicker: {
        flex: 1,
    },
    locInput: {
        flex: 1,
        alignItems: 'stretch',
        borderColor: "#4682B4",
        borderWidth: 2,   
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10
    },
    locInputLabel: {
        color: "#4682B4",
        marginBottom: 10
    },
    locInputIcon: {
        margin: 15
    },
    avaMessage: {
        flex: 1,
        backgroundColor: "#00bfff",
        alignItems: 'center',
        borderRadius: 25,
        marginVertical: 20,
        
    },
    avaMessageImg: {
        width: 80,
        height: 80
    },

/*Styles for AVAILABLE HOURS component */

    guidesContainerTitle: {
        alignItems: 'center',
    },
    guidesTitle: {
        color: "#CCC",
        fontSize: 24,
        margin: 10,
        textAlign: 'center',
        marginBottom: 20,
    },
    guideMainWrap: {
        flex: 1,
        flexDirection: 'column', 
        padding: 10
    },
    guidesList: {
        flex: 1,  
        marginVertical: 5,
        borderColor: "#CCC",
        borderBottomWidth: 1, 
        paddingBottom: 5
    },
    guideButton: {
        flex: 1,
        paddingBottom: 10,  
    },
    innerGuideBtn: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#eee',
        paddingRight: 10,
        paddingVertical: 5,
        borderRadius: 50,
    },
    guideImage: {
        width: 60,
        height: 60,
        borderRadius: 100,
        marginRight: 20,
        marginLeft: 5
    },
    guideLabelWrap:{
         justifyContent: 'center',
          alignContent: 'center',
    },
    guideLabel: {
        color: "#777",
        fontSize: 20,
        right: 10,
        marginRight: 20
    },
    guideInfoPro: {
        fontSize: 14,
        fontFamily: 'Exo2-Regular',
        right: 10
    },
    guideRate: {
        color: "#49BEAA",
        fontFamily: 'Exo2-Regular',
        fontSize: 30,
        marginVertical: -35,
        paddingRight: 20
    },
    feedbackNull: {
        textAlign: 'center',
        padding: 20,
        fontSize: 18,
        color: "#ccc"
    },
    feedbackItem: {
        textAlign: 'center',
        padding: 5,
        fontSize: 14,
        color: "#777"
    },
    guideInfoWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 15
    },
    

/**Style for INDICATORS */

guideIndicatorsWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 15
    },
    guideIndicatorsBox: {
        height: 80,
        width: '33%',
        marginVertical: 10
    },
    guideIndicatorsTop: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    guideItemScore: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 100,
        elevation: 2
    },
    guideItemNum: {
        fontFamily: 'Exo2-Regular',
        fontSize: 30,
        color: "#fff",
        marginVertical: -35
    },
    guideItemLabel: {
        fontFamily: 'Exo2-Regular',
        fontSize: 15,
        marginBottom: 4,
        color: "#999"
    },

/**Guides DISTANCE Box */

    guideDistanceBox: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    guideDistanceBoxInner: {
        flex:1 ,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    guideDistanceBoxTitle: {
        fontFamily: 'Exo2-Regular',
        fontSize:20,
    },
    guideDistanceBoxData: {
        fontFamily: 'Exo2-Regular',
        fontSize:25,
        color: "#49BEAA"
    }

    

/*Styles for Confirm Component*/

  
};

export default style;