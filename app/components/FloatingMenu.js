import React, { Component } from 'react';
import {Text,
        View,
        Image,
        Modal,
        Button,
        Dimensions,
        ScrollView,
        TouchableHighlight } from 'react-native';
import { Card, Icon, Avatar } from 'react-native-material-design';
import style from '../style/FloatingStyle';

import Chat from '../components/chatComponents/ChatWrapper';

let { width, height } = Dimensions.get('screen')


export class FloatingSingle extends Component {
    constructor(props) {
        super(props);
        this.closeChat = this.closeChat.bind(this);
        this.state = {
            show_chat: false,
            show_notif: false
        }
    }

    adaptativeFunction() {
        let { func, navigate, target } = this.props
        if(func === "chat") {
            this.setState({
                show_chat: true,  
                show_notif: false          
            })
        }
        else if (func === "goTo") {
            navigate(target)
        }
        else if (func === 'goBack') {
            navigate.goBack(null)
        }
    }

    closeChat(){
        this.setState({
            show_chat: false,
            user_get: false
        })
    }

    count_replies(data) {
        var count = 0;

        Object.keys(data).map((key) => {
            let item = data[key]
            if(item.sender === 'g') {
                return count += 1
            }
            else {
                return;
            }
        })
        return count;
    }

    render() {
        let { show_notif } = this.state
        let { upcoming, New_message_notification, conversation, user_get } = this.props
        var new_message_notif = conversation ? user_get : false
        console.log("FLOAT M 70", new_message_notif, user_get)
        return(
            <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>  

                    <TouchableHighlight style={style.chatButton}
                        onPress={() => this.adaptativeFunction()}
                        underlayColor='#fff'>   
                        <View>                                     
                            <View>
                                <Icon name={this.props.icon} 
                                    color='#fff' 
                                    style={{marginBottom:1}}/>
                            </View>
                        </View>
                    </TouchableHighlight>

                    {new_message_notif ?
                        <View style={[style.newMessageNotifWrap, {bottom: 65}]}>
                            <Text style={style.newMessageNotifNum}>1</Text>
                        </View>
                        :
                        null
                    } 
          
                <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.show_chat}
                onRequestClose={() => {return;}}>
                    <View style={{flex: 1}}>
                        <Chat 
                            conversation={conversation}
                            closeChat={this.closeChat}
                            New_message_notification={New_message_notification}
                            upcoming={upcoming} />
                    </View>
                </Modal>
            </View>
        )
    }
};

