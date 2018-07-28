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

import style from '../style/FeedbackSubStyle';

import { CollapsibleExtendedHolder } from '../components/CollapsibleBox';

export default class Strenghts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skill: ''
        }
    }

  render() {
    let { Oportunities, Strengths, Comment, posted, color } = this.props

    var dataOr = Strengths ? true : false

    return(
      <ScrollView style={style.feedMainContainer}>

        <View style={[style.feedContainer, {backgroundColor: this.props.color}]}>
            <Image
            style={{height:100, width:100, marginBottom: 20}} 
            source={require('../assets/rocket.png')} />
            <Text style={[style.initialMsgFeed, {color: this.props.color}]}>{this.props.message}</Text>
        </View>

        <View style={style.feedDate}>
            <Text style={style.feedDateTxt}>{posted ? new Date(parseInt(posted)).toDateString() : null}</Text>
        </View>
        
        {dataOr ? 
            <View>
                <Text style={style.itemsTitle}>Tus fortalezas</Text>

                <View style={style.feedItemsWrap}>
                    {Object.keys(Strengths).map((key, i) => {
                        let item = Strengths[key]
                        return (
                            <View style={[style.strengthsBox, {backgroundColor: "#4D6171"}]} key={i}>
                                <Text style={style.feedbackItemsName}>{item}</Text>
                            </View>
                            )
                        }) 
                    }
                </View>

                <Text style={style.itemsTitle}>Tus oportunidades</Text>

                <View style={style.feedItemsWrap}> 
                    {Object.keys(Oportunities).map((key, i) => {
                        let item = Oportunities[key]
                        return (
                            <View style={[style.strengthsBox, {backgroundColor: "#F5546A"}]} key={i}>
                                <Text style={style.feedbackItemsName}>{item}</Text>
                            </View>
                            )
                        }) 
                    }
                </View>

                <View style={{padding: 50}}>
                    <Text style={[style.feedbackItemsName, {color: "#999", paddingVertical: 20}]}>{Comment}</Text>
                    <Text style={{textAlign: 'right'}}> - {posted ? new Date(parseInt(posted)).toDateString() : null}</Text>
                </View>

            </View>
            :
            <CollapsibleExtendedHolder color={this.props.color} /> 
        }
        
      </ScrollView>
    )
  }
}
