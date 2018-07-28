import React, { Component } from 'react';
import {Text,
        View,
        Image,
        Alert,
        Button,
        Animated,
        TextInput,
        Dimensions,
        ScrollView,
        ToastAndroid,
        TouchableHighlight
        } from 'react-native';
import { Card, Icon } from 'react-native-material-design';
import style from '../style/CancelSessionStyle';

import { FloatingSingle } from '../components/FloatingMenu';
import Header from '../components/UserHeader';

import { CANCEL_SESSION } from '../services/DataManager';

import { CancelReasons } from '../data/data';

let { width } = Dimensions.get('screen')


export default class CancelSession extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: false,
            reason: ''
        }
    }

    validate_cancel_session() {
        let { type, code } = this.state
        let { data } =  this.props.navigation.state.params

        console.log("CANCEL SESSION 41", type, code, data)

        var scheduled_time = Object.keys(data)['0']
        var expected_time = parseInt(data[scheduled_time].time) * (60 * Math.pow(10, 3))

        var expected_hour = new Date(parseInt(scheduled_time) + expected_time).toLocaleTimeString()

        var waiting_time = (Date.now() + (60 * Math.pow(10, 3))) > (parseInt(scheduled_time) + expected_time + (5 * (60 * Math.pow(10, 3))))

        var minutes_toll = ((Date.now() - parseInt(scheduled_time)) / (60 * Math.pow(10, 3))).toFixed(0)

        var penalty = 0;

        if(type === 'u' && minutes_toll <= 11)
        {
            penalty = 2000
        }
        else if(type === 'u' && minutes_toll > 11)
        {
            penalty = (Math.floor(minutes_toll - 10/2).toFixed(0) * 200) + 2000    
        }

        data_min = {
            guideKey: Object.values(data)['0'].guideKey,
            type: Object.values(data)['0'].type,
            penalty: penalty
        }

        //console.log("Cancel session 68", data_min)

        if(!waiting_time && code === 'time') 
        {
            Alert.alert(
               'Ten paciencia',
               'Tu guía debería llegar a las ' + " " + expected_hour +". Si puedes, dale 5 minutos después de la hora esperada.",
                [
                  {text: 'Ok', onPress: () => { return; }, style: 'cancel'}
                ],
                { cancelable: true }
            )
        }
        else if (code === 'location') 
        {
            Alert.alert(
                'Esta es tu ubicación',
                data[scheduled_time].address + " " + data[scheduled_time].indication + " " + " ¿Es correcta?",
                [
                  {text: 'Es correcta', onPress: () => { 
                      this.cancel_confirmed(type, code, data_min)
                    }},
                  {text: 'Cometí un error', onPress: () => { return; }, style: 'cancel'}
                ],
                { cancelable: true }
            )
        }
        else 
        {
            Alert.alert(
                'Cancelar sesión',
                '¿Estás seguro de cancelar tu sesión?',
                [
                  {text: 'Continuar', onPress: () => { 
                      this.cancel_confirmed(type, code, data_min)
                    }},
                  {text: 'Volver', onPress: () => { return; }, style: 'cancel'}
                ],
                { cancelable: true }
            )
        }
    }

    cancel_confirmed(type, code, data) {
        CANCEL_SESSION(type, code, data)
        .then(() => {
            this.props.navigation.navigate('Home')
        })
        .catch((err) => console.log(err)) 
    }

    render() {
        let { code, type } = this.state
        //console.log("Cancel Session 129", type)
        return(
            <View style={style.cancelWrap}>

                <Header title={'Cancela tu sesión'} color={"#eee"}/>

                <ScrollView>
                    <View style={style.cancelListWrap}>
                        <Text style={style.cancelListTitle}>Cuéntanos por qué quieres cancelar tu sesión</Text>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginBottom: 40}}>
                        {CancelReasons.map((item, i) => {
                            var color = item.code === code ? "#00bfff" : "#537A9A"
                                return (
                                    <TouchableHighlight 
                                        key={i}
                                        onPress={() => 
                                            this.setState({
                                                    type: item.type,
                                                    reason: item.title,
                                                    code: item.code
                                                })
                                            }
                                        style={style.cancelReasonWrap} 
                                        underlayColor="transparent"
                                        >
                                        <View style={[style.cancelReason, {width: width*0.45, backgroundColor: color}]}>
                                            <Image source={item.icon} style={{width: 40, height: 40}} />
                                            <Text style={style.cancelReasonTxt}>{item.title}</Text>
                                        </View>
                                    </TouchableHighlight>
                                )
                            })
                        }
                    </View>

                    <TouchableHighlight 
                        onPress={() => 
                            code ?
                            this.validate_cancel_session()
                            :
                            null
                        }
                        style={style.cancelButtonWrap}
                        underlayColor="transparent">
                        <View style={style.cancelButton}>
                            <Icon name="delete" color="#4D6171" size={60} />
                        </View>
                    </TouchableHighlight>
                    
                </ScrollView>
                    
                <FloatingSingle icon={'arrow-back'} func={'goTo'} target={'Entry'} navigate={this.props.navigation.navigate} />

            </View>
        )
    }
}