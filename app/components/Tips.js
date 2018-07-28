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

import style from '../style/TipStyle';

import imgIntro from '../assets/slide.png';
import imgOutro from '../assets/customer.png';

import { TIPS_TEST, TIP_COLORS } from '../data/data';

let { width, height } = Dimensions.get('window')

export default class Cores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        this.setState({
            data: TIPS_TEST['0']['level_0']['past tenses']['momentos']
        })
    }

    render() {
        let { info, closeBoard, showClosingCard } = this.props
        let { data } = this.state
        return(
            <View style={[style.tipBoxContainer, {height: height * 0.6}]}>
                <ScrollView 
                style={style.tipsBoxWrap}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>

                    {showClosingCard ?
                        <View style={[style.tipBox, {width: width*0.9, backgroundColor: "#FE2A47"}]}>
                            <Text style={[style.tipTitle, {fontSize: width * 0.1}]}>Grammar Tips</Text>
                            <TouchableHighlight
                                onPress={() => closeBoard()}
                                underlayColor="transparent">
                                <Image source={imgOutro} style={{width: width * 0.3, height: width * 0.3}} />
                            </TouchableHighlight>
                            <Text style={style.tipBodyIntro}>Toca para calificar a tu guía o desliza para leer tus tips. Estos tips desaparecen cuando calificas.</Text>
                        </View>
                        : 
                        <View style={[style.tipBox, {width: width*0.9, backgroundColor: "#4D6171"}]}>
                            <Text style={[style.tipTitle, {fontSize: width * 0.1}]}>Grammar Tips</Text>
                            <Image source={imgIntro} style={{width: width * 0.3, height: width * 0.3}} />
                            <Text style={style.tipBodyIntro}>Lee estas tarjetas antes de tu sesión. Desliza a la derecha.</Text>
                        </View>
                    }
                        
                    {Object.keys(data).map((key, i) => {
                        var color = TIP_COLORS['0'][(key).split('_', 1)]
                        let item = data[key]
                        return (
                            <View style={[style.tipBox, {width: width*0.9, backgroundColor: color}]} key={i}>
                                <Text style={[style.tipTitle, {fontSize: width * 0.08}]}>{item.title}</Text>
                                {item.content ?
                                    <Text style={[style.tipBody, {fontSize: width * 0.05}]}>{item.content}</Text>
                                    :
                                    null 
                                }
                                {item.example ?
                                    <Text style={[style.tipBodyAlt, {fontSize: width * 0.05}]}>{item.example}</Text>
                                    :
                                    null 
                                }
                                {item.traducción ?
                                    <Text style={[style.tipBodyAlt, {fontSize: width * 0.05}]}>{item.traducción}</Text>
                                    :
                                    null 
                                }
                                {item.words ?
                                    item.words.map((word, i) => {
                                        let key = Object.keys(word)[0]
                                        return (
                                            <View key={i} style={{flexDirection: 'row'}}>
                                                <Text style={[style.tipWord, {fontSize: width * 0.06}]}>{key}: </Text>
                                                <Text style={[style.tipDefinition, {fontSize: width * 0.06}]}>{word[key]}</Text>
                                            </View>
                                        )
                                    })
                                    :
                                    null 
                                }
                                <Text style={{color: "#ccc"}}>{i + 1}/{Object.keys(data).length}</Text>
                            </View>
                        )
                    })}

                </ScrollView>
            </View>
        )
    }
}