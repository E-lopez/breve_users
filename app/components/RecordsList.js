import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Button,
    Animated,
    ScrollView,
    TouchableHighlight
    } from 'react-native';
import { Card, Icon } from 'react-native-material-design';

import style from '../style/StyleProfileArea'


class Records extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 500
            }
        ).start();
    }

    render(){
        let { data } = this.props
        let { fadeAnim } = this.state        
        return (
            <Animated.ScrollView style={{opacity: fadeAnim}}>

            {!data ? <View style={style.recordsCard}>
                        <Text style={{margin: 100, color: "#777", fontSize: 18}}>Aquí verás el historial de tus sesiones!</Text>
                      </View> :
                Object.keys(data).map((key, i) => {
                    let record = data[key]
                    // console.log("RECORDS LIST MAp", record)
                        return (
                            <Card key={i} >
                                <Card.Body style={style.recordsCard}>
                                    <View style={style.recordsCard}>
                                        <View style={style.itemsRec}>
                                            <Text style={style.textRecs}>Fecha: {new Date(parseInt(key)).toLocaleDateString()}</Text>
                                            <Text style={style.textRecs}>Skill: {record.skill}</Text>
                                            <Text style={style.textRecs}>Type: {record.type}</Text>
                                            <Text style={style.textRecs}>Guía: {record.guide}</Text>
                                            <Text style={style.textRecs}>Dirección: {record.address}</Text>
                                        </View>
                                    </View>
                                </Card.Body>
                            </Card>
                        )
                    })
            }

                <View style={style.containerLogout}>
                    <Image source={require('../assets/breve_logo_0.2.png')}
                    style= {{height:100, width: 150, marginTop: 80, marginBottom: 80}} />
                </View>
       
           </Animated.ScrollView>
        )
    }
}

export default Records;



        

