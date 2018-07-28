import React, { Component } from 'react';
import {Text,
        View,
        Image,
        Modal,
        Button,
        TextInput,
        ScrollView,
        ToastAndroid,
        TouchableHighlight } from 'react-native';
import style from '../style/AccountStyle';
import { Icon } from 'react-native-material-design';

import slide from '../assets/slide.png'

import { PaymentMethodsList } from '../data/data';

import PaymentMethod from '../components/PaymentComponents/PaymentMethod';

import { updateUser } from '../services/DataManager';


export default class Payment extends Component {
  constructor(props) {
      super(props);
      this.showPayment = this.showPayment.bind(this);
      this.state = {
          showPaymentModal: false,
          method: '',
          name: '',
          age: '',
          profession: '',
          phone: ''
      }
  }

  showPayment(arg) {
    if(arg === 'Giros' || arg === 'Donar una sesión' || !arg) {
      this.setState({
        showPaymentModal: !this.state.showPaymentModal,
        method: arg ? arg : ''
      })
    } else {
      ToastAndroid.showWithGravity('Este método no está habilitado todavía. Espéralo pronto.', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
  }

  updateChecker() {
    let { name, age, profession, phone } = this.state
    if(age || profession || phone || name) {
      var updates = {name: name, age: age, profession: profession, phone: phone}
      updateUser(this.state)
      .then(() => {
        ToastAndroid.showWithGravity('Datos actualizados. Los verás la próxima vez que ingreses a tu app.', ToastAndroid.SHORT, ToastAndroid.CENTER);
        this.setState({
          age: '',
          name: '',
          phone: '',
          profession: ''
        })
      })
      .catch(() => {return;})
    } else {
      return;
    }  
  }

  render() {

    let { showPaymentModal, method } = this.state
    const { userData } = this.props

    return(
      <View style={style.payContainer}>

        <View style={style.optionContainer}>
          <View style={style.innerOptionContainer}>
            <Text style={style.optionLabel}>Pagado</Text> 
            <Text style={style.optionLabelText}>$ {userData.payed? (userData.payed).toLocaleString() : 0}</Text>
          </View>

          <View style={style.innerOptionContainer}>
            <Text style={style.optionLabel}>Usado</Text> 
            <Text style={style.optionLabelText}>$ {userData.used? (userData.used).toLocaleString() : 0}</Text>
          </View>
        </View>

        <View style={style.optionContainer}>
          <View style={[style.innerOptionContainer, {backgroundColor: '#3F94DB'}]}>
            <Text style={style.optionLabel}>Individual</Text> 
            <Text style={style.optionLabelText}>{userData.payed? Math.floor((userData.payed - userData.used)/40000).toFixed(0) : 0}</Text>
          </View>

          <View style={[style.innerOptionContainer, {backgroundColor: '#3F94DB'}]}>
            <Text style={style.optionLabel}>Doble</Text> 
            <Text style={style.optionLabelText}>{userData.payed? Math.floor((userData.payed - userData.used)/60000).toFixed(0) : 0}</Text>
          </View>
        </View>

        <View style={style.optionSeparator}>
          <Text style={style.optionSeparatorLabel}>Comprar</Text> 
          <Text>Selecciona una opción</Text> 
        </View>
        
        <View style={style.methodContainer}>
          {PaymentMethodsList.map((item, i) => {
            if(!item.flag) {
              return (
                <TouchableHighlight
                  onPress={() => this.showPayment(item.name)}
                  style={style.methodIndividual}
                  key={i}>
                    <View style={style.methodInner}>
                      <Image source={item.logo} style={style.methodLogo} />
                      <Text style={style.methodLabel}>{item.name}</Text>
                    </View>
                </TouchableHighlight>
                )
            }
            else {
              return (
                <TouchableHighlight
                  onPress={() => this.showPayment(item.name)}
                  style={style.donation}
                  key={i}>
                    <View style={style.donationInner}>
                      <Image source={item.logo} style={style.methodLogo} />
                      <Text style={style.methodLabel}>{item.name}</Text>
                    </View>
                </TouchableHighlight>
              )
            }
            
            })
          }
        </View>

        <View style={[style.optionSeparator, {marginBottom: 5}]}>
          <Text style={style.optionSeparatorLabel}>Completa tus datos</Text> 
        </View>
        
        <View style={[style.optionContainer, {flexDirection: 'column'}]}>
          <View style={style.innerOptionContainer}>
              <View style={{width: 300}}>
                <TextInput
                  style={style.editInput}
                  placeholder={"Name: " + userData.name}
                  placeholderTextColor="#fff"
                  onChangeText={(text) => this.setState({name: (text)})}
                  value={this.state.firstName}
                  />
                <TextInput
                  style={style.editInput}
                  keyboardType='numeric'
                  maxLength={2}
                  placeholder={"Age: " + userData.age}
                  placeholderTextColor="#fff"
                  onChangeText={(text) => this.setState({age: (text).trim()})}
                  value={this.state.age} />

                <TextInput
                  style={style.editInput}
                  placeholderTextColor="#fff"
                  maxLength={50}
                  placeholder={"Profession: " + userData.profession}
                  onChangeText={(text) => this.setState({profession: (text).trim()})}
                  value={this.state.profession} />

                <TextInput
                  style={style.editInput}
                  keyboardType='numeric'
                  maxLength={10}
                  placeholder={"Phone: " + this.props.userData.phone}
                  placeholderTextColor="#fff"
                  onChangeText={(text) => this.setState({phone: (text).trim()})}
                  value={this.state.phone}
                  />
              </View>

              <View>
                <TouchableHighlight
                    underlayColor='#FFF' 
                    onPress={() => {this.updateChecker()}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
                        <Icon name="save" color="#FFF" />
                        <Text style={style.editLabel}> Guardar</Text>
                    </View>
                </TouchableHighlight>
              </View>
          </View>
        </View>

        <View style={style.goToFeedback}>
          <Text style={style.goToFeedbackLabel}>Danos tu feedback</Text>
          <Image source={slide} style={{width: 30, height:30, marginHorizontal: 10}} />
        </View>

        <Modal
        animationType="slide"
        transparent={false}
        visible={showPaymentModal}
        onRequestClose={() => {return;}}>
          <View style={{flex: 1}}>
              
              <PaymentMethod 
                method={method}
                showPayment={this.showPayment}/>
          </View>
        </Modal>

      </View>
    )
  }
}
