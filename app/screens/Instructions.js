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
import { CollapsibleSimple } from '../components/CollapsibleBox';
import { FloatingSingle } from '../components/FloatingMenu';

import { InstructionsContent } from '../data/data';


export default class Instructions extends Component {
  render() {
    return(
      <View style={style.instructionsMainContainer}>

        <ScrollView style={style.instructionsContainer}>
            <View style={style.instructionsContainerBody}>
                <Image
                style={{height:80, width:80, marginBottom: 20}} 
                source={require('../assets/userMenu.png')} />
                <Text style={style.initialMsg}>Encuentra aquí los principales temas de ayuda sobre Breve, nuestra app y nuestro servicio</Text>
            </View>

            {
            InstructionsContent.map((item, i) => {
                if(item.kind === "content") {
                    return (
                            <CollapsibleSimple key={i} title={item.title} content={item.description}  height={'100%'} />
                            ) 
                } else {
                   return (<View style={{padding: 30}} key={i}>
                                <Text style={{color: "#00bfff", fontSize: 25, textAlign: 'center'}}>{item.title}</Text>
                            </View>)
                    }
                })
            }

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
