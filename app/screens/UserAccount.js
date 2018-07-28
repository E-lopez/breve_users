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

import style from '../style/AccountStyle'

import Header from '../components/UserHeader';
import User from '../components/User';
import Payment from '../components/Payment';
import { FloatingSingle } from '../components/FloatingMenu';

import { GET_USER } from '../services/DataManager';
import { firebaseApp } from '../services/Firebase';

export default class UserAccountScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        }
    }
    
  render() {
    let { user, pic, name } = this.props.navigation.state.params
    console.log("USER ACC 32", user)

    return(
      <View style={style.accountMainContainer}>
        
        <ScrollView> 
            <View style={style.accountContainer}>
                <Header title={name} pic={pic} color={"#eee"}/>
                <Payment userData={user} />
            </View>
        </ScrollView>

        <FloatingSingle  navigate={this.props.navigation.navigate} icon={'arrow-back'} func={'goTo'} target={'Entry'} />
        
      </View>
    )
  }
}
