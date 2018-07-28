import React, { Component } from 'react';
import {Text,
        View,
        Image,
        Alert,
        Switch,
        Picker,
        Slider,
        Button,
        Animated,
        Vibration,
        TextInput,
        ScrollView,
        TouchableHighlight} from 'react-native';
import { Icon } from 'react-native-material-design';

import { FloatingSingle } from '../../components/FloatingMenu';

import { fetchDateObject, ADD_SESSION } from '../../services/DataManager';

import style from '../../style/ConfirmStyle';

export default class DateTime extends Component {
    constructor(props) {
      super(props);
      this.validateCredit = this.validateCredit.bind(this)
      this.state = {
          info: {},
          reload: false
      }
    }

    componentWillReceiveProps(){
        fetchDateObject().then((info) => {
            this.setState({
                info: info
            })
        })
      }
 
    validateCredit() {
        let { user, navigation } = this.props
        let { type } = this.state.info

        var amount = type === 'double' ? 60000 : 40000
        var available = user['user'].payed - (user['user'].used + amount)

        if(available >= 0){
            ADD_SESSION(navigation, 'card')
        } else {
            Alert.alert(
                '¡No te quedan horas!',
                'Compra un paquete prepagado para que puedas seguir utilizando Breve.',
                [{text: 'Ok', onPress: () => {return;} }],
                {cancelable: true}
            )
        }
    }

  render() {
    const { info } = this.state
    return(
      <View>
      
        <View style={style.indicator}>
          <Text style={style.indicatorLabel}>Confirma tu Sesión</Text>
        </View>

        {!info.address||!info.indication||!info.skill||!info.guide.name? 
            <View style={style.confirmMissingData}>
                <Text style={{textAlign: 'center', fontSize: 20}}>Parece que no has llenado toda la info. Revisa los campos y cuando vuelvas, presiona reload.</Text> 
                <Image
                style={{height:80, width:80, marginVertical: 40}} 
                source={require('../../assets/barrier.png')} />
                <Button title="reload" onPress={() => this.setState({reload: !this.state.reload})} />
            </View>
            :
            <View style={style.optionsContainer}>

                <View style={style.confirmItemBox}>
                    <Text style={style.confirmItem}>Sesión {info.type === 'single' ? 'Individual' : 'Doble'}</Text>
                    <Text style={style.confirmItemPrice}>${info.type === 'single' ? '40.000' : '60.000'}</Text>
                    <Image
                        style={{height:80, width:80, margin: 20}} 
                        source={info.type === 'single' ?
                                require('../../assets/single.png')
                                :
                                require('../../assets/double.png')
                        } />
                </View>

                <View style={style.confirmItemBox}>
                    <Text style={style.confirmItem}>Fecha</Text>
                    <Text style={style.confirmItemRes}>{new Date().toLocaleDateString() + ', ' + new Date().toLocaleTimeString()}</Text>
                </View>

                <View style={style.confirmItemBox}>
                    <Text style={style.confirmItem}>Skill y Tema</Text>
                    <Text style={style.confirmItemRes}>{info.skill}, {info.topic}</Text>
                </View>

                <View style={style.confirmItemBox}>
                    <Text style={style.confirmItem}>Ubicación</Text>
                    <Text style={style.confirmItemRes} numberOfLines={4} ellipsizeMode='tail'>{(info.address).split(',', 1)}</Text>
                    <Text style={style.confirmItemRes} numberOfLines={4} ellipsizeMode='tail'>{info.indication}</Text> 
                </View>

                <View style={style.confirmItemBox}>
                    <Text style={style.confirmItem}>Tu Guía</Text>
                    <Text style={style.confirmItemRes}>{info.guide.name}</Text>
                </View>

                <View style={style.confirmItemBox}>
                    <Text style={style.confirmItem}>Distancia guía</Text>
                    <Text style={style.confirmItemRes}>{(info.guide.distance).toFixed(1)} km</Text>
                </View>

                <View style={style.confirmItemBox}>
                    <Text style={style.confirmItem}>Llegada estimada</Text>
                    <Text style={style.confirmItemRes}>{(info.guide.time)} minutos</Text>
                </View>

                <View style={style.confirmButton}>
                    <TouchableHighlight 
                        onPress={() => {this.validateCredit();
                                        Vibration.vibrate(50)}}
                        underlayColor='#FFF'>
                        <View style={style.confirmButtonInner}>
                            <Text style={{color: "#FFF", fontFamily: 'Exo2-Regular', fontSize: 24}}>Agendar</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View>
                    <FloatingSingle navigate={this.props.navigation.navigate} func={'goTo'} target={'Entry'} icon={'arrow-back'} />
                </View>

            </View> 
        }       
      </View>
    )
  }
}
