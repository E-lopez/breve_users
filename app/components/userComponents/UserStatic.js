import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableHighlight
  } from 'react-native';

import style from '../../style/AccountStyle';


  export default class UserInfo extends Component {
    render() {
      return(
        <View style={style.userDataContainer}>

          <View style={style.userDataImg}>
            <Image source={require('../../assets/job.png')} style={{height: 150, width: 150, borderRadius: 100}}/>
          </View>

          <View style={style.userDataText}>
            <View>

              <Text style={style.userText}>{this.props.userData.firstName}  {this.props.userData.surname}, 
                {
                  this.props.userData.age ? 
                  <Text style={style.userText}> {this.props.userData.age}</Text>:
                  null
                }
              </Text>

              {
                this.props.userData.profession ? 
                <Text style={style.userText}>{this.props.userData.profession}</Text>:
                <Text style={style.userTextHolder}>none yet</Text>
              }
            </View>
          </View>

        </View>
      )
    }
  }
