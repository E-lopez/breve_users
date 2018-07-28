import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import { Card, Icon, Avatar } from 'react-native-material-design';

import style from '../style/CardStyle';

export default class SkillCard extends Component {
    render() {
        return(
            <View>

                <Card style={{marginBottom: 40}}>
                    <Card.Media
                        image={<Image source={this.props.img} />}
                        overlay
                        />
                    <Card.Body>
                        <Text style={style.mainTitle}>{`${this.props.title.toUpperCase()}`}</Text>
                    </Card.Body>
                </Card>

                <View style={style.chunks}>
                    <Text style={style.subTitle}>¿Cómo funciona?</Text>
                    <View style={style.textChunk}>
                        <Image
                        source={require('../assets/information.png')}
                        style={style.iconChunk}
                        />
                        <Text style={style.text}>{this.props.description}</Text>
                    </View>   
                </View>

                <View style={style.chunks}>
                    <Text style={style.subTitle}>¿Qué lograrás?</Text>
                    <View style={style.textChunk}>
                        <Text style={style.textAlt}>{this.props.description}</Text>
                        <Image
                        source={require('../assets/goal.png')}
                        style={style.iconChunk}
                        />
                    </View> 
                </View>

          </View>
        )
    }
}