import React, { Component } from 'react';
import {Text,
        View,
        Modal,
        Image,
        Alert,
        TextInput,
        ScrollView,  
        Dimensions,
        TouchableHighlight, 
        Button } from 'react-native';
import { Icon } from 'react-native-material-design';

import { FloatingSingle } from '../components/FloatingMenu';

import { createDateObject } from '../services/DataManager';

import style from '../style/PlaceStyle'

import GeoLocation from '../components/GeoLocation'

let { height, width } = Dimensions.get('screen')


export default class Place extends Component {
    constructor(props) {
        super(props);
        this.toChekOut = this.toChekOut.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.enter_details = this.enter_details.bind(this);
        this.state = {
            indication: '',
            enterDetails: false
        }
    }

    enter_details() {
        this.setState({enterDetails: true})
    }

    toChekOut(params) {
        let { indication, address } = this.state
        if(indication && address) {
            createDateObject(params)
            .then(() => {
                this.setState({enterDetails: false});
                this.props.navigation.navigate('Guide', {user: this.props.navigation.state.params});
            })
        } else { 
            Alert.alert(
                '¡Olvidaste decirnos tus indicaciones!',
                "Entre más detalles ingreses, tu guía te encontrará con más facilidad.",
                   [{text: 'Ok', onPress: () => {return;}}],
                   { cancelable: false }
                );
        }
    }

    updateAddress(arg) {
        this.setState({address: arg})
    }

  render() {
    return(
      <View style={style.MapMainContainer}>
        <View style={[style.mapContainer, {height: height}]}>
            <GeoLocation 
                navigation={this.props.navigation} 
                updateAddress={this.updateAddress} 
                enterDetails={this.enter_details} />
        </View>

        <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.enterDetails}
        onRequestClose={() => {return;}}>
            <View style={style.placeControls}>
                <TouchableHighlight 
                    underlayColor="transparent"
                    onPress={() => this.setState({enterDetails: false})}
                    >
                        <View style={[style.detailCloseModal, {width: width}]}><Text>.</Text></View>
                </TouchableHighlight>

                <View style={style.enterDetailWrap}>
                    <Text style={{textAlign: 'center', fontSize: 16, color: "#4682b4"}}>Ayúdanos a encontrarte: ingresa número de casa, oficina, placa de tu carro, color de tu camisa...</Text>
                
                    <TextInput
                    style={style.textInputIndication}
                    underlineColorAndroid='transparent'
                    placeholder={'Ingresa tus indicaciones aquí'}
                    onChangeText={(text) => this.setState({indication: text})}
                    value={this.state.indication}
                    />
                    
                    <TouchableHighlight
                    onPress={() => this.toChekOut({'indication': this.state.indication})}
                    underlayColor={"transparent"}
                    activeOpacity={5}
                    style={style.guideButton}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor:"#4682b4", borderRadius: 45, paddingLeft: 20, marginTop: 10, marginBottom: 10}}>
                            <Text style={{fontFamily: 'Exo2-Regular', fontSize: 24, color:'#fff'}}>Siguiente</Text>
                            <Icon name="chevron-right" color="#fff" size={50} />
                        </View>
                    </TouchableHighlight>

                </View>

                <TouchableHighlight
                    underlayColor="transparent"
                    onPress={() => this.setState({enterDetails: false})}>
                        <View style={[style.detailCloseModal, {width: width}]}><Text>.</Text></View>
                </TouchableHighlight>

            </View>
        </Modal>
      </View>
    )
  }
}
