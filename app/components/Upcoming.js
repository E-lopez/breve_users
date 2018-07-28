import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Alert,
    Button,
    Animated,
    ScrollView,
    TextInput,
    TouchableHighlight
    } from 'react-native';
import { Card, Icon } from 'react-native-material-design';

import { cancelSession } from '../services/DataManager';

import style from '../style/UpcomingStyle'


export default class Upcoming extends Component {
    render(){
        let { data, goToCancelSession, pendingSession } = this.props
        var sessionData = data ? Object.values(data)[0] : false
        var hour = new Date(parseInt(Object.keys(data))).toLocaleTimeString().split(':', 2)
        return (
            <View style={style.upcomingContainer}>

                    <View style={style.upcomingTitle}>
                        <Text style={style.upcomingSubTitles}>
                            {(new Date()).toDateString()}
                        </Text>
                    </View>

                {!sessionData ?  
                    <View style={{flex: 1, alignItems: 'center', marginTop: 50}} >
                            <Text style={style.textChunk}>¡Nada para hoy!</Text>
                    </View> 
                    :
                    <View>
                        <View style={{flex: 1, alignItems: 'center'}} >
                            <Text style={style.titleUpcoming}>Siguiente Sesión</Text>
                        </View> 

                        <View style={style.sessionCard}>
                            <View style={style.sessionInfo}>
                                <Text style={style.upcomingTextChunk}>Skill: {sessionData.skill}</Text>
                                <Text style={style.upcomingTextChunk}>Guía: {sessionData.guide}</Text>
                                <Text style={style.upcomingTextChunk}>Distancia: {sessionData.distance} km</Text>
                                <Text style={style.upcomingTextChunk}>Dirección: {(sessionData.address).split(',', 1)}</Text>
                                    <Text style={style.upcomingTextChunk}>
                                        Llega en {sessionData.time} mins, aprox.
                                    </Text>
                                <Text style={style.upcomingTextChunkTime}>Programada a las {hour[0]}:{hour[1]}</Text>
                            </View>

                            {pendingSession?
                                null
                                :
                                <View style={style.cancelButton}>
                                    <TouchableHighlight
                                    onPress={() => goToCancelSession(data)}
                                    underlayColor="#555">
                                        <View style={style.cancelButtonIcon}>
                                            <Icon name="delete" color={"#fff"} size={40} />
                                        </View>
                                    </TouchableHighlight>
                                    <Text>Ir a cancelar</Text>  
                                </View>
                            }
                            

                        </View>
                    </View>
                }

           </View>
        )
    }
}




