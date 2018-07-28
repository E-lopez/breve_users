import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Button,
  Animated,
  Dimensions,
  ScrollView,
  TouchableHighlight
  } from 'react-native';
  
import { Icon } from 'react-native-material-design';

import style from '../../style/MainHeaderStyle';

let { width } = Dimensions.get('screen')


export default class Usage extends Component {

    remaining(arg) {

    let { floor, ceil } = Math
    var payed = parseInt(this.props.Payed)
    var used = parseInt(this.props.Used)
    var balance = 0
    switch (arg) {
        case 'D':
            balance = floor((payed - used)/60000)
            return balance === NaN ? 0 : balance
        case 'S':
            balance = floor((payed - used)/40000)
            return balance === NaN ? 0 : balance
        case 'T':
            balance = (payed - used) 
            return balance === NaN ? 0 : balance
    }

      
      return (payed - used)
    }
    render() {
      const { Payed, Used } = this.props

      return(
          <Animated.View style={style.usageBox}>

              <View style={style.usageItem}>
                  <Icon name="group" color="#fff" size={20} />
                  <Animated.Text style={[style.usageItemLabel, {fontSize: width * 0.035}]}>Doble {this.remaining('D')}</Animated.Text>
              </View>  

              <View style={style.usageItemMid}>
                 <Icon name="person" color="#fff" size={20} />
                  <Animated.Text style={[style.usageItemLabel, {fontSize: width * 0.035}]}>Sencilla {this.remaining('S')}</Animated.Text>
              </View> 

              <View style={style.usageItem}>
                <Icon name="monetization-on" color="#fff" size={20} />
                  <Animated.Text style={[style.usageItemLabel, {fontSize: width * 0.035}]}>{(this.remaining('T')).toLocaleString()}</Animated.Text>
              </View>  

          </Animated.View>
      )
    }
  }
