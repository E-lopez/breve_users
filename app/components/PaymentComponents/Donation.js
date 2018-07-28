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


export default class Donation extends Component {
    render() {
        let { showPayment, method } = this.props
        return(
            <View>
               <Text>Donation</Text>
            </View>
        )
    }
}