import React, { Component } from 'react';
import { 
    Text,
    View,
    Image,
    TextInput,
    ScrollView,  
    TouchableHighlight, 
    Button } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../style/ConfirmStyle'

import Confirm from '../components/scheduleComponents/Confirm'

import { fetchDateObject } from '../services/DataManager';


export default class ConfirmSession extends Component {

  readParams() {
      if(this.props.navigation.state.params){
          const { user } = this.props.navigation.state.params
          return user
      } else {
        return false
      }
  }

  render() {    
    return(
      <ScrollView style={style.confirmMainContainer}>
        <View style={style.confirmContainer}>
            <Confirm navigation={this.props.navigation} user={this.readParams()} />
        </View>
      </ScrollView>
    )
  }
}
