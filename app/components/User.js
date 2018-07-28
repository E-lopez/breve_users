import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Button,
  Animated,
  ScrollView,
  TouchableHighlight
  } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../style/AccountStyle';

import { firebaseApp } from '../services/Firebase';

import UserInfo from './userComponents/UserStatic';
import UserEditable from './userComponents/UserEditable';
import Usage from './userComponents/Usage';

export default class User extends Component {
  constructor(props) {
      super(props);
      this.state = {
        edit: false,
          fadeAnim: new Animated.Value(0)
      }
  }

  componentDidMount() {
      Animated.timing(
          this.state.fadeAnim,
          {
              toValue: 1,
              duration: 500,
          }
      ).start();
  }

  logout() {
    firebaseApp.auth().signOut()
    .then(() => {
      this.props.navigation.navigate('Home')
    })
    .catch((error) =>
    {
        // console.log(error)
    });
  }

  render() {

    let {fadeAnim } = this.state

    return(
      <Animated.View style={{opacity: fadeAnim}}>
        <View style={style.dataBox}>
          {
            !this.state.edit ? <UserInfo userData={this.props.userData} /> : <UserEditable {...this.props}/>
          }

          <TouchableHighlight 
            style={style.editUser}
            underlayColor='#FFF' 
            onPress={() => this.setState({edit: !this.state.edit})}>
                <View style={style.editUserSub}>
                    <Icon name="edit" color="#FFF" />
                    <Text style={style.editLabel}>Complete your info</Text>
                </View>
            </TouchableHighlight>
        </View> 

      </Animated.View>
    )
  }
}
