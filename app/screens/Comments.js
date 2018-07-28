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

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skill: ''
        }
    }

  render() {
    let { data } = this.props

    var dataOr = data ? true : false

    return(
      <ScrollView style={style.feedMainContainer}>

        <View style={[style.feedContainer, {backgroundColor: this.props.color}]}>
            <Image
            style={{height:100, width:100, marginBottom: 20}} 
            source={require('../assets/rocket.png')} />
            <Text style={[style.initialMsgFeed, {color: this.props.color}]}>{this.props.message}</Text>
        </View>

        <View>
            
            {dataOr ? 
                Object.keys(Strengths).map((key, i) => {
                    let item = Strengths[key]
                    return (
                        <View style={[style.strengthsBox, {backgroundColor: "#4D6171"}]} key={i}>
                            <Text style={style.feedbackItemsName}>{item}</Text>
                        </View>
                    )
                }) 
                :
                <CollapsibleExtendedHolder color={this.props.color} /> 
            }

        </View>

        <Text style={style.itemsTitle}>Tus oportunidades</Text>

        <View style={style.feedItemsWrap}>
            
            {dataOr ? 
                Object.keys(Oportunities).map((key, i) => {
                    let item = Oportunities[key]
                    return (
                        <View style={[style.strengthsBox, {backgroundColor: "#F5546A"}]} key={i}>
                            <Text style={style.feedbackItemsName}>{item}</Text>
                        </View>
                    )
                }) 
                :
                <CollapsibleExtendedHolder color={this.props.color} /> 
            }
        </View>
        
      </ScrollView>
    )
  }
}
