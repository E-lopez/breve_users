import React, { Component } from 'react';
import {Text,
        View,
        Image,
        Button,
        TextInput,
        ScrollView,  
        TouchableHighlight} from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../style/TimeStyle'

import { FloatingSingle } from '../components/FloatingMenu';
import DateTime from '../components/scheduleComponents/DateTime'

export default class Time extends Component {
  constructor(props){
    super(props);
    this.test = this.test.bind(this)
  }

  test(arg){
    this.props.navigation.navigate('CheckOut', {user: this.props.navigation.state.params.user})
  }
  
  render() {
    return(
      <View style={style.timeMainContainer}>
        <ScrollView>
            <DateTime navigation={this.props.navigation} function={this.test} />
        </ScrollView>

        <View style={{left: '50%'}}>
          <FloatingSingle navigate={this.props.navigation.navigate} func={'goTo'} target={'Entry'} icon={'arrow-back'} />
        </View>
        
      </View>
    )
  }
}
