import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import Header from '../components/UserHeader';

import style from '../style/DrawerStyle';

import { getUser } from '../services/DataManager';

import { firebaseApp } from '../services/Firebase';

export default class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'User Name'
    }
  }

  componentWillMount() {
    getUser().then((snap) => {
      this.setState({
        user: snap,
        name: snap.name,
        pic: snap.photo
      })
    })
  }

  logout() {
    firebaseApp.auth().signOut()
    .then(() => {
        this.props.navigation.navigate('Home')
    })
    .catch((err) => {
        alert(err)
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { name, user, pic } = this.state
    return (
      <View>

        <Header title={name} pic={pic} />

        <ScrollView>
          <View style={style.container}>

          <View style={style.userArea}>
            <TouchableHighlight
              underlayColor="#FFF"
              onPress={() => navigate('Entry')}
              >
              <View style={style.menuItemAlt}>
                  <Image
                  style={{height:25, width:25, marginRight: 20}} 
                  source={require('../assets/home.png')} />
                  <Text style={style.menuItemTitle}>Principal</Text>
                </View>
            </TouchableHighlight>
          </View>

            <View style={[style.userArea, {backgroundColor: "#EEE"}]}>
              <TouchableHighlight
                underlayColor="#EEE"
                onPress={() => navigate('Records', {name: name, pic: pic})}
                >
                <View style={style.menuItem}>
                    <Image
                    style={{height:25, width:25, marginRight: 20}} 
                    source={require('../assets/recordsMenu.png')} />
                    <Text style={style.menuItemTitle}>Historial</Text>
                  </View>
              </TouchableHighlight>
            </View>

            <View style={style.userArea}>
              <TouchableHighlight
                underlayColor="#FFF"
                onPress={() => navigate('Account', {user: user, name: name, pic: pic})}
                >
                <View style={style.menuItemAlt}>
                    <Image
                    style={{height:25, width:25, marginRight: 20}} 
                    source={require('../assets/check.png')} />
                    <Text style={style.menuItemTitle}>Pagos y cuenta</Text>
                  </View>
              </TouchableHighlight>
            </View>

            <View style={[style.userArea, {backgroundColor: "#EEE"}]}>
              <TouchableHighlight
                underlayColor="#FFF"
                onPress={() => navigate('InstructionsUser')}>
                <View style={style.menuItemAlt}>
                    <Image
                    style={{height:25, width:25, marginRight: 20}} 
                    source={require('../assets/userMenu.png')} />
                    <Text style={style.menuItemTitle}>¿Cómo se usa?</Text>
                  </View>
              </TouchableHighlight>

              <TouchableHighlight
                underlayColor="#FFF"
                onPress={() => navigate('Terms')}>
                <View style={style.menuItemAlt}>
                    <Image
                    style={{height:25, width:25, marginRight: 20}} 
                    source={require('../assets/lock.png')} />
                    <Text style={style.menuItemTitle}>Términos y condiciones</Text>
                  </View>
              </TouchableHighlight>
            </View>

            <Button title="logout" color="#00bfff" onPress={() => {this.logout()}} />

            <View style={style.brand}>
              <Image
                style={{height:65, width:90}} 
                source={require('../assets/breve_logo_0.2.png')} />
                <Text>beta-0.2.10</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

}
