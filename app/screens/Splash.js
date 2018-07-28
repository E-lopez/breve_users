import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator, Dimensions } from 'react-native';

import style from '../style/Style';

let { height } = Dimensions.get('screen')

export default class Splash extends Component {

  render() {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff"}}>
          <Image 
              source={require('../assets/breve_logo_0.2.png')} 
              style= {{height: 150, width: 200}}>
          </Image>
          <Text>Beta-0.2.10</Text>
          <ActivityIndicator 
            size='large' 
            color={"#4682b4"}
            style={{marginTop: 50}}
          />
          <Text style={{marginTop: 50, paddingHorizontal: 50, color: "#4682B4", fontSize: 14, textAlign: 'center'}}>¡Espera un momento! Breve está cargando una manera distinta de hacer las cosas...</Text>
      </View>
    )
  }
}
