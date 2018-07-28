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
        Dimensions,
        ScrollView,
        DatePickerAndroid,
        TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../../style/chatStyle/ChatWrapStyle';

let { width } = Dimensions.get('screen')


export default class WriteMessage extends Component {
    render() {
        let { update_content, post_message, message, upcoming } = this.props
      return(
        <View style={{paddingHorizontal: 10, paddingVertical: width * 0.05}}>
            <View style={style.writeWrapMain}>
                <View style={style.writeInput}>
                    <TextInput 
                        ref={(e) => { this.message_input = e }} 
                        maxLength = {150}
                        onChangeText={(text) => update_content({message: text, code: 'f'})}
                        placeholder={'Escribe tu mensaje'}
                        style={{fontSize: width * 0.05, color: "#4D6171"}}
                        underlineColorAndroid="transparent"
                        value={message}
                    />
                </View>
                <View>
                    <TouchableHighlight
                        onPress={() => { 
                            if(upcoming) {
                                this.message_input.clear()
                                post_message()
                            } else {
                                return;
                            }                          
                        }}
                        underlayColor="transparent">
                        <View>
                            <Icon name="send" color={upcoming ? "#4D6171" : "#eee"} size={30} />
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
      )
    }
}