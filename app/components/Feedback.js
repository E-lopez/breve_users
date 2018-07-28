import React, { Component } from 'react';
import {Text,
        View,
        Image,
        Modal,
        Button,
        Animated,
        ScrollView,
        Dimensions,
        TouchableHighlight} from 'react-native';
import { Icon } from 'react-native-material-design';

import { FeedbackChunks, LevelDescription } from '../data/data';

import style from '../style/FeedbackStyle'

let { width, height } = Dimensions.get('window')

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLevelDescription: false
        }
    }
    render(){
        let { feedback, user } = this.props
        // console.log("COMPONENTS/FEEDBACK", feedback)
        return (
            <ScrollView>
                <View style={style.feedContainer}>
                    <View style={style.feedSubcontainer}>
                        <Text style={style.feedTitles}>Tu Progreso </Text>
                        <TouchableHighlight
                        underlayColor="transparent"
                        onPress={() => this.setState({showLevelDescription: true})}>
                            <View style={[style.feedTitlesLevel, {maxWidth: width * 0.95}]}>
                                <Text style={style.rateComment}>
                                    Breve:
                                </Text>
                                <Text style={[style.rate, {fontSize: width * 0.07}]}>
                                    {feedback ? feedback.level.level : '-'} <Text style={{fontSize: 10}}>de 10</Text>
                                </Text>
                                <Text style={style.rateComment}>
                                    CEFR:
                                </Text>
                                <Text style={[style.rate, {fontSize: 20}]}>
                                    {feedback ? feedback.level.CEFR : '-'}
                                </Text>
                                <View style={{paddingBottom: 10}}>
                                    <Icon name="help" color="#999" size={40} />
                                </View>
                            </View>
                        </TouchableHighlight>
                        <View>
                            <Text style={style.cefrNote}>*CEFR: Marco Común de Referencia Europeo</Text>
                        </View>
                    </View>

                    {FeedbackChunks.map((chunk, i) => {
                        return (
                            <TouchableHighlight
                                key={i}
                                underlayColor={"#fff"}
                                onPress={() => this.props.navigation.navigate('Feedback', {content: chunk.route, feedback: feedback, user: user})}>
                                    <View style={style.feedItems}>
                                        <View style={[style.feedButton, {backgroundColor: chunk.color}]}>
                                            <Image
                                                style={{width: width * 0.2, height: width * 0.2}} 
                                                source={chunk.image} />
                                        </View>
                                        <View style={style.feedButtonText}>
                                            <Text style={[style.titleFeedback, {color: chunk.color}]}>{chunk.title}</Text>
                                            <Text style={style.feedContent}>{chunk.description}</Text>
                                        </View>
                                    </View>
                            </TouchableHighlight>
                            )
                        })
                    }
                </View>

                <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.showLevelDescription}
                onRequestClose={() => {return;}}>
                  <TouchableHighlight
                    onPress={() => this.setState({showLevelDescription: false})}
                    style={{flex: 1}}
                    underlayColor="transparent">
                        <View style={[style.levelModal, {height: height*0.6, marginTop: height*0.4}]}>

                            <Text style={style.levelModalTitle}>
                                Nivel {feedback ? feedback.level.level : '-'}/10
                            </Text>

                            <Text style={style.levelModalText}>
                                {feedback ? 
                                    LevelDescription[feedback.level.level].description 
                                    : 
                                    'Aún no tienes nivel identificado. ¡Quiere decir que es tu primera vez con nosotros! Después de tu primera sesión verás aquí la descripción de tu nivel.'
                                }
                            </Text>  
                        </View>
                    </TouchableHighlight>
                </Modal>
            </ScrollView>
        )
    }
}

export default Feedback;


 

 
