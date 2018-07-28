import React, { Component } from 'react';
import {Text,
        View,
        Image,
        Button,
        Dimensions,
        ScrollView,
        TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-material-design';

import holder from '../assets/job.png';

import style from '../style/DrawerStyle';

let { width } = Dimensions.get('screen')

export default class Header extends Component{
        userSettings() {
            this.props.navigation.navigate('Content')
        }
    
        render() {
            return(
                <View style={[style.header, {backgroundColor: this.props.color}]}>
                    <View style={style.headerImg}>
                        {this.props.pic ? 
                            <Image source={{uri: '' + this.props.pic}}
                               style= {style.userImage} />
                               :
                            <Image source={holder}
                               style= {style.userImage} />
                        }
                    </View>
                    <View style={style.headerTxt}>
                        {this.props.name ? 
                            <Text style={[style.headerTxtContent, {fontSize: width * 0.075}]}>
                                Anónimo
                            </Text>
                            :
                            <Text style={[style.headerTxtContent, {fontSize: width * 0.075}]}>{this.props.title}</Text>
                        }
                    </View>
                </View>
            )
        }
    }
