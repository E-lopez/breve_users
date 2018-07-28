import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Button,
    ScrollView,
    TouchableHighlight
  } from 'react-native';

import Detail from '../components/Details';
import { FloatingSingle } from '../components/FloatingMenu';

export default class Skill extends Component {

  constructor(props){
    super(props);
    this.state = {
        addNew: true
    }
  }

  goBack(){
      this.props.navigation.navigate('Content')
  }

  render() {

    const { params } = this.props.navigation.state
    const CurrentSkill = [{"header": false, "name": params.name}]

    return(
      <View>
        <ScrollView style={{backgroundColor:"#FFF"}}
          ref="scroll">

            <Detail id={params.id} cat={params.cat} {...this.props} />

            <Button title="Back" onPress={() => this.props.navigation.goBack()} />
            
        </ScrollView>

        <FloatingSingle />
        

        </View>
    )
  }
}
