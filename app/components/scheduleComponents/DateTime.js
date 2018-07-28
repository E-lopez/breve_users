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
    ScrollView,
    Dimensions,
    ActivityIndicator,
    TouchableHighlight
  } from 'react-native';

import { createDateObject, appointmentValidator } from '../../services/DataManager';

import Hours from './AvailableHour';

import style from '../../style/ScheduleStyle';

let { width, height } = Dimensions.get('screen')


export default class DateTime extends Component {
    constructor(props) {
      super(props);
      this.state = {
          guides: {},
          loading: false,
          viewGuides: false,
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

    searchGuides(dist) {
      this.setState({loading: true, dist: dist})

      appointmentValidator(this.props.navigation, dist).then((guides) => {
        // console.log("DATE TIME", guides)
        this.setState({
          guides: guides,
          loading: false,
          viewGuides: true
        })
      })
      .catch(err => {console.log(err)});              
    }


  render() {
    let { fadeAnim, guides } = this.state
    var distances =  [1,3,6,10]
    return(
      <Animated.View style={{opacity: fadeAnim, width: width * 0.98}}>
        <View style={style.setTimeIndication}>
          <Text style={style.setTimeLabel}>Filtra tu guía por distancia.</Text>
        </View>

        <View style={style.distButtonsWrap}>
          {distances.map((dist, i) => {
            var distInt = parseInt(dist)
            var color = this.state.dist === dist? true : false
            return (
                    <TouchableHighlight
                      key={i}
                      underlayColor={'transparent'}
                      onPress={()=> this.searchGuides(distInt)}>
                      <View style={[style.dateButton, {backgroundColor: color ? "#777" : "#eee"}]}>
                          <Text style={style.dateButtonText}>{dist}</Text>
                          <Text style={style.dateButtonTextKm}> km</Text>
                      </View>
                    </TouchableHighlight>)
          })}
        </View>

        <View>
          {
            this.state.viewGuides ?
            <Hours guides={guides} navigation={this.props.navigation} function={this.props.function} /> 
            :
            <View style={style.avaMessage}>
              <Text style={{color:"#FFF", marginVertical: 30, fontSize: 20, textAlign: 'center'}}>Cuando elijas una distancia, ¡aquí verás los guías disponibles!</Text>
              <Image source={require('../../assets/video-player.png')} 
              style={style.avaMessageImg} />
              {this.state.loading? 
                <ActivityIndicator size={'small'} color="#fff" />
                : 
                <View style={{height: 20}}></View>
              }
            </View>
          }      
        </View>
      </Animated.View>
    )
  }
}
