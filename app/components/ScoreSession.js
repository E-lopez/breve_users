import React, { Component } from 'react';
import { 
    Text,
    View,
    Modal,
    Image,
    Button ,
    TextInput,
    ScrollView,
    Dimensions,
    ToastAndroid,  
    ActivityIndicator,
    TouchableHighlight
} from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../style/ScoreStyle'

import { ItemRank } from '../data/data';
import { GET_PENDING_SESSION, SUBMIT_SCORE } from '../services/DataManager';

let { width } = Dimensions.get('screen')


export default class ScoreSession extends Component {
    constructor(props) {
        super(props);
        setScore = this.setScore.bind(this);
        this.state = {
            comment: 'none',
            loading: false,
            session: '',
            general: 0,
            items: []
        }
    }

    componentDidMount() {
        let { session } = this.props
        if(session){
            var date = Object.keys(session)
            session = Object.values(session)[0]
            this.setState({session: session, date: date})
        }
    }

    setScore(arg) {
        var newItems = Array.from(this.state.items)
        if(!newItems.includes(arg)){
            newItems.push(arg)
        } else {
            var index = newItems.indexOf(arg)
            newItems.splice(index, 1)
        }
        this.setState({items: newItems})
    }

    validateSubmission() {
        let { general, items } = this.state

        if(general !== 0 && items.length !== 0) {
            SUBMIT_SCORE(this.state).then(() => {
                this.setState({
                    comment: '',
                    loading: false,
                    session: '',
                    general: 0,
                    items: []
                }, () => {
                    this.props.update(false)
                })
            })
            .catch((err) => console.log(err))
        } else if (general !== 0 || items.length !== 0) {
            return ToastAndroid.showWithGravity('Te falta una parte: puntaje general o características.', ToastAndroid.LONG, ToastAndroid.CENTER);
        }
        else {
            return ToastAndroid.showWithGravity('No has calificado. Las calificaciones ayudan a mejorar el servicio.', ToastAndroid.LONG, ToastAndroid.CENTER);
        }
    }

    render() {
        let { session, date, general, items, loading } = this.state
        let { closeBoard } = this.props
        var rank = [1, 2, 3, 4, 5]
        return(
            <ScrollView style={style.scoreWrap}>
                <Text style={style.scoreInitialLine}>¡Califica tu último guía! Desliza hacia abajo y contesta con honestidad.</Text>
                    <View style={style.scoreSession}>
                        <View style={style.scoreImage}>
                            <Image
                            style={{height:80, width:80}} 
                            source={require('../assets/feedback.png')} />
                        </View>
                        <View style={style.scoreInfo}>
                            <Text style={style.scoreInfoDate}>
                                {new Date(parseInt(date)).toDateString()}
                            </Text>
                            <Text style={style.scoreInfoText}>
                                {session.guide} - {session.skill}
                            </Text>
                        </View>                
                    </View>

                    <TouchableHighlight
                    onPress={() => closeBoard()}
                    underlayColor="transparent">
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                            <Text style={{color: "#fff", fontFamily: 'Exo2-Regular'}}>Más tarde </Text>
                            <Icon name="highlight-off" color={"#fff"} size={40} />
                            
                        </View>
                    </TouchableHighlight>

                        <View style={style.scales}>
                            <View style={style.scaleTitle}>
                                <Text style={style.scaleTitleText}>1. Calificación general</Text>
                                <Text style={style.scaleTitleTextSub}>¿De 1 a 5 cuánto le das a tu último guía?</Text>
                            </View>
                            <View style={style.scaleStars}>
                            {rank.map((item, i) => {
                                var color = "#ccc",
                                    icon = "star-border"
                                if(i <= 2 && i < general) { color = "#3F94DB", icon = "star" }
                                else if(i === 3 && i < general) { color = "#4682B4", icon = "star" }
                                else if (i > 3 && i < general) { color = "#537A9A", icon = "star" }
                                return <TouchableHighlight
                                        key={i} 
                                        underlayColor={'transparent'}
                                        onPress={() => this.setState({general: i + 1})}>
                                            <View style={{marginHorizontal: 5}}>
                                                <Icon name={icon} color={color} size={50} />
                                            </View>
                                        </TouchableHighlight>
                                })
                            }
                            </View>
                            <View style={style.scoreNumWrap}>
                                <Text style={style.scaleTitleNum}>
                                    {general? general : 0}
                                </Text>
                            </View>

                            <View style={style.scoreItemsWrap}>
                                <Text style={style.scoreIndication}>2. De las siguientes opciones, ¿cuáles cumplió tu guía?</Text>
                                <Text style={style.scaleTitleTextSub}>Verde: cumplió. Azul: no cumplió.</Text>
                                {ItemRank.map((item, i) => {
                                    var color;
                                    if(items.includes(item.title)) { var color = true }
                                    return (
                                        <TouchableHighlight
                                        key={i}
                                        style={[style.scoreButtons, {width: width * 0.5}]}
                                        underlayColor={'transparent'}
                                        onPress={() => this.setScore(item.title)}>
                                            <View style={color? style.scoreButtonsInnerActive : style.scoreButtonsInner}>
                                                <View style={style.scoreTop}>
                                                    <View style={style.scoreButtonsImageWrap}>
                                                    <Image
                                                        style={{height:width*0.18, width:width*0.18}} 
                                                        source={item.img} />
                                                    </View>
                                                    <Text style={[style.scoreButtonsText, {fontSize: width * 0.04}]}>{item.item}</Text>
                                                </View>
                                            </View>
                                        </TouchableHighlight>
                                    )
                            })}
                            </View>

                            <View style={style.scoreCommentWrap}>
                                <Text style={style.scoreCommentTitle}>3. ¿Algún comentario adicional?</Text>
                                <View style={style.scoreCommentInputBox}>
                                <TextInput
                                    maxLength={180}
                                    placeholderTextColor="#fff"
                                    style={style.scoreCommentInput}
                                    underlineColorAndroid="transparent"
                                    onChangeText={(text) => this.setState({comment: text})}
                                    placeholder={"Tienes 180 caracteres."} />
                                </View>
                            </View>

                            <View style={{padding: 10, marginTop: 30}}>
                                <Text style={{textAlign: 'center', color: "#fff", fontFamily: 'Exo2-Regular'}}>Recuerda que cuando envíes tu calificación, los tips de gramática desaparecerán hasta tu próxima sesión.</Text>  
                            </View>
                            
                            <TouchableHighlight
                            style={style.scoreSendButton}
                            underlayColor={'transparent'}
                            onPress={() => this.validateSubmission()}>
                                <View style={style.scoreSend}>
                                {loading? 
                                    <ActivityIndicator size='large' style={{marginVertical: 23}}/> 
                                    : 
                                    <View>
                                        <Image
                                        style={{height:60, width:60}} 
                                        source={require('../assets/attention.png')} />
                                        <Text style={style.scoreSendText}>{'Send'}</Text>
                                    </View>
                                }
                                    
                                </View>
                            </TouchableHighlight>                   
                        </View>
            </ScrollView>
        )
    }
}