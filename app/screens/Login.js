import React, { Component } from 'react';
import {Text, 
        View,
        Image, 
        Button,  
        TextInput,
        Dimensions,
        ScrollView, 
        ToastAndroid,
        ToolbarAndroid,
        ImageBackground, 
        ActivityIndicator, 
        TouchableHighlight } from 'react-native';
import { firebaseApp } from '../services/Firebase';
import * as firebase from 'firebase';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { Icon } from 'react-native-material-design';

import fb from '../assets/facebook.png';
import background from '../assets/login_bg_0.1.0.png';

import style from '../style/LoginStyle';

let { height, width } = Dimensions.get('screen')


export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.loginFB = this.loginFB.bind(this);
        this.state = {
            loading: false,
            email: '',
            password: '',
            register: true
        }
    }

    async loginFB() {
        LoginManager.logInWithReadPermissions(['public_profile', 'email'])
        .then((result) => {
            if (result.isCancelled) 
            {
                return Promise.reject(
                    new Error('The user cancelled the request')
                    ).then((res) => console.log(res))
                    .catch((err) => {return;});
            }
            else 
            {
                AccessToken.getCurrentAccessToken()
                    .then((data) => {
                        const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                        firebaseApp.auth().signInWithCredential(credential).then((user) => {
                            return user;
                        })
                        .catch((err)=> console.log('Login 65', err));
                    })
                    .then((user) => {
                        this.setState({ loading: false });
                        this.props.navigation.navigate('Home');
                    })
                    .catch((error) => {
                        const { code, message,credential } = error;
                        console.log("LOGIN 71", error, code, message, credential)
                    });
                }
        })
        .catch((err) => console.log("LOGIN 69", err))
    }

    goBack(){
        this.props.navigation.navigate('Home')
    }  

    render() {
            return(
                    <ImageBackground 
                        source={background}
                        style={style.loginContainer}>
                        {this.state.loading ? 
                            <View style={[style.loginWrap, {height: height*0.9}]}>
                                <ActivityIndicator size="large" color="#00bfff"/> 
                            </View>
                            :
                            <View>
                                <View style={[style.loginUpper, {flex: 0.75}]}>
                                    <Image 
                                    source={require('../assets/breve_logo_0.2.png')} 
                                    style= {style.authImage} />
                                </View>
                        
                                <View style={{flex: 0.25}}>
                                    <View style={style.loginButtonsWrap}>
                                        <TouchableHighlight 
                                            onPress={() => this.loginFB()}
                                            underlayColor='transparent'>
                                            <View style={style.loginFbWrap}>
                                                <Image 
                                                source={fb} 
                                                style= {style.loginButtonImage} />
                                                <Text style={style.loginButtonText}>Entra con Facebook
                                                </Text>
                                            </View>
                                        </TouchableHighlight>

                                        <TouchableHighlight 
                                        underlayColor='transparent'
                                            onPress={this.goBack.bind(this)}>
                                            <View style={style.loginFbWrap}>
                                                <Icon name="help" color="#4c94d0" size={20} />
                                                <Text style={style.loginButtonText}>La app
                                                </Text>
                                            </View>
                                        </TouchableHighlight>
                                    </View>

                                    <View> 
                                        <TouchableHighlight 
                                        onPress={() => this.props.navigation.navigate('Register')}
                                            underlayColor={'transparent'}
                                            >
                                            <View>
                                                <Text style={style.loginPolicyButton}>Conoce nuestra <Text style={{color: "#00bfff"}}>política de privacidad</Text></Text>
                                            </View>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </View>
                            }
                    </ImageBackground>                
            );
        }
}




     