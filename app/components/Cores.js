import React, { Component } from 'react';
import { 
    Text,
    View,
    Image,
    TextInput,
    Dimensions,
    ScrollView,  
    TouchableHighlight, 
    Button } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../style/CoresStyle';

import ContentRenderer from '../components/ContentRenderer';

import { CoreButtons } from '../data/data';

let { width } = Dimensions.get('screen')

export default class Cores extends Component {

    startScheduling(arg, arg2) {
        let { user, showScoringBoard } = this.props
        var color;    
        
        if(arg === 'single') {
                color = "#00bfff"
        } else {
                color = "#41C1B7"
        }
        this.props.navigation.navigate('SkillSelect', {type: arg, color: arg2, user: user})
    }

  render() {
    return(
        <View style={style.coresBox}>
            <View style={style.instruction}>
                <Text style={{fontSize:30, fontFamily: 'Exo2-Regular', color: "#4D6171"}}>Agéndate</Text>
            </View>

            {CoreButtons.map((item, i) => {
                return (
                    <TouchableHighlight
                        key={i} 
                        underlayColor={"#fff"}
                        onPress={() => this.startScheduling(item.name, item.color)}>
                            <View style={[style.coreBox, {backgroundColor: item.color, width: width * 0.95}]}>
                                <Image
                                style={{height: width*0.2, width: width * 0.2}} 
                                source={item.icon} />
                                <Text style={style.coreName}>{item.display}</Text>
                            </View>
                        </TouchableHighlight>
                )
            })}
                    
            <View style={{paddingHorizontal: 10, marginTop: 10}}>
                <Text style={{textAlign: 'center', fontSize: 16, color: "#4D6171", fontFamily: 'Exo2-Regular'}}>Selecciona individual si quieres tomar la sesión sólo, o doble si quieres tomarla con alguien más.</Text>
            </View>
      </View>
    )
  }
}
