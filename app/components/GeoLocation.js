import React, { Component } from 'react';
import {Text,
        View,
        Image,
        Button,
        TextInput,
        ScrollView,  
        Dimensions,
        ToastAndroid,
        ActivityIndicator,
        TouchableHighlight} from 'react-native';
import { Icon } from 'react-native-material-design';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { toString } from '../services/GeoCoder';
import { createDateObject } from '../services/DataManager';

import style from '../style/GeoLocationStyle'

import MapStyle from '../style/mapStyle/MapStyle';

let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 4.615147;
const LONGITUDE = -74.113495;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              },
            address: false
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        navigator.geolocation.getCurrentPosition(
          position => {
            this.setState({
              region: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              },
              loading: false
            }, () => {
                this.setAddress(this.state.region.latitude, this.state.region.longitude)
            });
          },
        (error) => console.log(error.message),
        { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
        );
        this.watchID = navigator.geolocation.watchPosition(
          position => {
            this.setState({
              region: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }
            });
          }
        );
      }

    async setAddress(lat, lng) {
        let test;
        try {
            addressResult = await toString(lat, lng)
        } 
        catch(e) {
            test = "No address found"
        }
        return this.addressString(addressResult, lat, lng) 
    }

    addressString(arg, lat, lng) {
        this.setState({
            address: arg
        }, function() {
            createDateObject({'address': this.state.address, 'location': {'latitude': lat, 'longitude': lng}})
            .then(()=> {this.props.updateAddress(arg)});
        })
    }

    updateAddress(update) {
        createDateObject(update)
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);   
    }
    
  render() {

    let { address } = this.state

    return(
        <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'stretch'}}>
            <View>
                {address? 
                    <TextInput
                    style={style.textInputAddress}
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({address: text})}
                    onEndEditing={this.updateAddress({'address': this.state.address})}
                    value={address}
                    />
                    : 
                    <View style={{top: 8, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{marginHorizontal: 10, color: "#bbb"}}>Buscando tu posición...</Text>
                        <ActivityIndicator size='large' color="#4682b4" />
                    </View>
                }
            </View>
            
            <View style ={style.container}>
                <MapView
                provider={ PROVIDER_GOOGLE }
                style={[style.map, {maxHeight: height/1.2}] }
                showsUserLocation={ true }
                showsMyLocationButton={ false }
                zoomEnabled={ true }
                loadingEnabled={ true }
                region={ this.state.region }
                onRegionChange={ (region) => this.setState({region}) }
                onRegionChangeComplete={ (region) => this.setState({region: region, modifyAdress: true}) }>
                    <MapView.Marker
                    coordinate={ this.state.region }
                    />
                </MapView>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center', width: width, paddingBottom: 10}}>
                <View style={[style.mapButtonsContainer, {width: width * 0.7}]}>
                    <TouchableHighlight
                        underlayColor="transparent"
                        onPress={() => {this.setAddress(this.state.region.latitude,         this.state.region.longitude);
                            this.setState({modifyAdress: false})
                        }
                        }>  
                        <View style={style.mapButtonWrap}>
                            <View style={style.mapButton}>
                                <Icon name={'person-pin-circle'} color='#4D6171'
                                    size={40}/>
                            </View>
                            <Text style={{color: "#4D6171", margin: 5, fontSize: 14}}>Seleccionar</Text>
                        </View>
                    </TouchableHighlight>
                    
                    <View style={{borderRightWidth: 1, borderColor: "#ccc", marginBottom: 5, right: 5}}></View>

                    <TouchableHighlight
                        underlayColor="transparent"
                        onPress={() => {this.state.modifyAdress ?
                                        ToastAndroid.showWithGravity('Toca en seleccionar si esta es tu ubicación.', ToastAndroid.SHORT, ToastAndroid.CENTER)
                                        :
                                        this.props.enterDetails()
                                    }}>  
                        <View style={style.mapButtonWrap} >
                            <View style={style.mapButton}>
                                <Icon name={'play-circle-outline'} color={this.state.modifyAdress ? '#eee' : '#4682B4'}
                                    size={40}/>
                            </View>
                            <Text style={{color: this.state.modifyAdress ? '#eee' : '#4682B4', margin: 5, fontSize: 14}}>Continuar</Text>
                        </View>
                    </TouchableHighlight> 
                </View>
            </View>
        </View>      
    )
  }
}
