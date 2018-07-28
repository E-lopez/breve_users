import React, { Component } from 'react';
import { 
    Text,
    View,
    Image,
    Animated,
    TextInput,
    ScrollView,  
    TouchableHighlight, 
    Button } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../style/CollapsibleStyle';


/**Collapsible Box simpler style for INSTRUCTIONS component */

export class CollapsibleSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: false,
            fadeAnim: new Animated.Value(0),
            textAnim: new Animated.Value(0)
        }
    }

    triggerAnim(height) {
        if(!this.state.description) {
            Animated.parallel([
                Animated.timing(
                    this.state.fadeAnim,
                    { toValue: height, duration: 250}
                ),
                Animated.timing(
                    this.state.textAnim,
                    {toValue: 16, duration: 50}
                )
            ])
            .start();
        } else {
            Animated.parallel([
                Animated.timing(
                    this.state.fadeAnim,
                    { toValue: 0, duration: 250}
                ),
                Animated.timing(
                    this.state.textAnim,
                    {toValue: 0, duration: 50}
                )
            ])
            .start();
        } 
    }

  render() {

    let { fadeAnim, textAnim } = this.state

    return(
        <View style={style.instructionBox}>
            <TouchableHighlight
                underlayColor={"#fff"}
                onPress={() => this.setState({description: !this.state.description}, this.triggerAnim(this.props.height))}
                >
                <View style={style.instructionName}>
                    <Text style={style.instructionNameTxt}>{this.props.title}</Text>
                    <Icon name='expand-more' color="#777" size={35} />
                </View>
            </TouchableHighlight>

            <Animated.ScrollView style={[style.descriptionBox, {height: fadeAnim}]}>
                <TouchableHighlight
                    underlayColor={"#fff"}
                    onPress={() => this.setState({description: !this.state.description}, this.triggerAnim(this.props.height))}
                    >
                    <View style={style.descriptionSub}>
                        <Animated.Text style={[style.instructionBody, {fontSize: textAnim, padding: textAnim}]}>{this.props.content}</Animated.Text>
                    </View>
                </TouchableHighlight>
            </Animated.ScrollView> 
        </View>
    )
  }
};


/**Collapsible Box for STREGNTHS components */

export class CollapsibleExtended extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: false,
            fadeAnim: new Animated.Value(0),
            textAnim: new Animated.Value(0)
        }
    }

    triggerAnim(height) {
        if(!this.state.description) {
            Animated.parallel([
                Animated.timing(
                    this.state.fadeAnim,
                    { toValue: height, duration: 250}
                ),
                Animated.timing(
                    this.state.textAnim,
                    {toValue: 16, duration: 50}
                )
            ])
            .start();
        } else {
            Animated.parallel([
                Animated.timing(
                    this.state.fadeAnim,
                    { toValue: 0, duration: 250}
                ),
                Animated.timing(
                    this.state.textAnim,
                    {toValue: 0, duration: 50}
                )
            ])
            .start();
        } 
    }

  render() {

    let { fadeAnim, textAnim } = this.state
    let { title, description, height, index, color } = this.props

    return(
        <View style={style.extendedBox}>
            <TouchableHighlight
                underlayColor={"#fff"}
                onPress={() => this.setState({description: !this.state.description},        this.triggerAnim(this.props.height))}
                >
                <View style={style.extendedContent}>
                    <View style={[style.extendedHeader, {backgroundColor: color}]}>
                        <Text style={style.extendedHeaderNum}>{index}</Text>
                    </View>
            
                    <View>
                        <Text style={style.extendedHeaderTxt}>{title}</Text>
                    </View>
                    <View style={style.extendedMore}>
                        <Icon name='expand-more' color={this.props.color} size={25} />
                    </View> 
                </View>
            </TouchableHighlight>

            <Animated.ScrollView style={[style.extendedDescription, {height: fadeAnim}]}>
                <TouchableHighlight
                    underlayColor={"#fff"}
                    onPress={() => this.setState({description: !this.state.description}, this.triggerAnim(height))}
                    >
                    <View style={style.extendedSub}>
                        <Animated.Text style={[style.extendedBody, {fontSize: textAnim}]}>{description}
                        </Animated.Text>
                    </View>
                </TouchableHighlight>
            </Animated.ScrollView> 
        </View>
    )
  }
};


export class CollapsibleExtendedHolder extends Component {
  render() {
    return(
        <View style={style.holderBox}>
            <View style={[style.holderContent, {borderBottomColor: this.props.color}]}>
                <View style={style.holderHeader}>
                    
                    <Text style={style.extendedHeaderTxt}>{new Date().toDateString()}</Text>
                    <Text style={style.extendedHeaderTxt}>¡Nada por aquí!</Text>
                    <Image source={require('../assets/rocket.png')} style={{height: 50, width: 50, margin: 10}} />
                </View>
        
                <View style={style.extendedSub}>
                    <Text style={style.extendedBody}>Tus fortalezas aparecerán tan pronto como tus guías las publiquen.</Text>
                </View> 
            </View>
        </View>
    )
  }
};