'use strict'
import React, { StyleSheet } from 'react-native';

module.exports =  StyleSheet.create({
  containerSkills: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingBottom: 60,
  }, 
  containerSub: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent:'center',
    marginBottom: 20
  },
  skillButtonWrap: {
    width: '45%',
    margin: 5
  },
  skillsBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
    marginBottom: 10,
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 5
  },
  titleText: {
    textAlign: 'center', 
    padding: 20, 
    color: "#777", 
    fontSize: 20
  },
  skillName: {
    marginTop: 15,
    paddingVertical: 5,
    fontFamily: 'Exo2-Regular',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderTopColor: "#fff",
    borderTopWidth: 1,
    width: '90%',
    backgroundColor: "#eff",
    borderRadius: 50
  },
  skillBoxButtons: {
    flexDirection: 'row'
  },
  skillButton: {
    borderRadius: 50,
    marginRight: 7,
    marginLeft: 7
  },

  /**OptionsRendererCollapsible */

  optionBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  optionName: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  optionNameTxt: {
    fontFamily: 'Exo2-Regular',
    fontSize: 24,
    color: "#fff",
    marginHorizontal: 20
  },
  optionsButtons: {
    flexDirection: 'row',
    paddingTop: 10
  },
  optionBodyWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    margin: 5,
    marginBottom: 10,
    borderBottomWidth: 3,
    minHeight: 120,
    backgroundColor: 'rgba(255,255,255,0.2)'
  },
  optionBodyIndex: {
    fontFamily: 'Exo2-Regular',
    fontSize: 16,
    height: 30,
    width: 30,
    borderRadius: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: "#fff",
    margin: 5,
    elevation: 5
  },
  optionBody: {
    fontFamily: 'Exo2-Regular',
    fontSize: 16,
    color: "#fff",
    marginLeft: 5

  }

});