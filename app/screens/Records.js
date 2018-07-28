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

import style from '../style/RecordsStyle';

import Header from '../components/UserHeader';
import RecordsList from '../components/RecordsList';
import { FloatingSingle } from '../components/FloatingMenu';

import { getRecordsB } from '../services/DataManager';

export default class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        getRecordsB().then((object) => {
            // console.log("RECORDS GET RECORDS", object)
            this.setState({
                data: object
            })
        })
    }

  render() {
    let { name, pic } = this.props.navigation.state.params

    return(
      <View style={style.recsMainContainer}>
   
        <Header title={name} pic={pic} color={"#eee"}/>

        <ScrollView>
            <View style={{alignItems: 'center', padding: 30}}>
                <Image
                style={{height:80, width:80, marginBottom: 20}} 
                source={require('../assets/recordsMenu.png')} />
                <Text style={{fontSize: 18, color: "#777"}}>Tu historial de sesiones con Breve.</Text>
            </View>

            <View style={style.recsContainer}>
                <RecordsList data={this.state.data} />
            </View>
        </ScrollView>

        <FloatingSingle icon={'arrow-back'} func={'goTo'} target={'Entry'} navigate={this.props.navigation.navigate} />
      </View>
    )
  }
}
