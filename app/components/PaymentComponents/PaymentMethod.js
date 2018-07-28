import React, { Component } from 'react';
import {Text,
        View,
        Image,
        Modal,
        Button,
        ScrollView,
        ToastAndroid,
        TouchableHighlight } from 'react-native';
import style from '../../style/paymentStyle/PaymentMethodStyle';
import { Icon } from 'react-native-material-design';

import BoxOffice from './BoxOffice';
import Donation from './Donation';


export default class PaymentMethod extends Component {
    setContet(method) {
        switch (method) {
            case 'Giros':
                return <BoxOffice />
            case 'Bancos':
                return <Text>Bancos</Text>
            case 'Tarjeta':
                return <Text>Tarjeta</Text>
            case 'Código Regalo':
                return <Text>Código Regalo</Text>
            case 'Donar una sesión':
                return <Donation />
            default:
                return <Text>loading...</Text>
        }
    }

    render() {
        let { showPayment, method } = this.props
        return(
            <View>
                <TouchableHighlight
                    style={{alignItems: 'flex-end'}}
                    onPress={() => showPayment(false)}
                    underlayColor="transparent">
                    <View>
                    <Icon name="close" color="#555" size={40} />
                    </View>
                </TouchableHighlight>
                
                <View>
                    {this.setContet(method)}
                </View>
            </View>
        )
    }
}