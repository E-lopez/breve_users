import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Switch,
    Picker,
    Slider,
    Animated,
    TextInput,
    Dimensions,
    ScrollView,
    TouchableHighlight
  } from 'react-native';
import { Icon } from 'react-native-material-design';

import { createDateObject } from '../../services/DataManager';

import style from '../../style/ScheduleStyle';

let { width } = Dimensions.get('screen')
const QualiItems = {actitude: 'actitud', clarity: 'claridad', speak: 'solo inglés', fun: 'diversión', knowledge: 'conocimiento', punctuality: 'puntualidad'}

export default class Hours extends Component {
    constructor(props) {
      super(props);
      this.state = {
          fadeAnim: new Animated.Value(0)
      }
    }

    componentDidMount() {
        Animated.timing(
          this.state.fadeAnim,
          {
              toValue: 1,
              duration: 500,
          }
      ).start();
    }

    pushData(params) {
      createDateObject(params)
      .then(() => {
        this.props.function()
      })
    }

  render() {
    const { guides } = this.props
    let { fadeAnim } = this.state   
    return(
        <Animated.View style={[style.guidesContainer, {opacity: fadeAnim}]}>
        
          {!Object.keys(guides).length ? 
                      <View style={style.guidesContainerTitle}>
                          <Text style={style.guidesTitle}>No tenemos guías disponibles en ese rango, o no nos has dicho dónde estás.</Text>
                          <Image 
                          source={require('../../assets/attention.png')} 
                          style={style.guideImage} />
                      </View>
                    :
                  <View>
                  
                    <View style={style.guidesContainerTitle}>
                      <Text style={style.guidesTitle}>Guías disponibles para tí</Text>
                    </View>
    
                    {guides.map((guide, id) => {
                          return (
                            <View style={{borderBottomColor: "#eee", borderBottomWidth: 2, marginBottom: 20, maxWidth: width}} key={id}>
                              <TouchableHighlight
                                onPress={() => this.pushData({guide: {name: guide.profile.name, guideKey: guide.user, distance: guide.distance, time: Math.ceil(guide.distance*60/10)+5}})}
                                underlayColor={"transparent"}
                                >  
                                  <View style={style.guideMainWrap}> 
                                    <View style={style.innerGuideBtn}>
                                      <Image 
                                        source={require('../../assets/bus.png')} 
                                        style={style.guideImage} />
                                        <View style={style.guideLabelWrap}>
                                          <Text style={style.guideLabel}>
                                            {guide.profile.name}
                                          </Text>
                                          <Text style={style.guideInfoPro}>{guide.profile.profession}
                                          </Text>
                                      </View>
                                      <Text style={style.guideRate}>{guide.feedback.average}</Text>
                                    </View>
                                  </View>
                                </TouchableHighlight>

                                <View style={style.guideInfoWrap}>
                                  <View style={style.guideIndicatorsWrap}>
                                    {!guide.feedback.average ? 
                                      <Text style={style.feedbackNull}>No tiene calificaciones todavía, pero ¡no dudes de sus capacidades! Sólo invitamos a los mejores.
                                      </Text>
                                      :
                                      Object.keys(guide.feedback).map((key, i) => {
                                        let item = guide.feedback[key]
                                        let{ count } = guide.feedback 
                                        var itemScore = Math.ceil(item/count*100)
                                        var color;

                                        if(key === 'comments') { return; }

                                        if (itemScore < 60 ) { return }
                                        else if (itemScore >= 60 && itemScore < 80) { color = "#EEDF79" }
                                        else if (itemScore >= 80) { color = "#49BEAA" }
                                        
                                        if(key==='average' || key=== 'generalScore' || key === 'count') { return; }

                                        return (
                                          <View style={style.guideIndicatorsBox} key={i}>
                                            <View style={style.guideIndicatorsTop}>
                                                <View style={[style.guideItemScore, {backgroundColor: color}]}>
                                                  <Text style={style.guideItemNum}>{Math.ceil(itemScore).toFixed(0)}</Text>
                                                </View>
                                                <Text style={style.guideItemLabel}>{QualiItems[key]}</Text>
                                            </View>
                                          </View>
                                        )
                                      })
                                    } 
                                  </View>

                                  <View style={style.guideDistanceBox}>
                                    <View style={style.guideDistanceBoxInner}>
                                      <Text style={style.guideDistanceBoxTitle}>Guía a</Text>
                                      <Text style={style.guideDistanceBoxData}>{(guide.distance+1).toFixed(2)} km</Text>
                                    </View>
                                    <View style={style.guideDistanceBoxInner}>
                                    <Text style={style.guideDistanceBoxTitle}> Llegaría en</Text>
                                      <Text style={style.guideDistanceBoxData}>{Math.ceil(guide.distance*60/8)} minutos</Text>
                                    </View>
                                  </View>
                                </View>
                            </View> 
                          )
                        })
                      }  
                  </View>
            }
        </Animated.View>
    )
  }
}
