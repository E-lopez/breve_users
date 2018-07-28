import React, { Component } from 'react';
import {Text,
        View,
        Modal,
        Button, 
        TextInput,
        ScrollView, 
        Dimensions, 
        TouchableHighlight, 
        } from 'react-native';
import { Icon } from 'react-native-material-design';
import PushNotification from 'react-native-push-notification';

import Header from '../components/MainHeader';
import Cores from '../components/Cores';
import Feedback from '../components/Feedback';
import ScoreSession from '../components/ScoreSession';
import Tips from '../components/Tips';
import { FloatingSingle } from '../components/FloatingMenu';

import InitialGuide from '../components/initComponents/InitialGuide';

import NotificationController from '../services/NotificationController';
import { getCount, GET_USER, Updater, ADD_MESSAGE_LISTENER } from '../services/DataManager';

let { height, width } = Dimensions.get('window')


export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.update_after_score = this.update_after_score.bind(this);
    this.sendNotification = this.sendNotification.bind(this);
    this.showGuide = this.showGuide.bind(this);
    this.closeBoard = this.closeBoard.bind(this);
    this.new_message = this.new_message.bind(this);
    this.state = {
        user: {},
        upcoming: false,
        showScoringBoard: false,
        showGuide: false,
        pendingSession: '',
        conversation: false
    }
  }

  closeBoard() {
    this.setState({showScoringBoard: !this.state.showScoringBoard})
  }

  componentDidMount() {
    var listener = this.props.navigation.state.params.listener ? true : false
    var welcome = this.props.navigation.state.params.welcome ? true : false
    var userStatus = false;
    var pendingSessionInfo = false;
    console.log("ENTRY 56 DID MOUNT", listener, welcome, this.props.navigation.state.params)
    GET_USER()
    .then((user) => {
      if(user.profile.status === 'scorePending') {
        userStatus = true,
        pendingSessionInfo = user.session
      }
      this.setState({
        user: user.profile,
        upcoming: user.session,
        feedback: user.feedback,
        showScoringBoard: userStatus,
        showGuide: welcome,
        pendingSession: pendingSessionInfo
      })
    })
    .then(() => {
      if(listener || this.state.upcoming !== false) {
        //console.log("ENTRY 74 DID MOUNT LISTENER: ", listener, this.state.upcoming)
        ADD_MESSAGE_LISTENER(this.new_message)
        .then(() => { return; })
        .catch(() => { return; })
      }
    })
    .catch((err) => {console.log(err)});
  };

  new_message(data, userMsg, is_new, user_get) {
    console.log("ENTRY 84, new_message", data, userMsg, is_new)
    if(data) {
      this.setState({
        conversation: data,
        user_get: !user_get
      }, () => {
        if(!userMsg && !user_get) {
          this.sendNotification(
            '¡Nuevo mensaje!',
            'Toca para ver el mensaje de tu guía.'
          )
        }
        else {
          return;
        } 
      })
    }
  }

  sendNotification(title, message) {
    // console.log("ENTRY 66", title, message)
    PushNotification.cancelAllLocalNotifications()
    PushNotification.localNotification({
        title: title,
        message: message,
        color: "#00bfff",
        playSound: true,
        soundName: 'default',
        vibrate: true
      });
  }  

  showGuide() {
    this.setState({showGuide: !this.state.showGuide})
  }

  update_after_score(){
    this.setState({showScoringBoard: false}, () => {
      this.props.navigation.navigate('Home')
    })
  }

  render() {
    let { user, 
          upcoming, 
          feedback, 
          pendingSession, 
          showGuide, 
          showScoringBoard, 
          conversation,
          user_get } = this.state
    return(
      <View style={{flex: 1, backgroundColor: "#FFF", height: height}}>
        
        <Header 
          navigation={this.props.navigation} 
          payed={user.payed} 
          used={user.used} 
          upcoming={upcoming} 
          clientCode={user.clientCode} 
          pendingSession={pendingSession ? pendingSession : false}
        />
        
        <ScrollView>
          {upcoming?
            <Tips 
              closeBoard={this.closeBoard}
              info={upcoming ? upcoming : false} 
              feedback={feedback ? feedback.level : false} 
              showClosingCard={pendingSession}
            />
            :
            <Cores {...this.props} 
              user={user} 
            />
          }

          <Feedback {...this.props} 
            user={user} 
            feedback={feedback} 
          />

          <TouchableHighlight
          underlayColor='transparent'
          onPress={() => this.showGuide()}>
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 10, marginTop: 10}}>
              <Icon name="help" color="#00bfff" size={30} />
              <Text style={{fontSize: 24, fontFamily: 'Exo2-Regular', bottom: 15, marginTop: 15, color: "#00bfff"}}>Guía de uso</Text>
            </View>
          </TouchableHighlight>
          
        </ScrollView>

        <View style={{flex:1}}>
          <FloatingSingle 
            conversation={conversation}
            user_get={user_get}
            icon={'chat'}
            func={'chat'}
            navigate={this.props.navigation.navigate}
            upcoming={upcoming ? true : false}         
          />
        </View>

        <Modal
        animationType="slide"
        transparent={true}
        visible={showScoringBoard}
        onRequestClose={() => {return;}}>
          <View style={{flex: 1, marginTop: 57}}>
              <ScoreSession 
                closeBoard={this.closeBoard}
                session={pendingSession} 
                update={this.update_after_score} 
              />   
          </View>
        </Modal>

        <Modal
        animationType="slide"
        transparent={true}
        visible={showGuide}
        onRequestClose={() => {return;}}>
          <View style={{flex: 1}}>
              <InitialGuide 
                {...this.props} 
                entry={true} 
                showGuide={this.showGuide} 
              />   
          </View>
        </Modal>

        <NotificationController />
      
      </View>
    )
  }
}
