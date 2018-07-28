import React from 'react';
import {Text,
        View,
        ScrollView,
        Button,
        Image,
        TouchableHighlight,
        Dimensions } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../../style/Style.js';

import { InitGuideImages } from '../../data/data';

const { width, height } = Dimensions.get('screen');


export default class InitialGuide extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tip: 0
        };
    }

    setContent() {
        let { tip } = this.state
        return InitGuideImages[tip]
    }

    slide(arg) {
        let { tip } = this.state
        var Count = 0;
        if(arg === 'add' && tip !== InitGuideImages.length) {
            this.setState({tip: this.state.tip + 1})
        } 
        if(arg === 'sub' && tip !== 0) {
            this.setState({tip: this.state.tip - 1})
        } 
        else if(tip === InitGuideImages.length - 1) {
            this.setState({tip: 0})
        }
    }

    goToLogin = () => {
        let { showGuide } = this.props
        if(showGuide) {
            showGuide()
        }
        else {
            this.props.navigation.navigate('Login');
        }        
    };   

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#fff"}}>

                <View style={{flex: 1}}>
                    <TouchableHighlight
                        underlayColor="transparent"
                        onPress={() => this.slide('add')}>
                        <Image 
                            resizeMode={'stretch'}
                            source={this.setContent()} 
                            style={[style.guideImg, {width: width, height: height}]} />
                    </TouchableHighlight>
                </View>

                <View style={style.initialGuideControls}> 

                <TouchableHighlight
                underlayColor="transparent"
                onPress={() => this.slide('sub')}>
                <View style={style.modalClose}>
                    <Text style={{fontFamily: 'Comfortaa-Light', color: "#00bfff", backgroundColor: '#eee', paddingVertical: 5,paddingHorizontal: 20, }}>Anterior</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight
            underlayColor="transparent"
            onPress={() => this.goToLogin()}>
                <View style={style.modalClose}>
                    <Text style={{fontFamily: 'Comfortaa-Light', color: "#eee", backgroundColor: '#00bfff', paddingVertical: 5,paddingHorizontal: 40, }}>Cerrar</Text>
                </View>
            </TouchableHighlight>
        
            <TouchableHighlight
                underlayColor="transparent"
                onPress={() => this.slide('add')}>
                <View style={style.modalClose}>
                    <Text style={{fontFamily: 'Comfortaa-Light', color: "#00bfff", backgroundColor: '#eee', paddingVertical: 5,paddingHorizontal: 20, }}>Siguiente</Text>
                </View>
            </TouchableHighlight>
                </View>
            </View> 
        );
    }
};
