import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TextInput,
  ScrollView,
  TouchableHighlight
  } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../../style/AccountStyle';

import { updateUser } from '../../services/DataManager';

  export default class UserEditable extends Component {
      constructor(props) {
          super(props);
          this.state = {}
      }

      updateChecker() {
          const Update = this.state
          if(Update.firstName || Update.surname || Update.age || Update.profession || Update.mainAddress || Update.phone) {
            updateUser(this.state);
          } else {
            return;
          }
            
      }
    render() {
      return(
        <View style={{flex:1, flexDirection: 'column'}}>

            <View style={style.userEditDataContainer}>

                <View style={style.userDataImg}>
                    <Icon name='add-a-photo' style={style.userEditImg} />
                </View>

                <View style={style.userDataTextEdit}>
                    <View style={style.userEditInput}>
                        <TextInput
                            style={style.editInput}
                            placeholder={"First Name: " + this.props.userData.firstName}
                            onChangeText={(text) => this.setState({firstName: (text).trim()})}
                            value={this.state.firstName}
                            />
                        <TextInput
                            style={style.editInput}
                            placeholder={"Surname: " + this.props.userData.surname}
                            onChangeText={(text) => this.setState({surname: (text).trim()})}
                            value={this.state.surname}
                            />

                        <TextInput
                            style={style.editInput}
                            keyboardType='numeric'
                            maxLength={2}
                            placeholder={"Age: " + this.props.userData.age}
                            onChangeText={(text) => this.setState({age: (text).trim()})}
                            value={this.state.age}
                            />

                        <TextInput
                            style={style.editInput}
                            placeholder={"Profession: " + this.props.userData.profession}
                            onChangeText={(text) => this.setState({profession: (text).trim()})}
                            value={this.state.profession}
                            />

                        <TextInput
                            style={style.editInput}
                            placeholder={"Address: " + this.props.userData.mainAddress}
                            onChangeText={(text) => this.setState({mainAddress: (text)})}
                            value={this.state.mainAddress}
                            />

                        <TextInput
                            style={style.editInput}
                            keyboardType='numeric'
                            maxLength={10}
                            placeholder={"Phone: " + this.props.userData.phone}
                            onChangeText={(text) => this.setState({phone: (text).trim()})}
                            value={this.state.phone}
                            />
                    </View>
                </View>
            </View>

            <View style={style.saveEditContainer}>
                <TouchableHighlight
                    style={style.saveEditBtn} 
                    underlayColor='#FFF' 
                    onPress={() => {this.updateChecker()}}>
                    <View style={style.editUserSub}>
                        <Icon name="save" color="#FFF" />
                        <Text style={style.editLabel}>Save changes</Text>
                    </View>
                </TouchableHighlight>
            </View>

        </View>
      )
    }
  }
