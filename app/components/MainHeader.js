import React, { Component } from 'react';
import { 
    Text,
    View,
    Image,
    Modal,
    Animated,
    TextInput,
    ScrollView,  
    TouchableHighlight, 
    Button } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../style/MainHeaderStyle';

import Usage from '../components/userComponents/Usage';
import Upcoming from '../components/Upcoming';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.goToCancelSession = this.goToCancelSession.bind(this);
        this.state = {
            showUpcoming: false,
            showAvailable: false,
            fadeAnim: new Animated.Value(0),
            textAnim: new Animated.Value(0)
        }
    }

    animate() {
        if(!this.state.showAvailable) {
            Animated.parallel([
                Animated.timing(
                    this.state.fadeAnim,
                    { toValue: 50, duration: 550}
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

    goToCancelSession() {
        let { upcoming } = this.props
        this.setState({showUpcoming: false}, () => {
            this.props.navigation.navigate('CancelSession', {data: upcoming})
        })
    }

    openDrawer() {
        this.props.navigation.navigate('DrawerOpen')
    }  

  render() {
      
    const { payed, used, upcoming, clientCode, pendingSession } = this.props
    let { fadeAnim, textAnim } = this.state


    // console.log("MAIN HEADER", upcoming)

    return(
    <View style={style.testBox}>
        <View style={style.headerBox}>
        
            <View>                        
                <TouchableHighlight 
                    underlayColor={'transparent'}
                    onPress={() => this.openDrawer()}
                    >
                    <View>
                        <Icon name='menu' color="#00bfff" size={35} />
                    </View>
                </TouchableHighlight>
            </View>

            <View style={style.codeBox}>
                <Text style={style.userCode}>{!upcoming ? null : clientCode}</Text>
            </View>         

            <View style={style.buttonsRight}>                        
                <TouchableHighlight 
                    underlayColor={'transparent'}
                    onPress={() => {this.setState({
                        showUpcoming: true
                    })}}>
                    <View style={style.indicator}>
                        {!upcoming ? null :
                            <View style={style.upcomingIndicator}>
                                <Icon name="add-circle" color="#00bfff" size={15} />
                            </View>
                        }
                        <Icon name='notifications' color={!upcoming ? "#eee" : "#00bfff"} size={35} />
                    </View>
                </TouchableHighlight>

                <TouchableHighlight 
                    underlayColor={'transparent'}
                    onPress={() => {this.setState({
                                showAvailable: !this.state.showAvailable
                            }),
                            this.animate()
                        }}
                    >
                    <View style={style.indicatorB}>
                        <Text style={{color: "#00bfff", fontWeight: 'bold'}}>
                            {payed ? 
                                Math.floor((payed - used)/40000).toFixed(0)
                                : 
                                '0'
                            }
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
        
        <Animated.View style={[style.availableWrapper, {height: fadeAnim}]}>
            {this.state.showAvailable?
                <Usage Payed={payed} Used={used} />
                :
                null
            }
        </Animated.View>

        <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.showUpcoming}
            onRequestClose={() => {return;}}
            >
            <View style={style.upcomingModal}>
                <ScrollView style={style.modalInnerBox}>
                    <Upcoming 
                        data={upcoming} 
                        goToCancelSession={this.goToCancelSession}
                        pendingSession={pendingSession}
                    />
                </ScrollView>
                <TouchableHighlight
                    underlayColor="transparent"
                    onPress={() => {
                    this.setState({showUpcoming: false})
                    }}>
                    <View style={style.modalClose}>
                        <Icon name="close" color="#fff" size={60} />
                    </View>
                </TouchableHighlight>
            </View>
        </Modal>
      </View>
    )
  }
}
