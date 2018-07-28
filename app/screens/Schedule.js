import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Switch,
    Picker,
    Slider,
    Button,
    TextInput,
    ScrollView,
    Dimensions,
    TouchableHighlight
  } from 'react-native';

import { FloatingSingle } from '../components/FloatingMenu';
import { OptionsRendererCollapsible } from '../components/ContentRenderer';

import style from '../style/ScheduleStyle';

import { SessionTopics, SessionTopicsGrouped } from '../data/data';


let { width, height } = Dimensions.get('screen');

export default class ScheduleStart extends Component {
  render() {
    const { params } = this.props.navigation.state
    return(
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <ScrollView style={style.containerSkills}> 
              <View style={style.skillsIntro}>
                  <Text style={style.skillsIntroTxt}>Escoge habilidad y tema. Desliza a la derecha para ver más opciones.</Text>
              </View>  
                   
              <View style={{flex: 1}}>
              {Object.keys(SessionTopicsGrouped).map((key, i) => {
                  let content = SessionTopicsGrouped[key]
                  return(
                    
                      <OptionsRendererCollapsible
                        data={params} 
                        key={i}
                        title={content.cat} 
                        icon={content.icon} 
                        content={content.options} 
                        color={content.color} 
                        {...this.props} />   
                                       
                  )
                })
              }
              </View>  
          </ScrollView>

          <FloatingSingle navigate={this.props.navigation.navigate} func={'goTo'} target={'Entry'} icon={'arrow-back'} />
        </View>
    )
  }
}