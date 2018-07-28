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

import style from '../style/FeedbackStyle';

import Header from '../components/UserHeader';
import { FloatingSingle } from '../components/FloatingMenu';

import Strenghts from '../components/Strenghts';
import Advice from '../components/Advice';


export default class FeedbackEntry extends Component {
    constructor(props) {
        super(props);
        this.scrollThing = this.scrollThing.bind(this);
        this.state = {
            skill: '',
        }
    }

    scrollThing(arg){
        this.refs.scroll.scrollTo({x:0, y:arg, animated:true});
    }

    setContent() {
        let { content, feedback, user } = this.props.navigation.state.params
        var message;
        var data = feedback ? feedback : false

        if (content === 'oportunities') {
            message = 'Tu feedback'
            return <Strenghts 
                    {...this.props} 
                    Oportunities={feedback ? feedback.oportunities : false} 
                    Strengths={feedback ? feedback.strengths : false}  
                    Comment={feedback ? feedback.comment : false}  
                    posted={feedback ? feedback.posted: false} 
                    color={'#2F4858'} 
                    message={message} />
        }
        else {
            message = 'Encuentra Vocabulario y material adicional escogido sólo para tí.'
            return <Advice 
                    {...this.props} 
                    vocabulary={feedback ? feedback.dictionary : false} 
                    posted={feedback ? feedback.posted : false} 
                    resources={feedback ? feedback.resources : false} 
                    color={'#4682B4'} message={message} 
                    scroll={this.scrollThing} 
                    user={user} />
        }
    }

  render() {
    let { user, upcoming, feedback } = this.props.navigation.state.params
    return(
      <View style={{flex: 1, backgroundColor: "#FFF"}}>

        <ScrollView ref='scroll'>
            {this.setContent()} 

            <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 50}}>
                <Text style={{color: '#777', fontFamily: 'Exo2-Regular', fontSize: 18}}>Esto es</Text>
                <Image
                style={{height:90, width:120}} 
                source={require('../assets/breve_logo_0.2.png')} />
            </View>
        </ScrollView>

        <FloatingSingle icon={'arrow-back'} func={'goBack'} navigate={this.props.navigation} />
      </View>
    )
  }
}
