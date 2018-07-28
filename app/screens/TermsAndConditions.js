import React, { Component } from 'react';
import { 
    Text,
    View,
    Image,
    TextInput,
    ScrollView,  
    TouchableHighlight, 
    Button } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../style/InstructionsStyle';

import Header from '../components/UserHeader';
import { FloatingSingle } from '../components/FloatingMenu';

import { InstructionsContent } from '../data/data';


export default class TermsAndConditions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skill: ''
        }
    }

  render() {

    return(
            <View style={style.instructionsMainContainer}>
      
              <ScrollView style={style.instructionsContainer}>
                    <View style={style.instructionsContainerBody}>
                        <Image
                        style={{height:80, width:80, marginBottom: 20}} 
                        source={require('../assets/lock.png')} />
                        <Text style={style.initialMsg}>Aquí está la letra menuda de nuestros servicios. Te agradecemos que la tengas presente al usar Breve.</Text>
                    </View>
      
                    <View style={{padding: 20}}>
                        <Text>Aquí encontrarás los términos de uso de la app y políticas de seguridad de la información.</Text>
                    </View>
        
                    <View style={style.brandInstructions}>
                        <Text>Esto es</Text>
                        <Image
                        style={{height:90, width:150}} 
                        source={require('../assets/breve_logo_0.2.png')} />
                    </View>
              </ScrollView>

              <FloatingSingle icon={'arrow-back'} func={'goTo'} target={'Entry'} navigate={this.props.navigation.navigate} />
              
            </View>
    )
  }
}
