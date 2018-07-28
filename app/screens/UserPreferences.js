import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Alert,
  Button,
  Animated,
  ScrollView,
  TextInput,
  ToastAndroid,
  TouchableHighlight
  } from 'react-native';

import style from '../style/AccountStyle';

import Header from '../components/UserHeader';

import { submitPreferences } from '../services/DataManager';
import { PreferenceSet } from '../data/data'

export default class Preferences extends Component {
  constructor(props) {
    super(props);
    this.scrollBox = this.scrollBox.bind(this);
    this.state = {
      topic: '',
      comments: {},
      app: '',
    }
  }

  scrollBox() {
    this.refs.toScroll.scrollTo({x:0, y:500, animated:true});
  }

  setContent(key) {
    var obj = {};
    obj[key] = this.state.temporal
    this.state.comments[key] = this.state.temporal
    this.setState({
      topic: '',

    }, () => {
      ToastAndroid.showWithGravity('Comentario guardado', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }) 
  }

  sendComments() {
    submitPreferences(this.state.comments);
    this.setState({
      comments: {}
    })
  }

  verifySending() {
    const { comments } = this.state
    if(comments.guides || comments.interests || comments.app ||comments.goals) {
      Alert.alert(
        '¿Estás seguro de enviar?',
        'Presiona enviar sólo si has terminado todos tus comentarios.',
          [{text: 'Enviar', onPress: () => { this.sendComments() }},
           {text: 'Regresar', onPress: () => { return; }}
          ],
          { cancelable: false }
        )
    } else {
      return;
    }
  }

  render() {
    let { fadeAnim, comments } = this.state
    return(
      <View style={style.prefContainer}>

            <ScrollView ref='toScroll'>
              <View style={style.prefOptionContainer}>
                <View>
                  <Image source={require('../assets/thumbs-up.png')} 
                  style={style.PrefOptionImage} />
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={style.preferenceLabel}>¡Tus preferencias aquí! </Text> 
                  <Text style={style.preferenceLabelText}>Cuéntanos lo que quieras mejorar y lo que te gusta e interesa. Queremos hacer tu experiencia cada vez más personalizada y ajustada a lo que necesitas.</Text>
                  <Text style={{color:"#ccc", textAlign: 'center'}}>Ningún campo es obligatorio. Puedes llenar los que quieras.</Text>
                </View>
              </View>

              <View style={{flex:1, flexWrap: 'wrap', flexDirection: 'row'}}>

                {PreferenceSet.map((item, i) => {
                    var done = false
                    if( Object.keys(comments).includes(item.code)) { done = true }
                    return <TouchableHighlight
                              key={i}
                              style={style.eachBox}
                              underlayColor="#fff"
                              onPress={() =>{this.setState({
                                topic: item.code,
                              }),
                              this.scrollBox()
                              }}>
                              <View style={done? style.prefOptionContainerActive :             style.prefOptionContainerB}>
                                  <Image source={item.img} 
                                  style={style.optionPrefImage} />
                                  <Text style={style.topicLabel}>{item.title}</Text>
                              </View>
                            </TouchableHighlight>
                })}

            </View>

            <View style={style.PrefInputBox}>
                {this.state.topic?
                  <Text style={{fontSize: 24, textAlign: 'center', color:"#00bfff"}}>{(this.state.topic).toUpperCase()}</Text>:
                  <Text style={{fontSize: 18, textAlign: 'center', color:"#777", paddingVertical: 5}}>Selecciona un tema, y luego escribe tu comentario.</Text>}
                <TextInput
                  style={style.generalInput}
                  onChangeText={(text) => this.setState({temporal: text})}
                  underlineColorAndroid='transparent'
                  multiline={true}
                  value={this.state.temporal}
                  placeholder={'Toca para editar'}
                  onEndEditing={() => this.setContent(this.state.topic)}
                  onFocus={() => this.setState({temporal: ''})} /> 
              </View>

              <View style={style.preferenceButton}>
                <Text style={{fontSize: 18, textAlign: 'center', color:"#fff", padding: 5}}>¡Presiona enviar sólo cuando hayas terminado tus comentarios!</Text>
                    <TouchableHighlight 
                        onPress={() => {this.verifySending()}}
                        underlayColor='#41c1b7'>
                        <View>
                            <Image source={require('../assets/send.png')} 
                            style={style.preferenceButtonImage}>
                            <Text style={{color: "#FFF"}}>Send</Text>
                            </Image>
                        </View>
                    </TouchableHighlight>
              </View>
            </ScrollView>
      </View>
    )
  }
}
