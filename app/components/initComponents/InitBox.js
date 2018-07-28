import React, { Component } from 'react';
import {
    Text,
    View,
    Modal,
    Image,
    Button,
    Animated,
    Dimensions,
    ScrollView,
    TouchableHighlight,
  } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../../style/initialComponents/InitBoxStyle';

let { width, height } = Dimensions.get('screen')

export default class InitBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(1)
        }
    }

    componentWillReceiveProps() {
        Animated.sequence([
            Animated.timing(
                this.state.fadeAnim,
                { toValue: 0, duration: 0}
            ),
            Animated.timing(
                this.state.fadeAnim,
                { toValue: 1, duration: 500}
            )
        ])
        .start();   
    }

    render() {
        let { data } = this.props
        let { fadeAnim } = this.state 
        return(
            <Animated.View style={[style.box, {opacity: fadeAnim}]}>
                <Text style={style.guideTitle}>{data.title}</Text>
                <Image source={data.img} style={[style.guideImg, {width: height/4, height: height/4, marginVertical: height/7}]} />
                <View>  
                    <Text style={style.guideBullet}>{data.bullet}</Text>
                </View>   
            </Animated.View>
        )
    }
}