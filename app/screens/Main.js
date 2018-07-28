import React, { Component } from 'react';
import { Dimensions, View, ScrollView, TouchableHighlight, Vibration, ToastAndroid } from 'react-native';

import Start from './Start';
import Splash from './Splash';

import style from '../style/Style.js';

import { firebaseApp } from '../services/Firebase';
import { BYPASS_LOGIN } from '../services/AuthManager';

let { width, height } = Dimensions

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        firebaseApp.auth().onAuthStateChanged((user) => {
            console.log("MAIN 24", user)
            if(user) {
                this.updateState(false);
                // BYPASS_LOGIN(user.uid, user.providerData).then((response) => {
                //     console.log("MAIN 27", response)
                //     if(response) {
                //         ToastAndroid.showWithGravity("¡Bienvenidx a un mundo de nuevas posibilidades!.", ToastAndroid.LONG, ToastAndroid.CENTER);
                //     }
                //     this.props.navigation.navigate('Content', {welcome: response})
                // });
                this.props.navigation.navigate('Content', {welcome: false})
            }
            else {
                this.updateState(true)
            }
        })
    }

    updateState(arg) {
        this.setState({
            loading: arg
        })
    }

    bypassLogin() {
        this.props.navigation.navigate('Content')
        Vibration.vibrate([50,50])
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#fff"}}>
                {
                    this.state.loading ? <Start {...this.props} showGuide={false} /> : <Splash /> 
                }  
            </View>
        );
    }
};




