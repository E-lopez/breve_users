import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Button,
    Image,
    TouchableHighlight,
    Dimensions,
  } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../style/Style.js';

import InitBox from '../components/initComponents/InitBox';

import { SlideShow } from '../data/data';

const { width, height } = Dimensions.get('window');


export default class Start extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tip: 0
        };
    }

    setContent() {
        let { tip } = this.state
        switch(tip) {
            case 0:
                return <InitBox data={SlideShow[0]} />;
                break;
            case 1:
                return <InitBox  data={SlideShow[1]} />
                break;
            case 2:
                return <InitBox  data={SlideShow[2]} />
                break;
            case 3:
                return <InitBox  data={SlideShow[3]} />
                break;
            case 4:
                return <InitBox  data={SlideShow[4]} />
                break;
            case 5:
                return <InitBox  data={SlideShow[5]} />
                break;
            case 6:
                return <InitBox  data={SlideShow[6]} />
                break;
            case 7:
                return <InitBox  data={SlideShow[7]} />
                break;
            case 8:
                return <InitBox  data={SlideShow[8]} />
                break;
            default:
                return <InitBox  data={SlideShow[0]} />
                break;
        }
    }

    slide(arg) {
        let { tip } = this.state
        var Count = 0;
        if(arg === 'add' && tip !== 8) {
            this.setState({tip: this.state.tip + 1})
        } 
        if(arg === 'sub' && tip !== 0) {
            this.setState({tip: this.state.tip - 1})
        } 
        else if(tip === 8) {
            this.setState({tip: 0})
        }
    }

    goToLogin = () => {
        let { showGuide } = this.props
        if(showGuide) {
            showGuide()
        }
        else {
            this.props.navigation.navigate('Login');
        }        
    };   

    render() {
        return (
            <View style={{flex:1, backgroundColor: '#00bfff'}}>

                <View style={{flex: 1}}>
                    {this.setContent()} 
                </View>

                <View style={style.initialGuideControls}> 
                    <TouchableHighlight
                        underlayColor="transparent"
                        onPress={() => this.slide('sub')}>
                        <View style={style.next}>
                            <Icon name="arrow-back" color="#fff" size={40} />
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                    underlayColor="transparent"
                    onPress={() => this.goToLogin()}>
                        <View style={style.modalClose}>
                            <Text style={{fontFamily: 'Comfortaa-Light', color: "#eee", backgroundColor: 'rgba(255,255,255,0.2)', paddingVertical: 5,paddingHorizontal: 40, borderRadius: 50}}>Ir a login</Text>
                        </View>
                    </TouchableHighlight>
                
                    <TouchableHighlight
                        underlayColor="transparent"
                        onPress={() => this.slide('add')}>
                        <View style={style.next}>
                            <Icon name="arrow-forward" color="#fff" size={40} />
                        </View>
                    </TouchableHighlight>
                </View>
            </View> 
        );
    }
};
