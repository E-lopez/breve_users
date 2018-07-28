import React, { Component } from 'react';
import {Text,
        View,
        Image,
        Button,
        Animated,
        Dimensions,
        ScrollView,
        TouchableHighlight} from 'react-native';
import { Card, Icon, Avatar } from 'react-native-material-design';

import style from '../style/optionsScheduleStyle';

import { FloatingSingle } from './FloatingMenu';

import { createDateObject } from '../services/DataManager';

import { SessionTopics, SessionTopicsGrouped } from '../data/data';

import slide from '../assets/slide.png'
let { height, width } = Dimensions.get('window')



export class OptionsRendererCollapsible extends Component {
  continue(params) {
    createDateObject({skill: params.skill, topic: params.topic, type: params.type})
    .then(() => {
      this.props.navigation.navigate('Place', {user: this.props.data.user})
    })
  }

render() {
let { data, title, content, icon, color } = this.props
  return(
      <View style={[style.optionBox, {backgroundColor: color}]}>
            <View style={style.optionName}>
         
                <Text style={style.optionNameTxt}>{title}</Text>
                <Image source={slide} style={{width: width * 0.07, height: width * 0.07}} />
            </View>

        <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={style.optionsButtons} >
          {content.map((item, i) => {
              // console.log("CONTENT RENDERER", item)
              return (
                <TouchableHighlight
                key={i}
                underlayColor={"#fff"}
                onPress={() => this.continue({skill: item.cat, topic: item.name, type: data.type})}>
                  <View style={[style.optionBodyWrap, {borderColor: color, width: width * 0.6}]}>
                    <Text style={[style.optionBodyIndex, {backgroundColor: color}]}>
                      {i + 1}
                    </Text>
                    <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'center'}}>
                      <Text style={style.optionBody}>
                          {item.name}
                      </Text>
                    </View>
                  </View>
                </TouchableHighlight>
              )
            })
          }
        </ScrollView> 
      </View>
    )
  }
}

